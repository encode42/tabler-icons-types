import { generateTypes } from "./generate/generateTypes";
import { generateKeys } from "./generate/generateKeys";
import { generateTags } from "./generate/generateTags";
import * as fs from "fs";
import path from "path";

const target = path.resolve("src/generated");
fs.mkdirSync(target);

const types = generateTypes(target);

generateKeys(target, types);
generateTags(target, types);

