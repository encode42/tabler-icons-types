import commonjs from "@rollup/plugin-commonjs";
import nodeExternals from "rollup-plugin-node-externals";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import esbuild from "rollup-plugin-esbuild";
import json from "@rollup/plugin-json";
import path from "path";

/**
 * The name of the project.
 *
 * @type {string}
 */
const name = "tabler-icons-types";

/**
 * Get a base configuration
 *
 * @param {import("rollup").ModuleFormat} type Type to get base for
 * @param {boolean} [toMinify=false] Whether to create minified output
 * @return {import("rollup").RollupOptions}
 */
function getBase(type, toMinify = false) {
    const umd = type === "umd";
    const shouldMinify = toMinify || umd;

    return {
        "input": "./src/index.ts",
        "output": {
            name,
            "file": umd ? "./lib/index.umd.js" : undefined,
            "dir": umd ? undefined : type,
            "format": type,
            "externalLiveBindings": false,
            "preserveModules": !umd
        },
        "plugins": [
            commonjs(),
            nodeExternals(),
            nodeResolve({
                "extensions": [
                    ".ts",
                    ".tsx",
                    ".js",
                    ".jsx"
                ]
            }),
            esbuild({
                "minify": shouldMinify,
                "sourceMap": false,
                "tsconfig": path.resolve(process.cwd(), "tsconfig.json")
            }),
            json({
                "compact": shouldMinify
            })
        ],
        "external": [
            "fs/promises"
        ]
    };
}

/**
 * Get the config for a build type.
 *
 * @param {import("rollup").ModuleFormat} types Types to build
 * @return {import("rollup").RollupOptions[]}
 */
function getConfig(...types) {
    /**
     * @type {import("rollup").RollupOptions[]}
     */
    const configs = [];

    // Generate config for each type
    for (const type of types) {
        configs.push(getBase(type));
    }

    return configs;
}

export default getConfig("cjs", "esm");
