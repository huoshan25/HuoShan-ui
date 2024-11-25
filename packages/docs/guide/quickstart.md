# 快速开始

本节将介绍如何在项目中使用 HuoShan UI。

## 用法

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