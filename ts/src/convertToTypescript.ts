import { ZNode, ZList, ZToken } from "./parseAst";

const getIndentedNodes = (nodes: ZNode[], depth: number, indentFirst = false): string => {
    const indent = [...new Array(depth + 1)].join('  ');
    return `${indentFirst ? `\n${indent}` : ''}${nodes.map(x => `${convertToTypescript(x)}`).join(`\n${indent}`)}`;
};

const convertToTypescriptString = (node: ZList): string => {
    return `"${node._raw.trimStart(';').trim().trim('"').trim().toString().replace(/\r?\n/g, '\\n')}"`;
}

const convertToTypescriptComment = (node: ZList): string => {
    return `// ${node._raw.trimStart(';').trim().trim('"').trim().toString().replace(/\s/g, ' ')}`;
}

const converToTypescriptName = (node: ZToken): string => {
    return `${node._raw.toString()
        .replace(/==/, 'EQ')
        .replace(/\?/, '_q')
        .replace(/[^A-Z0-9]/, '_')
        .toLowerCase()
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

        // Functions
        if (firstNode && openSymbol === '<') {
            if (firstNode.kind == 'ZToken') {
                const name = converToTypescriptName(firstNode);
                return `${name}(${nodes.slice(1).map(x => `${convertToTypescript(x)}`).join(`, `)})`;
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