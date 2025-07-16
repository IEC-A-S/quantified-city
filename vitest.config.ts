/// <reference types="vitest" />

import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  test: {
    clearMocks: true,
    globals: true,
    environment: "happy-dom",
    setupFiles: "./src/setup.ts",
    reporters: ["dot"],
    // reporters: ["dot", "json"],
    useAtomics: true,
    watch: false,
    maxConcurrency: 10,
    outputFile: {
      json: ".jest-test-results.json",
    },
    alias: [
      {
        find: /.+\.svg\?\w+$/,
        replacement: resolve("src/__mocks__/svg.ts"),
      },
      {
        find: /.+\.(png|jpg)$/,
        replacement: resolve("src/__mocks__/img.ts"),
      },
      {
        find: /.+\.css$/,
        replacement: resolve("src/__mocks__/css.ts"),
      },
    ],
    exclude: [
      ...configDefaults.exclude,
      "**/__fixtures__/**",
      "src/Introduction/*",
      "**/assets",
      "**/contexts.ts",
      "**/enums.ts",
      "**/stories",
      "**/interfaces.ts",
      "**/styles.ts",
      "**/withProfiler.tsx",
      "**/ImageIcon.tsx",
    ],
    coverage: {
      clean: true,
      exclude: [
        "**/__fixtures__/**",
        "src/Introduction/*",
        "**/assets",
        "**/contexts.ts",
        "**/enums.ts",
        "**/stories",
        "**/interfaces.ts",
        "**/styles.ts",
        "**/withProfiler.tsx",
        "**/ImageIcon.tsx",
      ],
      statements: 97,
      branches: 97,
      functions: 97,
      lines: 97,
      thresholdAutoUpdate: false,
      reporter: ["lcovonly", ["text", { skipFull: true }]],
    },
  },
});
