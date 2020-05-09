import * as path from 'path';
import * as fsRaw from 'fs';
import * as util from 'util';

export const fs = {
    resolvePath: path.resolve,
    getFileName: path.basename,
    writeFile: util.promisify(fsRaw.writeFile),
    readFile: async (path: string) => {
        const b = await util.promisify(fsRaw.readFile)(path);
        return b.toString('utf-8');
    },
};

