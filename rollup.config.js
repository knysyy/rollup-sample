import RollupBuble from "@rollup/plugin-buble";
import RollupTypescript from "@rollup/plugin-typescript";
import RollupCommonJS from "@rollup/plugin-commonjs";
import RollupNodeResolve from "@rollup/plugin-node-resolve";
import RollupAlias from "@rollup/plugin-alias";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";

const plugins = [
    RollupBuble(),
    RollupTypescript(),
    RollupAlias({
        entries: [],
    }),
    RollupNodeResolve(),
    RollupCommonJS({ extensions: [".js", ".ts"] }),
];

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: "./dist/index.cjs.js",
                format: "cjs",
            },
            {
                file: "./dist/index.esm.js",
                format: "esm",
            },
            {
                file: "./dist/index.js",
                format: "umd",
                name: "index",
            },
            {
                file: "./dist/index.min.js",
                format: "umd",
                name: "Utils",
                plugins: [
                    terser({
                        format: {
                            comments: false,
                        },
                    }),
                ],
            },
        ],
        plugins: plugins,
    },
    {
        input: 'src/index.ts',
        output: {
            file: 'types/index.d.ts',
            format: 'esm'
        },
        plugins: [dts()]
    }
];
