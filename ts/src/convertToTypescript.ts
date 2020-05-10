import { ZNode, ZList, ZToken } from "./parseAst";

function getIndentation(depth: number) {
    return [...new Array(depth + 1)].join('  ');
}

const getIndentedNodes = (nodes: ZNode[], depth: number, indentFirst = false, delimeter = ''): string => {
    const indent = getIndentation(depth);
    return `${indentFirst ? `\n${indent}` : ''}${nodes.map(x => `${convertToTypescript(x)}`).join(`${delimeter}\n${indent}`)}`;
};

const convertToTypescriptString = (node: ZList): string => {
    return `"${node._raw.trimStart(';').trim().trim('"').trim().toString().replace(/\r?\n/g, '\\n')}"`;
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

// const convertToTypescriptTypeName = (node: ZToken): string => {
//     const raw = node._raw.toString();
//     if (raw === 'FIX') { return 'number'; }

//     return convertToTypescriptName(node);
// }

const convertToTypescriptFunctionDeclaration = (name: undefined | ZToken, argsList: undefined | ZList, declList: undefined | ZList, body: undefined | ZList[], depth: number, ) => {
    const nameText = name && name.kind === 'ZToken' ? convertToTypescriptName(name) : undefined;
    const bodyText = body?.map(n => convertToTypescript(n)).join('\n') ?? '';

    let argsListText = '';
    let varsListText = '';
    if (argsList) {

        const OPTIONAL = '"OPTIONAL"';
        const AUX = '"AUX"';

        const argNodes = argsList.nodes.filter(x => x.toString() !== OPTIONAL);
        const iAux = argNodes.findIndex(x => x.toString() === AUX);
        const argsBeforeAux = iAux >= 0 ? argNodes.slice(0, iAux) : argNodes;
        const argsAfterAux = iAux >= 0 ? argNodes.slice(iAux) : [];

        argsListText = getIndentedNodes(argsBeforeAux.filter(x => x.toString() !== OPTIONAL) ?? [], depth, false, ',');
        varsListText = getIndentedNodes(argsAfterAux.filter(x => x.toString() !== OPTIONAL) ?? [], depth, false, ',');

        if (declList) {
            // <DEFINE OPEN-CLOSE (VERB ATM STROPN STRCLS)
            //   #DECL ((VERB) VERB (ATM) ATOM (STROPN STRCLS) STRING)
            const dNode = declList?.nodes[1];

            // (VERB) VERB (ATM) ATOM (STROPN STRCLS) STRING
            const dMappingNodes = dNode?.kind === 'ZList' ? dNode.nodes : [];
            const dMapNames = dMappingNodes.filter((x, i) => i % 2 === 0).map(x => ` ${x.toString()} `);
            const dMapTypes = dMappingNodes.filter((x, i) => i % 2 === 1);

            let _lastOptional = false;
            let _afterAux = false;
            const args = (argsList.nodes).map(x => {
                if (x.kind === 'ZList' && x.openSymbol === '(') {
                    const a = x.nodes[0] as ZToken;
                    return {
                        arg: x,
                        argName: convertToTypescriptName(a),
                        argValue: convertToTypescript(x.nodes[1]),
                    };
                }

                return {
                    arg: x,
                    argName: convertToTypescriptName(x as ZToken),
                    argValue: null,
                };
            }).map(x => {
                if (x.arg.toString() === OPTIONAL) {
                    _lastOptional = true;
                    return null;
                }
                if (x.arg.toString() === AUX) {
                    _afterAux = true;
                    return null;
                }


                const dIndex = dMapNames.findIndex(d => d.includes(x.argName));
                const dType = dIndex >= 0 ? dMapTypes[dIndex] : undefined;

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
            argsListText = `${args.filter(x => !x.afterAux).map(x => `${x.argName}${x.isOptional ? '?' : ''}${x.dataType ? `: ${convertToTypescript(x.dataType)}` : ''}`).join(`,\n${indent}`)}`;
            varsListText = `${args.filter(x => x.afterAux).map(x => `\n${indent}let ${x.argName}${x.isOptional ? '?' : ''}${x.dataType ? `: ${convertToTypescript(x.dataType)}` : ''} = ${x.argValue};`).join(``)}`;
        }
    }

    return `${nameText ? `FUNCTIONS.${nameText} = ` : '/* FUNCTION */'}\n${getIndentation(depth)}(${argsListText}) => {\n${getIndentation(depth + 1)}${varsListText}\n${getIndentation(depth + 1)}${bodyText}\n${getIndentation(depth)}}`;
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

    return convertToTypescriptFunctionDeclaration(name, argsList, decl, body, depth);
};


export const convertToTypescript = (node: ZNode): string => {

    if (node.kind === 'ZFile') {
        // Get title
        if (node.content.kind === 'ZList') {
            const firstNode = +!undefined && node.content.nodes[0];
            if (firstNode && firstNode.kind === 'ZList' && firstNode.openSymbol === '"') {
                return `${convertToTypescriptComment(firstNode)}\n\n${node.content.nodes.slice(1).map(convertToTypescript).join('\n\n')}`;
            }

            return `${node.content.nodes.map(convertToTypescript).join('\n\n')}`;
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

        // Null: <>
        if (openSymbol === '<' && nodes.length === 0) {
            return 'null';
        }

        const firstNode = +!undefined && nodes[0];

        // Global Values 
        // Get with ,atom
        if (firstNode && openSymbol === ','
            && firstNode.kind === 'ZToken'
        ) {
            return `GLOBALS.${convertToTypescriptName(firstNode)}`;
        }
        // <GVAL atom>
        if (firstNode && openSymbol === '<'
            && firstNode.kind === 'ZToken'
            && firstNode.toString() === 'GVAL'
            && nodes.length === 2
            && nodes[1].kind === 'ZToken'
        ) {
            return `GLOBALS.${convertToTypescriptName(nodes[1])}`;
        }
        // <SETG atom any>
        if (firstNode && openSymbol === '<'
            && firstNode.kind === 'ZToken'
            && firstNode.toString() === 'SETG'
            && nodes.length === 3
            && nodes[1].kind === 'ZToken'
        ) {
            return `GLOBALS.${convertToTypescriptName(nodes[1])} = ${convertToTypescript(nodes[2])}`;
        }

        // Local Values 
        // Get with .atom
        if (firstNode && openSymbol === '.'
            && firstNode.kind === 'ZToken'
        ) {
            return `LOCALS.${convertToTypescriptName(firstNode)}`;
        }
        // <LVAL atom>
        if (firstNode && openSymbol === '<'
            && firstNode.kind === 'ZToken'
            && firstNode.toString() === 'LVAL'
            && nodes.length === 2
            && nodes[1].kind === 'ZToken'
        ) {
            return `LOCALS.${convertToTypescriptName(nodes[1])}`;
        }
        // <SET atom any>
        if (firstNode && openSymbol === '<'
            && firstNode.kind === 'ZToken'
            && firstNode.toString() === 'SET'
            && nodes.length === 3
            && nodes[1].kind === 'ZToken'
        ) {
            return `LOCALS.${convertToTypescriptName(nodes[1])} = ${convertToTypescript(nodes[2])}`;
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

        // Forms: <FUNC ...ARGS> (i.e. calling functions)
        if (openSymbol === '<' && firstNode && firstNode.kind === 'ZToken') {
            const name = convertToTypescriptName(firstNode);
            return `${name}(${getIndentedNodes(nodes.slice(1), depth, true, ',')})`;
        }


        // TS List as Array
        return `/*${openSymbol ?? ''}*/ [${getIndentedNodes(nodes, depth, false, ',')}] /*${closeSymbol ?? ''}*/`;

        // Unknown
        const getDefaultWithIndentedChildren = () => {
            return `${openSymbol ?? ''}${getIndentedNodes(nodes, depth)}${typeof closeSymbol === 'number' ? '' : (closeSymbol ?? '')}`;
        };
        return getDefaultWithIndentedChildren();
    }

    if (node.kind === 'ZToken') {
        const name = convertToTypescriptName(node);
        return name;
    }

    return node + '';
};

