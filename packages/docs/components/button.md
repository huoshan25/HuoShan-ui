# Button 按钮

无头按钮组件，提供完整的按钮行为和状态管理，同时保持最大的样式自由度。

## 基础用法

最简单的按钮封装，提供点击、禁用等基础功能。

```vue
<template>
  <button v-bind="buttonProps" @click="handleClick" 
    class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50">
    {{ state.loading ? 'Loading...' : 'Click Me' }}
  </button>
</template>

<script setup lang="ts">
import { hsButton } from '@huoshan-ui/vue'

const { buttonProps, setLoading, state } = hsButton();

const handleClick = async () => {
  setLoading(true);
  // 模拟异步操作
  await new Promise(resolve => setTimeout(resolve, 2000));
  setLoading(false);
};
</script>
```

## API

### ButtonState 状态属性

| 属性名   | 类型    | 默认值 | 说明         |
|----------|---------|--------|--------------|
| disabled | boolean | false  | 按钮是否禁用 |
| loading  | boolean | false  | 按钮加载状态 |

### ButtonCore 方法

| 方法名      | 参数                           | 返回值       | 说明               |
|-------------|--------------------------------|--------------|-------------------|
| constructor | initialState?: Partial\<ButtonState\> | void         | 创建按钮实例，可传入初始状态 |
| setDisabled | disabled: boolean              | void         | 设置按钮禁用状态   |
| setLoading  | loading: boolean               | void         | 设置按钮加载状态   |
| getState    | -                              | ButtonState  | 获取按钮当前状态   |

### 类型定义

```typescript
interface ButtonState {
  disabled: boolean;
  loading: boolean;
}