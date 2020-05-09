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

        // Lookups
        if (firstNode && openSymbol === '\'') {
            return `() => ${convertToTypescript(firstNode)}`;
        }

        // Functions
        if (firstNode && openSymbol === '<') {


            if (firstNode.kind == 'ZToken') {
                const name = converToTypescriptName(firstNode);
                return `${name}(${getIndentedNodes(nodes.slice(1), depth, true, ',')})`;
            }

            // if( name === '')
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