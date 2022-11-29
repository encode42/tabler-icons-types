import * as fs from "fs";
import path from "path";
import { stripIndent } from "common-tags";

export function generateKeys(target: string, keys: string[]) {
    fs.writeFileSync(path.join(target, "keys.ts"), stripIndent`
        import { TablerIconsType } from "./types";

        /**
         * An array of all keys that exist.
         */
        export const TablerIconsKeys: TablerIconsType[] = [${keys.map(key => `"${key}"`).join(",")}]
    `);
}
