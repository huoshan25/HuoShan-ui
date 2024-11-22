# HuoShan-UI

HuoShan-UI 是一个现代化的无头组件库(Headless UI)，提供了一系列无样式的 UI 组件逻辑实现。支持 Vue 和 React（开发中）框架。

## 特性

- 🎨 无样式捆绑，提供纯逻辑实现
- 🔌 支持多框架 (Vue 3, React)
- 💪 使用 TypeScript 编写，提供完整的类型定义
- 🎯 关注点分离，核心逻辑与框架实现分离
- 📦 体积小巧，按需引入

## 安装

```bash
# Vue 3
pnpm add @HuoShan-ui/vue

# React (开发中)
pnpm add @HuoShan-ui/react
```

## 使用示例
```vue
<template>
  <button v-bind="buttonProps" @click="handleClick">
    {{ state.loading ? 'Loading...' : 'Click Me' }}
  </button>
</template>

<script setup lang="ts">
import { hsButton } from '@HuoShan-ui/vue';

const { buttonProps, setLoading, state } = hsButton();

const handleClick = async () => {
  setLoading(true);
  // 模拟异步操作
  await new Promise(resolve => setTimeout(resolve, 2000));
  setLoading(false);
};
</script>
```


## 组件列表
已实现
- Button (按钮)
  - 支持 loading 状态
  - 支持 disabled 状态
  - 完全可控的状态管理

开发计划
- [ ] Switch (开关)
- [ ] Select (选择器)
- [ ] Modal (模态框)
- [ ] Dropdown (下拉菜单)
- [ ] React 支持


## 项目结构

```
packages/
  ├── core/          # 核心逻辑实现
  ├── vue/           # Vue 3 实现
  └── react/         # React 实现 (开发中)
```

## 本地开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build

# 测试
pnpm test
```

## 贡献指南
欢迎贡献代码！

## 许可证
MIT