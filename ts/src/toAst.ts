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
    sections: ZFileSection[];
    constructor(args: { raw: StringSpan, sections: ZFileSection[] }) {
        this._raw = args.raw;
        this.sections = args.sections;

        if (DEBUG) {
            this._debug = this.toString();
        }
    }
    toString() { return `Sections:(${this.sections.length}) \n\n---\n\n ${this.sections.join('\n\n---\n\n')}`; }
};


export class ZFileSection implements ZNode {
    _debug?: string = undefined;
    kind = 'ZFile';

    _raw: StringSpan;
    header?: StringSpan;
    content?: ZNode;

    constructor(args: { raw: StringSpan, header?: StringSpan, content?: ZNode }) {
        this._raw = args.raw;
        this.header = args.header;
        this.content = args.content;

        if (DEBUG) {
            this._debug = this.toString();
        }
    }
    toString() { return `${this.header ?? ''}\n${this.content}`.trim(); }
};


export class ZTag implements ZNode {
    _debug?: string = undefined;
    kind = 'ZTag';

    _raw: StringSpan;
    name?: StringSpan;
    content?: ZNode;

    constructor(args: { raw: StringSpan, name?: StringSpan, content?: ZNode }) {
        this._raw = args.raw;
        this.name = args.name;
        this.content = args.content;

        if (DEBUG) {
            this._debug = this.toString();
        }
    }
    toString() { return `<${this.name ?? ''}>\n${this.content}\n</${this.name ?? ''}>`.trim(); }
};

export const parseContent = (source: StringSpan): ZNode => {

    // This must be parsed serially with recursion - which makes sense with limited memory

    // const iStartTag = source.indexOf('<');
    // const iEndTag = source.lastIndexOf('>');

    // const t = new ZTag();

}

export const parseZorkFile = (text: string): ZFile => {
    const source = new StringSpan(text, 0, text.length);

    const sections: ZFileSection[] = source.splitOn('\n;').map(x => {
        const raw = x;
        const trimmed = x.trimStart(['\n', ';']).trimStart();
        const quoteParts = trimmed.splitOn('"', 3);
        const header = quoteParts.length == 2 && trimmed.startsWith('"') ? quoteParts[1].trim('"') : undefined;
        const contentText = quoteParts.length == 2 ? trimmed.transform(quoteParts[2].start - trimmed.start, 0).trim() : trimmed;
        const content = parseContent(contentText);
        const s = new ZFileSection({
            raw,
            header,
        });
        return s;
    });

    const file = new ZFile({ raw: source, sections });
    const files = [file];
    return file;
};


// Quick Run
runDebug();