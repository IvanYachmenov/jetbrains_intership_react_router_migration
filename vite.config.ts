import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const root = path.dirname(fileURLToPath(import.meta.url));

const SSR_REQUIRE_POLYFILL = `
import { createRequire } from 'node:module';
import React from 'react';
import * as Typography from '@rescui/typography';
import * as UiContexts from '@rescui/ui-contexts';
if (typeof globalThis.module === 'undefined') globalThis.module = { exports: {} };
if (typeof globalThis.exports === 'undefined') globalThis.exports = globalThis.module.exports;
const _req = createRequire(import.meta.url);
globalThis.require = function (id) {
  if (id === 'react') return { __esModule: true, default: React, ...React, useLayoutEffect: React.useEffect };
  if (id === '@rescui/typography') return Typography;
  if (id === '@rescui/ui-contexts') return UiContexts;
  if (id.endsWith('.css') || id.includes('.css?')) return {};
  return _req(id);
};
`;

export default defineConfig({
  optimizeDeps: {
    include: [
      "@jetbrains/kotlin-web-site-ui/dist/header.js",
      "@jetbrains/kotlin-web-site-ui/dist/footer.js",
    ],
  },
  plugins: [
    {
      name: "strip-kotlin-ui-css-sourcemap",
      transform(code, id) {
        if (id.includes("kotlin-web-site-ui") && (id.includes("header.css") || id.includes("footer.css")) && !id.includes("?url")) {
          return code.replace(/\/\*# sourceMappingURL=.*?\*\/\s*$/, "");
        }
      },
    },
    {
      name: "ssr-kotlin-web-site-ui-require",
      transform(code, id, options) {
        if (!options?.ssr) return;
        if (
          id.includes("kotlin-web-site-ui") &&
          (id.endsWith("header.js") || id.endsWith("footer.js"))
        ) {
          const withPolyfill =
            SSR_REQUIRE_POLYFILL +
            "var module = globalThis.module = globalThis.module || { exports: {} };\nvar exports = module.exports;\n" +
            code;
          return (
            withPolyfill +
            "\nexport default (function(){ var m = (typeof module !== 'undefined' && module.exports) || globalThis.module?.exports; return m && (m.default != null ? m.default : m); })();\n"
          );
        }
      },
    },
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    {
      name: "favicon-redirect",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/favicon.ico") {
            res.writeHead(302, { Location: "/assets/images/favicon.svg" });
            res.end();
            return;
          }
          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@rescui/switcher": path.join(root, "node_modules/@rescui/switcher"),
    },
  },
  ssr: {
    noExternal: [/^@rescui\//, "@jetbrains/kotlin-web-site-ui", "@react-hook/resize-observer"],
  },
});
