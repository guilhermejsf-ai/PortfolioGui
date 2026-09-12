import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
export default defineConfig([
  ...nextVitals,
  globalIgnores([
    ".next*/**",
    "node_modules/**",
    "next-env.d.ts",
    "audit/**",
    // Original selector retained as reference; no application route imports it.
    "components/projects-selector.tsx",
  ]),
]);
