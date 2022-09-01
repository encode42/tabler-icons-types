import * as fs from "fs";
import path from "path";
import { stripIndent } from "common-tags";
import iconTags from "../../node_modules/@tabler/icons/tags.json";
import { Tag, Tags } from "../../src/util/interface";

export function generateTags(keys: string[]) {
    const tags: Partial<Tags> = {};

    const iconTagsValues: Tag[] = Object.values(iconTags);

    for (const [i, key] of keys.entries()) {
        const tag = iconTagsValues[i];

        tags[key] = {
            "category": tag.category,
            "tags": tag.tags
        };
    }

    fs.writeFileSync(path.resolve("src/generated/tags.ts"), stripIndent`
        import { Tags } from "../util/interface";

        /**
         * Tags for each of the keys.
         *
         * @remarks
         * Provided by Tabler.
         */
        export const TablerIconsTags: Tags = ${JSON.stringify(tags)}
    `);
}
