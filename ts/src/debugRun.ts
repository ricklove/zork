import { fs } from "./loadFile";
import { parseZorkFile, parseZorkFiles } from "./parseAst";
import { convertToTypescript } from "./convertToTypescript";

export const runDebug = async () => {

    const filePaths = [
        '../../zork/lcf/makstr.7',
        '../../zork/lcf/defs.63',
        '../../zork/lcf/np.93',
        '../../zork/lcf/rooms.99',
        '../../zork/dung.56',
        '../../zork/lcf/act1.38',
        '../../zork/act2.27',
        '../../zork/lcf/act3.13',
    ];

    const fileTexts = await Promise.all(filePaths.map(async x => ({ filePath: x, fileName: fs.getFileName(x), text: await fs.readFile(fs.resolvePath(x)) })));
    const filesParsed = fileTexts.map(x => ({ ...x, result: parseZorkFile(x.text) }));

    const fileOutputs = filesParsed.map(x => ({
        ...x,
        outPath: fs.resolvePath(`../out/${x.fileName}`),
        outText: convertToTypescript(x.result),
    }));

    for (let f of fileOutputs) {
        await fs.writeFile(f.outPath, f.outText);
    }
}

runDebug();