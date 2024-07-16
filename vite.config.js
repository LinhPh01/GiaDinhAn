import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    root: "./",
    base: "/",
    plugins: [reactRefresh()],
    // build: {
    //   outDir: "../dist",
    //   emptyOutDir: true,
    // }
  });
};
