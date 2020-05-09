import { ZNode } from "./parseAst";

const getIndentedNodes = (nodes: ZNode[], depth: number, indentFirst = false): string => {
    const indent = [...new Array(depth + 1)].join('  ');
    return `${indentFirst ? `\n${indent}` : ''}${nodes.map(x => `${convertToTypescript(x)}`).join(`\n${indent}`)}`;
};

export const convertToTypescript = (node: ZNode): string => {

    if (node.kind === 'ZFile') {
        return convertToTypescript(node.content);
    }

    if (node.kind === 'ZList') {
        if (node.openSymbol === ';') {
            return `// ${node._raw.trimStart(';').trim().trim('"').trim().toString().replace(/\s/g, ' ')}`;
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