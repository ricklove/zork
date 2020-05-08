import { fs } from "./loadFile";
import { parseZorkFile } from "./toAst";
export const runDebug = async () => {
    const fileText_defs = await fs.readFile(fs.resolvePath('../../zork/lcf/defs.63'));
    const ast_defs = parseZorkFile(fileText_defs);
}