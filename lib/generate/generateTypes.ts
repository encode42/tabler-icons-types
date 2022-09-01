import * as tablerIcons from "@tabler/icons";
import * as fs from "fs";
import path from "path";
import { stripIndent } from "common-tags";

export function generateTypes(target: string) {
    const types = Object.keys(tablerIcons);

    fs.writeFileSync(path.join(target, "types.ts"), stripIndent`
        /**
         * An enum of Tabler Icons that exist.
         */
        export type TablerIconsType = ${types.map(key => `"${key}"`).join("|")}
    `);

    return types;
}
