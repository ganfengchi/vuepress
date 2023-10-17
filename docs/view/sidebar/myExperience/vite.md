# vite 的基本配置

### vite 创建项目

```javascript
npm init vite

```

### 配置

```javascript
// vite.config.js
import { defineConfig } from "vite";
import postcssPxToViewport from "postcss-px-to-viewport";
import path from "path";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  esbuild: {
    pure: ["console.log"], // 删除 console.log
    drop: ["debugger"], // 删除 debugger
  },
  mode: import.meta.env.MODE === "development" ? "development" : "production",

  plugins: [
    vue(),
    viteMockServe(),
    //页面自动引入vue 插件
    AutoImport({
      imports: ["vue"],
      dts: "src/auto-import.d.ts",
    }),
    //element plus按需自动引入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    //element plus按需自动引入
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ], //插件

  optimizeDeps: {
    force: true, // 强制进行依赖预构建
  },

  resolve: {
    extensions: [".js", ".ts", ".json"], // 导入时想要省略的扩展名列表
    //路径别名
    alias: [
      {
        find: "@", // 别名
        replacement: resolve(__dirname, "src"), // 别名对应地址
      },
      {
        find: "components",
        replacement: resolve(__dirname, "src/components"),
      },
    ],
  },

  server: {
    //代理服务
    proxy: {
      "/api": {
        target: "http url",
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ""),
      },
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '/src/assets/styles/variables.scss';`, // 引入全局变量文件
      },
    },
    postcss: {
      //postcss
      plugins: [
        // viewport 布局适配
        postcssPxToViewport({
          viewportWidth: 375,
        }),
      ],
    },
  },

  build: {
    minify: "terser", // 必须开启：使用terserOptions才有效果
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
    outDir: "dist", // 打包文件的输出目录
    assetsDir: "static", // 静态资源的存放目录
    assetsInlineLimit: 4096, // 图片转 base64 编码的阈值
    reportCompressedSize: false, //启用/禁用 gzip 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
    chunkSizeWarningLimit: 1024, //规定触发警告的 chunk 大小
    commonjsOptions: {
      ignoreTryCatch: false,
    },
    sourcemap: false, // 构建后是否生成 source map 文件
    rollupOptions: { // 自定义底层的 Rollup 打包配置
      output: {
        chunkFileNames: "js/[name]-[hash].js", // 引入文件名的名称
        entryFileNames: "js/[name]-[hash].js", // 包的入口文件名称
        assetFileNames: "[ext]/[name]-[hash].[ext]", // 资源文件像 字体，图片等
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
```
