import fetch from "node-fetch";
import { gt } from "semver";
import * as fs from "fs";
import path from "path";
import { exec } from "child_process";
import packageJson from "../../package.json";

const packageJsonPath = path.resolve("package.json");

export async function update() {
    // Get the latest version of tabler icons
    const response = await fetch("https://registry.npmjs.org/@tabler/icons");
    const json = await response.json();

    const versions = Object.keys(json.versions);
    const latest = versions[versions.length - 1];

    if (!gt(latest, packageJson.version)) {
        return;
    }

    console.log(`Updating @tabler/icons to ${latest}...`);

    // Update the package.json
    packageJson.version = latest;
    packageJson.devDependencies["@tabler/icons"] = `^${latest}`;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, undefined, 2));

    return new Promise<void>((resolve, reject) => {
        exec("pnpm install --no-frozen-lockfile", (error, stdout, stderr) => {
            if (error) {
                console.error(stderr);

                reject(error);
            }

            console.log(stdout);

            resolve();
        });
    });
}
