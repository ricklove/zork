import { ZNode, ZList } from "./parseAst";

const getIndentedNodes = (nodes: ZNode[], depth: number, indentFirst = false): string => {
    const indent = [...new Array(depth + 1)].join('  ');
    return `${indentFirst ? `\n${indent}` : ''}${nodes.map(x => `${convertToTypescript(x)}`).join(`\n${indent}`)}`;
};

const converToTypescriptComment = (node: ZList): string => {
    return `// ${node._raw.trimStart(';').trim().trim('"').trim().toString().replace(/\s/g, ' ')}`;
}

export const convertToTypescript = (node: ZNode): string => {

    if (node.kind === 'ZFile') {
        // Get title
        if (node.content.kind === 'ZList') {
            const firstNode = node.content.nodes[0];
            if (firstNode.kind === 'ZList' && firstNode.openSymbol === '"') {
                return `${converToTypescriptComment(firstNode)}\n\n${node.content.nodes.slice(1).map(convertToTypescript).join('\n\n')}`;
            }

            return `${node.content.nodes.map(convertToTypescript).join('\n\n')}`;
        }

        return convertToTypescript(node.content);
    }

    if (node.kind === 'ZList') {
        if (node.openSymbol === ';') {
            return converToTypescriptComment(node);
        }

        // const firstNode = node.nodes[0];

        // if (firstNode.kind == 'ZToken') {
        //     const name = firstNode.toString();

        //     // if( name === '')
        // }

        // return `${getIndented(nodes, depth)}`;

        // Default
        const getDefaultWithIndentedChildren = () => {
            const { openSymbol, closeSymbol, depth, nodes } = node;
            return `${openSymbol ?? ''}${getIndentedNodes(nodes, depth)}${typeof closeSymbol === 'number' ? '' : (closeSymbol ?? '')}`;
        };
        return getDefaultWithIndentedChildren();
    }

    return node + '';
};