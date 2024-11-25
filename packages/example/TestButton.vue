<template>
  <button v-bind="buttonProps" @click="handleClick">
    {{ state.loading ? 'Loading...' : 'Click Me' }}
  </button>
</template>

<script setup lang="ts">
import { hsButton } from '@huoshan-ui/vue';

const { buttonProps, setLoading, state } = hsButton();

const handleClick = async () => {
  setLoading(true);
  // 模拟异步操作
  await new Promise(resolve => setTimeout(resolve, 2000));
  setLoading(false);
};
</script>

<style scoped>
button {
  padding: 8px 16px;
  cursor: pointer;
}
button[data-loading="true"] {
  cursor: wait;
  opacity: 0.7;
}
</style>