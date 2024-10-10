// vite.config.js
import { defineConfig } from "file:///D:/Download/portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Download/portfolio/node_modules/@vitejs/plugin-react/dist/index.mjs";
import nodePolyfills from "file:///D:/Download/portfolio/node_modules/vite-plugin-node-polyfills/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // Whether to polyfill `global`.
      global: true,
      // Whether to polyfill `process`.
      process: true,
      // Whether to polyfill `Buffer`.
      buffer: true,
      // Whether to polyfill `__dirname` and `__filename`.
      dirname: true,
      // Whether to polyfill `require`.
      require: true
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEb3dubG9hZFxcXFxwb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXERvd25sb2FkXFxcXHBvcnRmb2xpb1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovRG93bmxvYWQvcG9ydGZvbGlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBub2RlUG9seWZpbGxzIGZyb20gJ3ZpdGUtcGx1Z2luLW5vZGUtcG9seWZpbGxzJztcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSxcbiAgICBub2RlUG9seWZpbGxzKHtcbiAgICAvLyBXaGV0aGVyIHRvIHBvbHlmaWxsIGBnbG9iYWxgLlxuICAgICAgZ2xvYmFsOiB0cnVlLFxuICAgIC8vIFdoZXRoZXIgdG8gcG9seWZpbGwgYHByb2Nlc3NgLlxuICAgICAgcHJvY2VzczogdHJ1ZSxcbiAgICAvLyBXaGV0aGVyIHRvIHBvbHlmaWxsIGBCdWZmZXJgLlxuICAgICAgYnVmZmVyOiB0cnVlLFxuICAgIC8vIFdoZXRoZXIgdG8gcG9seWZpbGwgYF9fZGlybmFtZWAgYW5kIGBfX2ZpbGVuYW1lYC5cbiAgICAgIGRpcm5hbWU6IHRydWUsXG4gICAgLy8gV2hldGhlciB0byBwb2x5ZmlsbCBgcmVxdWlyZWAuXG4gICAgICByZXF1aXJlOiB0cnVlLFxuICB9KSxdLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVAsU0FBUyxvQkFBb0I7QUFDcFIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sbUJBQW1CO0FBRTFCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUFDLE1BQU07QUFBQSxJQUNkLGNBQWM7QUFBQTtBQUFBLE1BRVosUUFBUTtBQUFBO0FBQUEsTUFFUixTQUFTO0FBQUE7QUFBQSxNQUVULFFBQVE7QUFBQTtBQUFBLE1BRVIsU0FBUztBQUFBO0FBQUEsTUFFVCxTQUFTO0FBQUEsSUFDYixDQUFDO0FBQUEsRUFBRTtBQUNMLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
