# vue-pdf3
基于Vue3 + vite + PDF.js版的PDF预览插件

## 安装
```bash
npm install --save vue-pdf3
```

## 全局引入
把安装好的vue-pdf3拷贝到 src/components 中
```js
import pdf from './components/vue-pdf3';

app.use(pdf);
```
```base
<script setup>
const url = "https://zuopengd.github.io/vue-pdf3/dist/欢迎使用WPS Office for Mac同步文件夹.pdf";
</script>
  
<template>
  <pdf-preview :url="url" />
</template>
```

## 演示

[vue-pdf3 演示链接](https://zuopengd.github.io/vue-pdf3/dist/index.html)

## 浏览器支持
与 [Vue.js 3](https://github.com/vuejs/core/blob/main/README.md) 相同
