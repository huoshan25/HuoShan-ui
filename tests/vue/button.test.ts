import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { hsButton } from '@huoshan-ui/vue'
import { defineComponent } from 'vue'

describe('hsButton', () => {
  it('应该使用默认值正确初始化', () => {
    const wrapper = mount(defineComponent({
      setup() {
        const { state, buttonProps } = hsButton()
        return { state, buttonProps }
      },
      template: '<button v-bind="buttonProps">Button</button>'
    }))

    // 测试初始状态
    expect(wrapper.vm.state.disabled).toBe(false)
    expect(wrapper.vm.state.loading).toBe(false)

    // 测试初始 props
    expect(wrapper.attributes('disabled')).toBeFalsy()
    expect(wrapper.attributes('aria-disabled')).toBe('false')
    expect(wrapper.attributes('data-loading')).toBe('false')
  })

  it('应该可以通过initialState设置初始值', () => {
    const wrapper = mount(defineComponent({
      setup() {
        const { state, buttonProps } = hsButton({
          disabled: true,
          loading: true
        })
        return { state, buttonProps }
      },
      template: '<button v-bind="buttonProps">Button</button>'
    }))

    expect(wrapper.vm.state.disabled).toBe(true)
    expect(wrapper.vm.state.loading).toBe(true)
    expect(wrapper.attributes('disabled')).toBe('')
    expect(wrapper.attributes('aria-disabled')).toBe('true')
    expect(wrapper.attributes('data-loading')).toBe('true')
  })

  it('应该正确响应setLoading的调用', async () => {
    const wrapper = mount(defineComponent({
      setup() {
        const { buttonProps, setLoading, state } = hsButton()
        return { buttonProps, setLoading, state }
      },
      template: '<button v-bind="buttonProps">Button</button>'
    }))

    await wrapper.vm.setLoading(true)
    expect(wrapper.vm.state.loading).toBe(true)
    expect(wrapper.attributes('data-loading')).toBe('true')

    await wrapper.vm.setLoading(false)
    expect(wrapper.vm.state.loading).toBe(false)
    expect(wrapper.attributes('data-loading')).toBe('false')
  })

  it('应该正确响应setDisabled的调用', async () => {
    const wrapper = mount(defineComponent({
      setup() {
        const { buttonProps, setDisabled, state } = hsButton()
        return { buttonProps, setDisabled, state }
      },
      template: '<button v-bind="buttonProps">Button</button>'
    }))

    await wrapper.vm.setDisabled(true)
    expect(wrapper.vm.state.disabled).toBe(true)
    expect(wrapper.attributes('disabled')).toBe('')
    expect(wrapper.attributes('aria-disabled')).toBe('true')

    await wrapper.vm.setDisabled(false)
    expect(wrapper.vm.state.disabled).toBe(false)
    expect(wrapper.attributes('disabled')).toBeFalsy()
    expect(wrapper.attributes('aria-disabled')).toBe('false')
  })

  it('buttonProps应该是响应式的', async () => {
    const wrapper = mount(defineComponent({
      setup() {
        const { buttonProps, setLoading, setDisabled } = hsButton()
        return { buttonProps, setLoading, setDisabled }
      },
      template: '<button v-bind="buttonProps">Button</button>'
    }))

    // 测试loading状态变化
    await wrapper.vm.setLoading(true)
    expect(wrapper.attributes('data-loading')).toBe('true')

    // 测试disabled状态变化
    await wrapper.vm.setDisabled(true)
    expect(wrapper.attributes('disabled')).toBe('')
    expect(wrapper.attributes('aria-disabled')).toBe('true')
  })

  it('state应该是响应式的', async () => {
    const wrapper = mount(defineComponent({
      setup() {
        const { state, setLoading, setDisabled } = hsButton()
        return { state, setLoading, setDisabled }
      },
      template: '<div>{{ state.loading ? "Loading" : "Not Loading" }}</div>'
    }))

    expect(wrapper.text()).toBe('Not Loading')

    await wrapper.vm.setLoading(true)
    expect(wrapper.text()).toBe('Loading')
  })
})