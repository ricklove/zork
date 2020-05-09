// RUN 
import { StringSpan } from "./stringSpan";
import { DEBUG } from "./debug";
import { runDebug } from "./debugRun";

export type ZNode = {
    _raw: StringSpan;
};

export class ZFile implements ZNode {
    _debug?: string = undefined;
    kind = 'ZFile';

    _raw: StringSpan;
    title?: StringSpan;
    content: ZNode;

    constructor(args: { raw: StringSpan, title?: StringSpan, content: ZNode }) {
        this._raw = args.raw;
        this.title = args.title;
        this.content = args.content;

        if (DEBUG) {
            this._debug = this.toString();
        }
    }
    toString() { return `${this.title} \n\n---\n\n ${this.content}`; }
};

export class ZList implements ZNode {
    _debug?: string = undefined;
    kind = 'ZTag';

    _raw: StringSpan;
    openSymbol?: OpenSymbol;
    closeSymbol?: CloseSymbol;
    depth: number;
    nodes: ZNode[];

    constructor(args: { raw: StringSpan, openSymbol: undefined | OpenSymbol, closeSymbol: undefined | CloseSymbol, depth: number, nodes: ZNode[] }) {
        this._raw = args.raw;
        this.openSymbol = args.openSymbol;
        this.closeSymbol = args.closeSymbol;
        this.depth = args.depth;
        this.nodes = args.nodes;

        if (DEBUG) {
            this._debug = this.toString();
        }
    }
    toString() {
        const indent = [...new Array(this.depth + 1)].join('  ');
        return `${this.openSymbol}${this.nodes.map(x => `${x}`).join(`\n${indent}`)}${this.closeSymbol !== 1 ? this.closeSymbol : ''}`;
    }
};

export class ZToken implements ZNode {
    _debug?: string = undefined;
    kind = 'ZWord';

    _raw: StringSpan;

    constructor(args: { raw: StringSpan }) {
        this._raw = args.raw;
        if (DEBUG) {
            this._debug = this.toString();
        }
    }
    toString() {
        return this._raw + '';
    }
};

type OpenSymbol = '<' | '(' | '{' | '[' | '"' | '\'' | ';';
type CloseSymbol = '>' | ')' | '}' | ']' | '"' | 1;
const getCloseSymbol = (s: OpenSymbol) => {
    switch (s) {
        case '<': return '>';
        case '(': return ')';
        case '{': return '}';
        case '[': return ']';
        case '"': return '"';
        // Take one token
        case '\'': return 1;
        case ';': return 1;
        default: throw new Error(`Unknown Symbol ${s}`);
    }
};

export const parseContent = (source: StringSpan, start: number, depth: number, openSymbol: undefined | OpenSymbol, closeSymbol: undefined | CloseSymbol, parentCloseSymbol?: CloseSymbol): ZNode => {

    const debug = source.newRange(start, source.length);

    const innerStart = start + (openSymbol?.length ?? 0);
    let end = innerStart
    const nodes = [] as ZNode[];

    const comments = [] as StringSpan[];
    let iTextStart = null as null | number;

    const closeText = (iTextAfter: number) => {
        if (iTextStart == null) { return; }
        const raw = source.newRange(iTextStart, iTextAfter - iTextStart);
        const trimmed = raw.trim();
        // if (trimmed.length <= 0) { return; }

        nodes.push(new ZToken({ raw }));
        iTextStart = null;
    };

    for (let i = innerStart; i < source.start + source.length; i++) {
        const c = source.getChar(i);

        // Handle Strings (To non-escaped "")
        if (openSymbol === '"') {

            // Handle Escapes (ignore next char)
            if (c === '\\') {
                i++;
                end = i;
                continue;
            }

            // Handle End of string
            if (c === '"') {
                closeText(i);
                end = i;
                break;
            }

            if (iTextStart == null) {
                iTextStart = i;
            }

            continue;
        }

        // Handle Close (Single Token)
        if (closeSymbol === 1) {
            // Node created
            if (nodes.length >= 1) {
                i--;
                end = i;
                break;
            }
            // Parent Close
            if (c === parentCloseSymbol) {
                closeText(i);
                i--;
                end = i;
                break;
            }
        }

        // Handle Whitespace
        if (c === ' ' || c === '\t' || c === '\r' || c === '\n') {
            closeText(i);
            continue;
        }


        // Handle Close (Close Symbol)
        if (c === closeSymbol) {
            closeText(i);
            end = i;
            break;
        }

        // Handle Children 
        if (c === '<' || c === '(' || c === '{' || c === '['
            || c === '"'
            || c === '\'' || c === ';') {
            closeText(i);
            const child = parseContent(source, i, depth + 1, c, getCloseSymbol(c), closeSymbol);
            nodes.push(child);
            i = child._raw.start + child._raw.length - 1;
            end = i;
            continue;
        }


        // Handle Text
        if (iTextStart == null) {
            iTextStart = i;
        }

        end = i;
    }

    return new ZList({
        raw: source.newRange(start, end - start + 1),
        openSymbol,
        closeSymbol,
        depth,
        nodes
    });
}

export const parseZorkFile = (text: string): ZFile => {
    const source = new StringSpan(text, 0, text.length);

    const quoteParts = source.splitOn('"', 3);
    const title = quoteParts.length == 2 && source.startsWith('"') ? quoteParts[1].trim('"') : undefined;

    const contentText = quoteParts.length == 2 ? source.transform(quoteParts[2].start - source.start, 0).trim() : source;
    const node = parseContent(contentText, 0, 0, undefined, undefined);

    // const sections: ZFileSection[] = source.splitOn('\n;').map(x => {
    //     const raw = x;
    //     const trimmed = x.trimStart(['\n', ';']).trimStart();
    //     const quoteParts = trimmed.splitOn('"', 3);
    //     const header = quoteParts.length == 2 && trimmed.startsWith('"') ? quoteParts[1].trim('"') : undefined;
    //     const contentText = quoteParts.length == 2 ? trimmed.transform(quoteParts[2].start - trimmed.start, 0).trim() : trimmed;
    //     const content = parseContent(contentText);
    //     const s = new ZFileSection({
    //         raw,
    //         header,
    //     });
    //     return s;
    // });

    const file = new ZFile({ raw: source, title, content: node });
    const files = [file];
    return file;
};


// Quick Run
runDebug();