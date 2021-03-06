// RUN 
import { StringSpan } from "./stringSpan";
import { DEBUG } from "./debug";

type ZNodeBase = {
    _raw: StringSpan;
    kind: unknown;
};

export type ZNode = ZFile | ZList | ZToken;

export class ZFile implements ZNodeBase {
    _debug?: string = undefined;
    kind = 'ZFile' as const;

    _raw: StringSpan;
    content: ZNode;

    constructor(args: { raw: StringSpan, content: ZNode }) {
        this._raw = args.raw;
        this.content = args.content;

        if (DEBUG) {
            this._debug = this.toString();
        }
    }
    toString() { return `${this.content}`; }
};

export class ZList implements ZNodeBase {
    _debug?: string = undefined;
    kind = 'ZList' as const;

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
        return `${this.openSymbol ?? ''}${this.nodes.map(x => `${x}`).join(`\n${indent}`)}${typeof this.closeSymbol === 'number' ? '' : (this.closeSymbol ?? '')}`;
    }
};

export class ZToken implements ZNodeBase {
    _debug?: string = undefined;
    kind = 'ZToken' as const;

    _raw: StringSpan;

    constructor(args: { raw: StringSpan }) {
        this._raw = args.raw;
        if (DEBUG) {
            this._debug = this.toString();
        }
    }
    toString() {
        return this._raw.toString().replace(/\s/g, ' ') + '';
    }
};

type OpenSymbol = '<' | '(' | '{' | '['
    | '"'
    | '.' | ',' | '#' | '\'' | ';' | '%';
type CloseSymbol = '>' | ')' | '}' | ']' | '"' | 1 | 2;

const isOpenSymbol = (c: string): c is OpenSymbol => {
    return (c === '<' || c === '(' || c === '{' || c === '['
        || c === '"'
        || c === '.' || c === ','
        || c === '#' || c === '\'' || c === ';'
        || c === '%'
    );
}
const isCloseSymbol = (c: string): c is OpenSymbol => {
    return (c === '>' || c === ')' || c === '}' || c === ']'
        || c === '"'
    );
}

const getCloseSymbol = (s: OpenSymbol) => {
    switch (s) {
        case '<': return '>';
        case '(': return ')';
        case '{': return '}';
        case '[': return ']';
        case '"': return '"';
        // Take one token
        case ',': return 1;
        case '.': return 1;
        case '#': return 2;
        case '\'': return 1;
        case ';': return 1;
        case '%': return 1;
        default: throw new Error(`getCloseSymbol: Unknown Symbol ${s}`);
    }
};

const WhiteSpace = ' \f\n\r\t\v';
const isWhitespace = (c: string) => WhiteSpace.indexOf(c) >= 0;

const nums = '0123456789'.split('');
const isFloat = (c: StringSpan) => {
    return c.trim().trim(nums).length <= 0;
}

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

        // Handle Token Escapes (ignore next char)
        if (c === '\\') {
            i++;
            end = i;
            continue;
        }

        // Handle Close (Single Token)
        if (typeof closeSymbol === 'number') {
            // Node created
            if (nodes.length >= closeSymbol) {
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
        if (isWhitespace(c)) {
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
        if (isOpenSymbol(c)) {

            const isNum = c === '.' && iTextStart && isFloat(source.newRange(iTextStart, i - iTextStart));

            if (!isNum) {
                closeText(i);
                const child = parseContent(source, i, depth + 1, c, getCloseSymbol(c), typeof closeSymbol === 'number' ? parentCloseSymbol : closeSymbol);
                nodes.push(child);
                i = child._raw.start + child._raw.length - 1;
                end = i;
                continue;
            }

            // if (isNum) {
            //     var breakdance = true;
            // }
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
    const node = parseContent(source, 0, 0, undefined, undefined);
    const file = new ZFile({ raw: source, content: node });
    return file;
};

export const parseZorkFiles = (texts: string[]): ZFile[] => {
    const files = texts.map(parseZorkFile);
    return files;
}
