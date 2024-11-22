import { ref, computed } from 'vue';
import type { Ref } from 'vue';
import { ButtonCore, type ButtonState } from '@HuoShan-ui/core';

export function hsButton(initialState?: Partial<ButtonState>) {
  const core = new ButtonCore(initialState);
  // 使用ref来跟踪状态
  const state = ref(core.getState());

  const buttonProps = computed(() => ({
    disabled: state.value.disabled,
    'aria-disabled': state.value.disabled,
    'data-loading': state.value.loading
  }));

  const setLoading = (loading: boolean) => {
    core.setLoading(loading);
    // 更新ref的值以触发响应式更新
    state.value = { ...core.getState() };
  };

  const setDisabled = (disabled: boolean) => {
    core.setDisabled(disabled);
    // 更新ref的值以触发响应式更新
    state.value = { ...core.getState() };
  };

  return {
    state,  // 暴露state
    buttonProps,
    setDisabled,
    setLoading
  };
}