# webpakck 分包策略
```javascript

Webpack 的分包策略主要是通过代码分割（Code Splitting）来实现的，它允许你将代码拆分成多个块（chunks），然后异步加载这些块，从而优化加载性能。以下是几种常见的 Webpack 分包策略：

入口点（Entry Points）：
通过配置多个入口点，Webpack 可以为每个入口点生成一个独立的 bundle。这种方式通常用于将应用程序拆分为多个功能区域，例如将管理界面和用户界面分开打包。

动态导入（Dynamic Imports）：
使用 import() 语法可以在运行时动态地导入模块。Webpack 会自动将动态导入的模块分割到单独的 chunk 中，并在需要时异步加载这些 chunk。这种方式允许你按需加载特定的模块。

路由懒加载（Route Lazy Loading）：
在前端单页应用中，你可以根据路由配置来懒加载特定的组件。通过使用动态导入语法，你可以确保只有当用户导航到特定路由时，才加载相应的组件和依赖。

提取公共代码（CommonsChunkPlugin 或 SplitChunksPlugin）：
Webpack 提供了 SplitChunksPlugin 插件（在 Webpack 4 中引入，替代了早期的 CommonsChunkPlugin），用于识别和优化跨多个入口点的重复代码。它可以将这些公共代码提取到一个或多个单独的 chunk 中，从而减少总体加载时间。

同步和异步加载：
你可以根据需要选择同步或异步加载 chunk。同步加载通常用于应用程序的核心部分，而异步加载则用于非关键部分或按需加载的内容。

预加载和预获取（Prefetching and Preloading）：
预加载和预获取是两种优化技术，允许你在浏览器空闲时加载资源。预加载是通过 <link rel="preload"> 在 HTML 中指示浏览器提前加载资源，而预获取则是通过 fetch() 或 import() 在 JavaScript 中请求资源，但不立即使用它们。

动态公共路径（Dynamic Public Path）：
当使用 Webpack 的代码分割功能时，你可能需要动态设置公共路径，以确保在运行时能够正确加载分割后的 chunk。这可以通过在 output 配置中设置 publicPath 为一个动态值来实现。

实施这些策略时，需要权衡加载性能、开发体验、缓存策略以及应用程序的复杂性。通常，结合使用多种策略可以获得最佳效果。同时，使用工具如 Webpack Bundle Analyzer 可以帮助你分析生成的 bundle，以进一步优化你的分包策略。
```


```js

chunks: 'all': 指定哪些块应该被优化，默认为 async，可以设置为 'all' 表示包括 initial 和 async 类型的块。

minSize: 0: 指定拆分出的块的最小大小，如果拆分出的块小于这个值，将不会被拆分。

minChunks: 1: 块的最小被引用次数，达到这个次数才会被拆分。

maxAsyncRequests: 5: 按需加载时的最大并行请求数。

maxInitialRequests: 3: 入口点处的最大并行请求数。

automaticNameDelimiter: '~': 自动生成名称的分隔符。

name: true: 根据拆分出的块生成的名称，如果设置为 true，将自动生成。

cacheGroups: 配置缓存组，可以将多个模块合并到一个文件中，避免重复加载。示例中包含 vendors 缓存组，用于将第三方模块提取到一个单独的文件中。

test: /[\\/]node_modules[\\/]/: 缓存组的规则，这里使用正则表达式匹配第三方模块。

priority: -10: 缓存组的优先级，数字越大，优先级越高。vendors 的优先级设置为 -10，确保它优先匹配。

reuseExistingChunk: true: 如果当前块包含已经被拆分出的模块，则将复用该模块而不是创建新的块。

default: 默认的缓存组，用于处理非第三方模块。
```