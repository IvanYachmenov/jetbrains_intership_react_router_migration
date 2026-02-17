import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  optimizeDeps: {
    include: ["@jetbrains/kotlin-web-site-ui/out/components/header/index.js"],
  },
  plugins: [
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
    noExternal: [
      /^@rescui\//,
      "@jetbrains/kotlin-web-site-ui",
      "@react-hook/resize-observer",
    ],
  },
});
