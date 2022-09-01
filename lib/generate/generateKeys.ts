import * as fs from "fs";
import path from "path";
import { stripIndent } from "common-tags";

export function generateKeys(keys: string[]) {
    fs.writeFileSync(path.resolve("src/generated/keys.ts"), stripIndent`
        import { TablerIconsType } from "./types";

        /**
         * An array of all keys that exist.
         */
        export const TablerIconsKeys: TablerIconsType[] = [${keys.map(key => `"${key}"`).join(",")}]
    `);
}
