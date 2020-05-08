export type ZNode = {
    _raw: string;
};

export type ZFile = ZNode & {
    kind: 'ZFile';
    sections: ZFileSection[];
};

export type ZFileSection = ZNode & {
    kind: 'ZFileSection';
    header?: string;
};


export const parseZorkFile = (text: string): ZFile => {


    const sections: ZFileSection[] = text.split('\n;').map(x => {
        const s: ZFileSection = {
            kind: 'ZFileSection',
            _raw: x,
            header: x.trimLeft()[0] === '"' ? x.substring(x.indexOf('"') + 1, x.indexOf('"', x.indexOf('"') + 1)) : undefined,
        };
        return s;
    });

    const file: ZFile = {
        kind: 'ZFile',
        _raw: text,
        sections,
    };

    return file;
};



// RUN 
import { fs } from "./loadFile";
const run = async () => {

    const fileText_defs = await fs.readFile(fs.resolvePath('../../zork/lcf/defs.63'));
    const ast_defs = parseZorkFile(fileText_defs);
};
run();