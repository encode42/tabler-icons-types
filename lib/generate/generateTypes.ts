import * as tablerIcons from "@tabler/icons";
import * as fs from "fs";
import path from "path";
import { stripIndent } from "common-tags";

export function generateTypes() {
    const types = Object.keys(tablerIcons);

    fs.writeFileSync(path.resolve("src/generated/types.ts"), stripIndent`
        /**
         * An enum of Tabler Icons that exist.
         */
        export type TablerIconsType = ${types.map(key => `"${key}"`).join("|")}
    `);

    return types;
}
