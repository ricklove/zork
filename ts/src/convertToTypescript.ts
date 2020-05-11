import { ZNode, ZList, ZToken } from "./parseAst";

function getIndentation(depth: number) {
    return [...new Array(depth + 1)].join('  ');
}

const getNodesWithSpace = (nodes: ZNode[], depth: number, indentFirst = false, delimeter = '', shouldReturnLast = false, allowsStatement = false): string => {
    return getNodesWithOriginalDecorations(nodes, depth, indentFirst, delimeter, shouldReturnLast, allowsStatement);
};

const getNodesWithIndent = (nodes: ZNode[], depth: number, indentFirst = false, delimeter = '', shouldReturnLast = false, allowsStatement = false): string => {
    const indent = getIndentation(depth);
    return `${indentFirst ? `\n${indent}` : ''}${nodes.map((x, i) => convertToTypescript(x, { shouldReturn: shouldReturnLast && i === nodes.length - 1, allowsStatement: allowsStatement })).join(`${delimeter}\n${indent}`)}`;
};

const getNodesWithOriginalDecorations = (nodes: ZNode[], depth: number, indentFirst = false, delimeter = '', shouldReturnLast = false, allowsStatement = false): string => {
    if (nodes.length === 0) { return ''; }

    const start = nodes[0]._raw.start;

    let text = '';
    let s = start;

    for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Get extra stuff
        const extraLen = n._raw.start - s;
        if (extraLen > 0) {
            const extra = n._raw.source.substr(s, extraLen);
            text += extra;
            s += extraLen;
        }

        // Get node content
        const nodeText = convertToTypescript(n, { shouldReturn: shouldReturnLast && i === nodes.length - 1, allowsStatement: allowsStatement });
        text += `${nodeText}${delimeter}`;
        s += n._raw.length;
    }

    text = text.substr(0, text.length - delimeter.length);

    return text;
};

const convertToTypescriptString = (node: ZList): string => {
    return `\`${node._raw.trim().transform(1, -1).toString()}\``;
}

const convertToTypescriptComment = (node: ZList): string => {
    return `// ${node._raw.trimStart(';').trim().trim('"').trim().toString().replace(/\s/g, ' ')}`;
}

const convertToTypescriptName = (node: ZToken): string => {
    return `${node._raw.toString()
        .toLowerCase()
        .replace(/==/g, '_EQ')
        .replace(/\?/g, '_Q')
        .replace(/\!/g, '_X')
        .replace(/[^A-Za-z0-9]/g, '_')
        }`;
}

const convertToTypescriptType = (node: ZNode): string => {
    const t = convertToTypescript(node);

    return t
        .replace(/\|\|/g, '|')
        .replace(/&&/g, '&')
        // .replace(/\[/g, '<')
        // .replace(/\]/g, '>')
        // .replace(/\(/g, '<')
        // .replace(/\)/g, '>')
        // .replace(/\<\</g, '<')
        // .replace(/\>\>/g, '>')
        // .replace(/\(\[/g, '<')
        // .replace(/\]\)/g, '>')
        .toUpperCase()
        ;
}

const getDeclarationMap = (dMappingNodes: ZNode[]) => {
    const declMapNameSearch = dMappingNodes.filter((x, i) => i % 2 === 0).map(x => ` ${x.toString()} `);
    const declMapTypes = dMappingNodes.filter((x, i) => i % 2 === 1);

    const declarations = dMappingNodes.filter((x, i) => i % 2 === 0)
        .flatMap((x, i) => x.kind === 'ZList' ? x.nodes.map(n => ({
            declaration: n,
            declarationType: declMapTypes[i],
        })) : []);

    return {
        declarations,
        declMapNameSearch,
        declMapTypes,
    };
};

const getConditionMap = (nodes: ZNode[]) => {
    const conditionBlocks = nodes
        .map((x, i) => {
            const cNodes = x.kind === 'ZList' && x.openSymbol === '(' && x.nodes || [];
            //const condition = nodes.length > 1 ? cNodes[0] : undefined;
            const condition = cNodes[0];
            const bodyNodes = condition ? cNodes.slice(1) : cNodes;
            return {
                condition,
                bodyNodes,
            };
        });

    return {
        conditionBlocks,
    };
};

const convertToTypescriptFunctionDeclaration = (name: undefined | ZToken, argsList: undefined | ZList, declList: undefined | ZList, body: undefined | ZList[], depth: number, isFileScope = false) => {
    const nameText = name && name.kind === 'ZToken' ? convertToTypescriptName(name) : undefined;

    const bodyText = body?.map(n => `${convertToTypescript(n, { shouldReturn: true, allowsStatement: true })};\n`).join('') ?? '';

    let argsListText = '';
    let varsListText = '';
    if (argsList) {

        const OPTIONAL = '"OPTIONAL"';
        const AUX = '"AUX"';

        const argNodes = argsList.nodes.filter(x => x.toString() !== OPTIONAL);
        const iAux = argNodes.findIndex(x => x.toString() === AUX);
        const argsBeforeAux = iAux >= 0 ? argNodes.slice(0, iAux) : argNodes;
        const argsAfterAux = iAux >= 0 ? argNodes.slice(iAux) : [];

        argsListText = getNodesWithSpace(argsBeforeAux.filter(x => x.toString() !== OPTIONAL) ?? [], depth, false, ',');
        varsListText = getNodesWithSpace(argsAfterAux.filter(x => x.toString() !== OPTIONAL) ?? [], depth, false, ',');

        if (declList) {
            // <DEFINE OPEN-CLOSE (VERB ATM STROPN STRCLS)
            //   #DECL ((VERB) VERB (ATM) ATOM (STROPN STRCLS) STRING)
            const dNode = declList?.nodes[1];

            // (VERB) VERB (ATM) ATOM (STROPN STRCLS) STRING
            const {
                declMapNameSearch: declMapNames,
                declMapTypes,
            } = getDeclarationMap(dNode?.kind === 'ZList' ? dNode.nodes : []);

            let _lastOptional = false;
            let _afterAux = false;
            const args = (argsList.nodes).map(x => {
                if (x.kind === 'ZList' && x.openSymbol === '(') {
                    const a = x.nodes[0] as ZToken;
                    return {
                        arg: x,
                        rawName: a.toString(),
                        argName: convertToTypescriptName(a),
                        argValue: convertToTypescript(x.nodes[1]),
                    };
                }

                return {
                    arg: x,
                    rawName: x.toString(),
                    argName: convertToTypescriptName(x as ZToken),
                    argValue: null,
                };
            }).map(x => {
                if (x.rawName === OPTIONAL) {
                    _lastOptional = true;
                    return null;
                }
                if (x.rawName === AUX) {
                    _afterAux = true;
                    return null;
                }


                const dIndex = declMapNames.findIndex(d => d.includes(x.rawName));
                const dType = dIndex >= 0 ? declMapTypes[dIndex] : undefined;

                const isOptional = _lastOptional;
                _lastOptional = false;
                return {
                    ...x,
                    // defaultValue:
                    dataType: dType,
                    isOptional,
                    afterAux: _afterAux,
                };
            }).filter(x => x).map(x => x!);
            // const declListText = dInput ? getIndentedNodes(dInput, depth, false, ',') : undefined;
            // typeDefText = declListText ? `\n${getIndentation(declList?.depth ?? 0)}: ( (${declListText}) => unknown )` : '';

            const indent = getIndentation(depth + 1);
            argsListText = `${args.filter(x => !x.afterAux).map(x => `${x.argName}${x.isOptional ? '?' : ''}${x.dataType ? `: ${convertToTypescriptType(x.dataType)}` : ''}`).join(`, `)}`;
            varsListText = `${args.filter(x => x.afterAux).map(x => `\n${indent}let ${x.argName}${x.isOptional ? '?' : ''}${x.dataType ? `: ${convertToTypescriptType(x.dataType)}` : ''} = ${x.argValue};`).join(``)}`;
        }
    }

    return `${nameText ? `${isFileScope ? 'export ' : ''}function ${nameText}` : 'function'}(${argsListText}) {${varsListText}\n${getIndentation(depth + 1)}${bodyText}${getIndentation(depth)}}`;
};

const convertToTypescriptFunctionDeclarationOuter = (name: undefined | ZToken, funNodes: ZNode[], depth: number) => {
    const lists = funNodes.filter(x => x.kind === 'ZList' && x.openSymbol === '(') as ZList[];
    const hashes = funNodes.filter(x => x.kind === 'ZList' && x.openSymbol === '#') as ZList[];
    const forms = funNodes.filter(x => x.kind === 'ZList' && x.openSymbol === '<') as ZList[];
    const argsList = lists[0];
    const decl = hashes[0];
    const body = forms;

    if (lists.length > 1 || hashes.length > 1) {
        let breakdance = 'begin';
    }

    return convertToTypescriptFunctionDeclaration(name, argsList, decl, body, depth, depth <= 1);
};


export const convertToTypescript = (node: ZNode, options?: { shouldReturn?: boolean, allowsStatement?: boolean }): string => {
    let shouldReturn = options?.shouldReturn ?? false;
    let usesStatement = false;
    const n = convertToTypescript_inner(node, {
        shouldReturn,
        onHasReturned: () => shouldReturn = false,
        shouldUseExpression: !options?.allowsStatement,
        onUsesStatement: () => usesStatement = true
    });

    if (!options?.allowsStatement && usesStatement) {
        // IIFE to wrap statement body
        return `(() => {${n}})()`;
    }

    return `${shouldReturn ? 'return ' : ''}${n}`;
}

export const convertToTypescript_inner = (node: ZNode, options?: { shouldReturn: boolean, onHasReturned: () => void, shouldUseExpression: boolean, onUsesStatement: () => void }): string => {

    if (node.kind === 'ZFile') {
        // Get title
        if (node.content.kind === 'ZList') {
            const firstNode = +!undefined && node.content.nodes[0];
            if (firstNode && firstNode.kind === 'ZList' && firstNode.openSymbol === '"') {
                return `${convertToTypescriptComment(firstNode)}\n\n${getNodesWithSpace(node.content.nodes.slice(1), 0, false, '', false, true)}`;
            }

            return getNodesWithSpace(node.content.nodes, 0, false, '', false, true);
        }

        return convertToTypescript(node.content);
    }

    if (node.kind === 'ZList') {
        const { openSymbol, closeSymbol, depth, nodes } = node;

        // Comments
        if (openSymbol === ';') {
            return convertToTypescriptComment(node);
        }

        // Strings
        if (openSymbol === '"') {
            return convertToTypescriptString(node);
        }

        // False: <> (null)
        if (openSymbol === '<' && nodes.length === 0) {
            return 'false';
        }

        const firstNode = +!undefined && nodes[0];

        // Global Values 
        // Get with ,atom
        if (firstNode && openSymbol === ','
            && firstNode.kind === 'ZToken'
        ) {
            return `G_${convertToTypescriptName(firstNode)}`;
        }
        // <GVAL atom>
        if (firstNode && openSymbol === '<'
            && firstNode.kind === 'ZToken'
            && firstNode.toString() === 'GVAL'
            && nodes.length === 2
            && nodes[1].kind === 'ZToken'
        ) {
            return `G_${convertToTypescriptName(nodes[1])}`;
        }
        // <SETG atom any>
        if (firstNode && openSymbol === '<'
            && firstNode.kind === 'ZToken'
            && firstNode.toString() === 'SETG'
            && nodes.length === 3
            && nodes[1].kind === 'ZToken'
        ) {
            return `G_${convertToTypescriptName(nodes[1])} = ${convertToTypescript(nodes[2])}`;
        }

        // <GDLEC (atom list) type (atom list) type ...>
        if (firstNode && openSymbol === '<'
            && firstNode.kind === 'ZToken'
            && firstNode.toString() === 'GDECL'
        ) {
            const { declarations } = getDeclarationMap(nodes.slice(1));

            return declarations.map(x => `export let G_${convertToTypescript(x.declaration)}: ${convertToTypescriptType(x.declarationType)};`).join('');
        }

        // Local Values 
        // Get with .atom
        if (firstNode && openSymbol === '.'
            && firstNode.kind === 'ZToken'
        ) {
            return `${convertToTypescriptName(firstNode)}`;
        }
        // <LVAL atom>
        if (firstNode && openSymbol === '<'
            && firstNode.kind === 'ZToken'
            && firstNode.toString() === 'LVAL'
            && nodes.length === 2
            && nodes[1].kind === 'ZToken'
        ) {
            return `${convertToTypescriptName(nodes[1])}`;
        }
        // <SET atom any>
        if (firstNode && openSymbol === '<'
            && firstNode.kind === 'ZToken'
            && firstNode.toString() === 'SET'
            && nodes.length === 3
            && nodes[1].kind === 'ZToken'
        ) {
            return `${convertToTypescriptName(nodes[1])} = ${convertToTypescript(nodes[2])}`;
        }

        // Lazy Values
        if (firstNode && openSymbol === '\'') {
            return `() => ${convertToTypescript(firstNode)}`;
        }

        // Functions Declarations: 
        // #FUNCTION (act:atom arguments:list decl body)
        // <SETG SQUARE #FUNCTION ((X) <* .X .X>)>
        // <SETG SQUARE <FUNCTION (X) <* .X .X>>>
        // <DEFINE SQUARE (X) <* .X .X>>
        if (firstNode && firstNode.kind === 'ZToken') {

            // #FUNCTION (act:atom arguments:list decl body)
            if (openSymbol === '#' && firstNode.toString() === 'FUNCTION'
                && nodes.length === 2 && nodes[1].kind === 'ZList' && nodes[1].openSymbol === '('
            ) {
                const def = nodes[1];
                const name = def.nodes[1].kind === 'ZToken' ? def.nodes[1] : undefined;

                const funNodes = nodes[1].nodes;
                return convertToTypescriptFunctionDeclarationOuter(name, funNodes, depth);
            }

            // <SETG SQUARE #FUNCTION ((X) <* .X .X>)>
            if (openSymbol === '<'
                && nodes.length === 3
                && nodes[0].kind === 'ZToken'
                && nodes[0].toString() === 'SETG'
                && nodes[1].kind === 'ZToken'
                && nodes[2].kind === 'ZList'
                && nodes[2].openSymbol === '#'
                && nodes[2].nodes.length === 2
                && nodes[2].nodes[0]?.kind === 'ZToken'
                && nodes[2].nodes[0]?.toString() === 'FUNCTION'
                && nodes[2].nodes[1]?.kind === 'ZList'
                && nodes[2].nodes[1]?.openSymbol === '('
            ) {
                const name = nodes[1];
                const funNodes = nodes[2].nodes[1].nodes;
                return convertToTypescriptFunctionDeclarationOuter(name, funNodes, depth);
            }

            // <SETG SQUARE <FUNCTION (X) <* .X .X>>>
            if (openSymbol === '<'
                && nodes.length === 3
                && nodes[0].kind === 'ZToken'
                && nodes[0].toString() === 'SETG'
                && nodes[1].kind === 'ZToken'
                && nodes[2].kind === 'ZList'
                && nodes[2].openSymbol === '<'
                && nodes[2].nodes.length === 2
                && nodes[2].nodes[0]?.kind === 'ZToken'
                && nodes[2].nodes[0]?.toString() === 'FUNCTION'
            ) {
                const name = nodes[1];
                const funNodes = nodes[2].nodes;
                return convertToTypescriptFunctionDeclarationOuter(name, funNodes, depth);
            }

            // <DEFINE SQUARE (X) <* .X .X>>
            // <DEFINE SQUARE (X) #DECL (...) <* .X .X>>
            if (openSymbol === '<'
                // && nodes.length === 4
                && nodes[0].kind === 'ZToken'
                && nodes[0].toString() === 'DEFINE'
                && nodes[1].kind === 'ZToken'
                && nodes[2].kind === 'ZList'
                && nodes[2].openSymbol === '('
                // && nodes[3].kind === 'ZList'
                // && nodes[3].openSymbol === '<'
            ) {
                const name = nodes[1];
                const funNodes = nodes;
                return convertToTypescriptFunctionDeclarationOuter(name, funNodes, depth);
            }
        }

        // Anonymous Functions: i.e. Declared and passed 
        // <FUNCTION (X) <RTRO <FIND-ROOM <SPNAME .X>> ,RFILLBIT>>
        // <FUNCTION (X) #DECL (...) <RTRO <FIND-ROOM <SPNAME .X>> ,RFILLBIT>>
        if (openSymbol === '<'
            // && nodes.length === 3
            && nodes[0].kind === 'ZToken'
            && nodes[0].toString() === 'FUNCTION'
            && nodes[1].kind === 'ZList'
            && nodes[1].openSymbol === '('
            // && nodes[2].kind === 'ZList'
            // && nodes[2].openSymbol === '<'
        ) {
            const name = undefined;
            const funNodes = nodes;
            return convertToTypescriptFunctionDeclarationOuter(name, funNodes, depth);
        }

        // FORMS: <NAME...args> ---

        // Array Access: <1 .ATM>
        if (openSymbol === '<'
            && firstNode
            && firstNode.kind === 'ZToken'
            && nodes.length === 2
            && (parseInt(firstNode._raw.toString()) + '' === firstNode._raw.toString())
        ) {
            return `${convertToTypescript(nodes[1])}[${convertToTypescript(nodes[0])}]`;
        }
        if (openSymbol === '<'
            && firstNode
            && firstNode.kind === 'ZToken'
            && (firstNode.toString() === 'NTH' || firstNode.toString() === 'GET')
            && (nodes.length === 2 || nodes.length === 3)
        ) {
            return `${convertToTypescript(nodes[1])}[${nodes[2] ? convertToTypescript(nodes[2]) : 1}]`;
        }

        // Array Set: <1 .ATM VAL>
        if (openSymbol === '<'
            && firstNode
            && firstNode.kind === 'ZToken'
            && nodes.length === 3
            && (parseInt(firstNode._raw.toString()) + '' === firstNode._raw.toString())
        ) {
            return `${convertToTypescript(nodes[1])}[${convertToTypescript(nodes[0])}] = ${convertToTypescript(nodes[2])}`;
        }
        if (openSymbol === '<'
            && firstNode
            && firstNode.kind === 'ZToken'
            && (firstNode.toString() === 'PUT')
            && nodes.length === 4
        ) {
            return `${convertToTypescript(nodes[1])}[${convertToTypescript(nodes[2])}] = ${convertToTypescript(nodes[3])}`;
        }

        // Length
        if (openSymbol === '<'
            && firstNode
            && firstNode.kind === 'ZToken'
            && firstNode.toString() === 'LENGTH'
            && nodes.length === 2
        ) {
            return `${convertToTypescript(nodes[1])}.length`;
        }



        // // Array Init: <ILIST, IVECTOR, IUVECTOR
        // if (openSymbol === '<'
        //     && firstNode
        //     && firstNode.kind === 'ZToken'
        //     && (firstNode.toString() === 'ILIST' || firstNode.toString() === 'IVECTOR' || firstNode.toString() === 'IUVECTOR')
        //     && nodes.length >= 2
        // ) {
        //     const defaultVal = nodes[2] ? convertToTypescript(nodes[2]) : null;
        //     return `[...new Array(${convertToTypescript(nodes[1])})].map(()=>${defaultVal})`;
        // }
        // // String Init: ISTRING
        // if (openSymbol === '<'
        //     && firstNode
        //     && firstNode.kind === 'ZToken'
        //     && (firstNode.toString() === 'ISTRING')
        //     && nodes.length >= 2
        // ) {
        //     const defaultVal = nodes[2] ? convertToTypescript(nodes[2]) : '\\0';
        //     return `[...new Array(${convertToTypescript(nodes[1])})].join(()=>${defaultVal})`;
        // }

        // MEMBER
        // NOTE: Technically this returns a sublist starting with the found item
        if (openSymbol === '<'
            && firstNode
            && firstNode.kind === 'ZToken'
            && (firstNode.toString() === 'MEMBER')
            && (nodes.length === 3)
        ) {
            return `${convertToTypescript(nodes[2])}[${convertToTypescript(nodes[1])}]`;
        }

        // Unary Operators
        if (openSymbol === '<'
            && firstNode
            && firstNode.kind === 'ZToken'
            && nodes.length === 2
        ) {
            if (firstNode.toString() === 'NOT') {
                return `!${convertToTypescript(nodes[1])}`;
            }
        }

        // Binary Operators
        if (openSymbol === '<'
            && firstNode
            && firstNode.kind === 'ZToken'
            && nodes.length === 3
        ) {
            if (firstNode.toString() === '==?') {
                return `${convertToTypescript(nodes[1])} === ${convertToTypescript(nodes[2])}`;
            }
            if (firstNode.toString() === 'N==?') {
                return `${convertToTypescript(nodes[1])} !== ${convertToTypescript(nodes[2])}`;
            }
            if (firstNode.toString() === '=?') {
                return `${convertToTypescript(nodes[1])} == ${convertToTypescript(nodes[2])}`;
            }
            if (firstNode.toString() === 'N=?') {
                return `${convertToTypescript(nodes[1])} != ${convertToTypescript(nodes[2])}`;
            }
            if (firstNode.toString() === 'L?') {
                return `${convertToTypescript(nodes[1])} < ${convertToTypescript(nodes[2])}`;
            }
            if (firstNode.toString() === 'NL?') {
                return `${convertToTypescript(nodes[1])} >= ${convertToTypescript(nodes[2])}`;
            }
            if (firstNode.toString() === 'G?') {
                return `${convertToTypescript(nodes[1])} > ${convertToTypescript(nodes[2])}`;
            }
            if (firstNode.toString() === 'NG?') {
                return `${convertToTypescript(nodes[1])} <= ${convertToTypescript(nodes[2])}`;
            }
        }


        // N-nary Operators
        if (openSymbol === '<'
            && firstNode
            && firstNode.kind === 'ZToken'
            && nodes.length >= 2
        ) {
            if (firstNode.toString() === 'AND') {
                return `(${nodes.slice(1).map(x => `${convertToTypescript(x)}`).join(' && ')})`;
            }
            if (firstNode.toString() === 'OR') {
                return `(${nodes.slice(1).map(x => `${convertToTypescript(x)}`).join(' || ')})`;
            }
        }

        // Conditions
        if (openSymbol === '<'
            && firstNode
            && firstNode.kind === 'ZToken'
            && firstNode.toString() === 'COND'
        ) {
            const isTernary = false;
            // const isTernary = options?.shouldUseExpression;
            const isStatement = !isTernary;
            if (isStatement) {
                options?.onUsesStatement();
            }

            if (options?.shouldReturn) {
                options.onHasReturned();
            }

            const c = getConditionMap(nodes.slice(1));
            const indent = getIndentation(depth);
            const indent1 = getIndentation(depth + 1);
            return `${c.conditionBlocks.map((x, i) => {
                const returnLast = true;

                const isFirst = i === 0;
                const isLast = i === c.conditionBlocks.length - 1;
                let cond = x.condition ? convertToTypescript(x.condition) : (isLast ? undefined : true);
                //const body = getNodesWithSpace(x.bodyNodes, depth, false, ';');
                let body = getNodesWithIndent(x.bodyNodes, depth + 1, false, ';', returnLast, isStatement) + ';';

                if (isLast && cond && x.bodyNodes.length === 0) {
                    cond = undefined;
                    body = getNodesWithIndent([x.condition], depth + 1, false, ';', returnLast, isStatement) + ';';
                }

                if (isTernary) {
                    if (isFirst) {
                        return `(${cond}) ? (${body})${isLast ? ' : false' : ''}`;
                    } else if (cond) {
                        return `: (${cond}) ? (${body})${isLast ? ' : false' : ''}`;
                    } else {
                        return `: (${body})`;
                    }
                }

                // TS will return undefined by default which is good enough for a falsy value
                //const defaultReturn = `${isLast && options?.shouldReturn ? `\n${indent}return false` : ''}`;
                const defaultReturn = ``;

                if (isFirst) {
                    return `if(${cond}) {\n${indent1}${body}\n${indent}}${defaultReturn}`;
                } else if (cond) {
                    return `else if(${cond}) {\n${indent1}${body}\n${indent}}${defaultReturn}`;
                } else {
                    return `else {\n${indent1}${body}\n${indent}}`;
                }
            }).join(` `)}`;
        }

        // Forms: <FUNC ...ARGS> (i.e. calling functions)
        if (openSymbol === '<' && firstNode && firstNode.kind === 'ZToken') {
            const name = convertToTypescriptName(firstNode);
            return `${name}(${getNodesWithSpace(nodes.slice(1), depth, true, ',')})`;
        }


        // TS List as Array
        return `/*${openSymbol ?? ''}*/ [${getNodesWithOriginalDecorations(nodes, depth, false, ',')}] /*${closeSymbol ?? ''}*/`;
        // return `[${getNodesWithOriginalDecorations(nodes, depth, false, ',')}]`;

        // Unknown
        const getDefaultWithIndentedChildren = () => {
            return `${openSymbol ?? ''}${getNodesWithSpace(nodes, depth)}${typeof closeSymbol === 'number' ? '' : (closeSymbol ?? '')}`;
        };
        return getDefaultWithIndentedChildren();
    }

    if (node.kind === 'ZToken') {
        const name = convertToTypescriptName(node);
        return name;
    }

    return node + '';
};

