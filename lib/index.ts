import { generateTypes } from "./generate/generateTypes";
import { generateKeys } from "./generate/generateKeys";
import { generateTags } from "./generate/generateTags";

const types = generateTypes();

generateKeys(types);
generateTags(types);

