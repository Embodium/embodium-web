import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { qwikVite } from "@builder.io/qwik/optimizer";

export default defineConfig(() => {
    return {
        css: {
            preprocessorOptions: {
                scss: {
                    includePaths: ['node_modules'],
                },
            },
        },
        build: {
            target: "es2020",
            lib: {
                entry: "./src/index.ts",
                formats: ["es", "cjs"],
                fileName: (format) => `index.qwik.${format === "es" ? "mjs" : "cjs"}`,
            },
        },
        plugins: [qwikVite(), tsconfigPaths()]
    }
});
