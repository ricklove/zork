import { ZNode, ZList, ZToken } from "./parseAst";

const getIndentedNodes = (nodes: ZNode[], depth: number, indentFirst = false, delimeter = ''): string => {
    const indent = [...new Array(depth + 1)].join('  ');
    return `${indentFirst ? `\n${indent}` : ''}${nodes.map(x => `${convertToTypescript(x)}`).join(`${delimeter}\n${indent}`)}`;
};

const convertToTypescriptString = (node: ZList): string => {
    return `"${node._raw.trimStart(';').trim().trim('"').trim().toString().replace(/\r?\n/g, '\\n')}"`;
}

const convertToTypescriptComment = (node: ZList): string => {
    return `// ${node._raw.trimStart(';').trim().trim('"').trim().toString().replace(/\s/g, ' ')}`;
}

const converToTypescriptName = (node: ZToken): string => {
    return `${node._raw.toString()
        .toLowerCase()
        .replace(/==/g, '_EQ')
        .replace(/\?/g, '_Q')
        .replace(/\!/g, '_X')
        .replace(/[^A-Za-z0-9]/g, '_')
        }`;
}

const convertToTypescriptFunction = (name: undefined | ZToken, argsList: undefined | ZList, body: undefined | ZList, depth: number, ) => {
    const nameText = name && name.kind === 'ZToken' ? converToTypescriptName(name) : undefined;
    const argsListText = getIndentedNodes(argsList?.nodes ?? [], depth, true, ',');
    const bodyText = getIndentedNodes(body?.nodes ?? [], depth, true, ',');

    return `${nameText ? `\\*${nameText}*\\` : ''}(${argsListText}) => (${bodyText})`;
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

        const firstNode = +!undefined && nodes[0];

        // Lazy Values
        if (firstNode && openSymbol === '\'') {
            return `() => ${convertToTypescript(firstNode)}`;
        }

        // // Functions Declarations: 
        // // #FUNCTION (act:atom arguments:list decl body)
        // // <SETG SQUARE #FUNCTION ((X) <* .X .X>)>
        // // <SETG SQUARE <FUNCTION (X) <* .X .X>>>
        // // <DEFINE SQUARE (X) <* .X .X>>
        // if (firstNode && firstNode.kind === 'ZToken') {

        //     // #FUNCTION (act:atom arguments:list decl body)
        //     if (openSymbol === '#' && firstNode.toString() === 'FUNCTION'
        //         && nodes.length === 2 && nodes[1].kind === 'ZList' && nodes[1].openSymbol === '('
        //     ) {
        //         const def = nodes[1];

        //         const name = def.nodes[1].kind === 'ZToken' ? def.nodes[1] : undefined;
        //         const argsList = def.nodes.find(x => x.kind === 'ZList' && x.openSymbol === '(') as ZList | undefined;
        //         const forms = def.nodes.filter(x => x.kind === 'ZList' && x.openSymbol === '<') as ZList[];
        //         const body = forms[forms.length - 1];
        //         return convertToTypescriptFunction(name, argsList, body, depth);
        //     }

        //     // <SETG SQUARE #FUNCTION ((X) <* .X .X>)>
        //     if (openSymbol === '<'
        //         && nodes.length === 3
        //         && nodes[0].kind === 'ZToken'
        //         && nodes[0].toString() === 'SETG'
        //         && nodes[1].kind === 'ZToken'
        //         && nodes[2].kind === 'ZList'
        //         && nodes[2].openSymbol === '#'
        //         && nodes[2].nodes.length === 2
        //         && nodes[2].nodes[0]?.kind === 'ZToken'
        //         && nodes[2].nodes[0]?.toString() === 'FUNCTION'
        //         && nodes[2].nodes[1]?.kind === 'ZList'
        //         && nodes[2].nodes[1]?.openSymbol === '('
        //     ) {
        //         const name = nodes[1];
        //         const def = nodes[2].nodes[1];
        //         const argsList = def.nodes.find(x => x.kind === 'ZList' && x.openSymbol === '(') as ZList | undefined;
        //         const forms = def.nodes.filter(x => x.kind === 'ZList' && x.openSymbol === '<') as ZList[];
        //         const body = forms[forms.length - 1];
        //         return convertToTypescriptFunction(name, argsList, body, depth);
        //     }

        //     // <SETG SQUARE <FUNCTION (X) <* .X .X>>>
        //     if (openSymbol === '<'
        //         && nodes.length === 3
        //         && nodes[0].kind === 'ZToken'
        //         && nodes[0].toString() === 'SETG'
        //         && nodes[1].kind === 'ZToken'
        //         && nodes[2].kind === 'ZList'
        //         && nodes[2].openSymbol === '<'
        //         && nodes[2].nodes.length === 2
        //         && nodes[2].nodes[0]?.kind === 'ZToken'
        //         && nodes[2].nodes[0]?.toString() === 'FUNCTION'
        //     ) {
        //         const name = nodes[1];
        //         const def = nodes[2];
        //         const argsList = def.nodes.find(x => x.kind === 'ZList' && x.openSymbol === '(') as ZList | undefined;
        //         const forms = def.nodes.filter(x => x.kind === 'ZList' && x.openSymbol === '<') as ZList[];
        //         const body = forms[forms.length - 1];
        //         return convertToTypescriptFunction(name, argsList, body, depth);
        //     }

        //     // <DEFINE SQUARE (X) <* .X .X>>
        //     if (openSymbol === '<'
        //         && nodes.length === 3
        //         && nodes[0].kind === 'ZToken'
        //         && nodes[0].toString() === 'DEFINE'
        //         && nodes[1].kind === 'ZToken'
        //         && nodes[2].kind === 'ZList'
        //         && nodes[2].openSymbol === '('
        //         && nodes[3].kind === 'ZList'
        //         && nodes[3].openSymbol === '<'
        //     ) {
        //         const name = nodes[1];
        //         const argsList = nodes[2];
        //         const body = nodes[3];
        //         return convertToTypescriptFunction(name, argsList, body, depth);
        //     }
        // }

        // // Anonymous Functions: i.e. Declared and passed 
        // // <FUNCTION (X) <RTRO <FIND-ROOM <SPNAME .X>> ,RFILLBIT>>
        // if (openSymbol === '<'
        //     && nodes.length === 3
        //     && nodes[0].kind === 'ZToken'
        //     && nodes[0].toString() === 'FUNCTION'
        //     && nodes[1].kind === 'ZList'
        //     && nodes[1].openSymbol === '('
        //     && nodes[2].kind === 'ZList'
        //     && nodes[2].openSymbol === '<'
        // ) {
        //     const argsList = nodes[1];
        //     const body = nodes[2];
        //     return convertToTypescriptFunction(undefined, argsList, body, depth);
        // }

        // Forms: <FUNC ...ARGS> (i.e. calling functions)
        if (openSymbol === '<' && firstNode && firstNode.kind === 'ZToken') {
            const name = converToTypescriptName(firstNode);
            return `${name}(${getIndentedNodes(nodes.slice(1), depth, true, ',')})`;
        }

        // Unknown
        const getDefaultWithIndentedChildren = () => {
            return `${openSymbol ?? ''}${getIndentedNodes(nodes, depth)}${typeof closeSymbol === 'number' ? '' : (closeSymbol ?? '')}`;
        };
        return getDefaultWithIndentedChildren();
    }

    if (node.kind === 'ZToken') {
        const name = converToTypescriptName(node);
        return name;
    }

    return node + '';
};