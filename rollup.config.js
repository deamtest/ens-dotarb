import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            /* {
                file: packageJson.main,
                format: "cjs",
                sourcemap: false,
            }, */
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: false,
            },
        ],
        plugins: [
            peerDepsExternal(),
            /* resolve(), */
            commonjs(),
            nodeResolve({ browser: true }),
            typescript({ tsconfig: "./tsconfig.json" }),
            terser(),
        ],
        external: [
            
        ]
    },
    {
        input: "dist/esm/src/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },
];