import { update } from "./update/update";
import { generateTypes } from "./generate/generateTypes";
import { generateKeys } from "./generate/generateKeys";
import { generateTags } from "./generate/generateTags";
import * as fs from "fs";
import path from "path";

async function main() {
    await update();

    const target = path.resolve("src/generated");

    if (!fs.existsSync(target)) {
        fs.mkdirSync(target);
    }

    const types = generateTypes(target);

    generateKeys(target, types);
    generateTags(target, types);
}

main();
