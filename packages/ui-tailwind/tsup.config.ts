import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ["src/**/*.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  minify: true,
  clean: false,
  external: ["react", "./styles.css", "*.css"],
  ...options,
}));
