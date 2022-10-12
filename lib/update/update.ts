import fetch from "node-fetch";
import { exec } from "child_process";
import * as fs from "fs";
import path from "path";

import packageJson from "../../package.json";
const packageJsonPath = path.resolve("package.json");

export async function update() {
    // Get the latest version of tabler icons
    const response = await fetch("https://registry.npmjs.org/@tabler/icons");
    const json = await response.json();

    const versions = Object.keys(json.versions);
    const latest = versions[versions.length - 1];

    if (latest === packageJson.version) {
        return;
    }

    // Update the package.json
    packageJson.version = latest;
    packageJson.dependencies["@tabler/icons"] = `^${latest}`;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, undefined, 2));

    return new Promise<void>((resolve, reject) => {
        exec("yarn", error => {
            if (error) {
                reject(error);
            }

            resolve();
        });
    });
}
