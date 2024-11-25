import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { hsButton } from '@huoshan-ui/vue'
import { ref } from 'vue'

describe('hsButton', () => {
  it('should handle loading state correctly', async () => {
    const wrapper = mount({
      setup() {
        const { buttonProps, setLoading, state } = hsButton()
        return { buttonProps, setLoading, state }
      },
      template: '<button v-bind="buttonProps">{{ state.loading ? "Loading" : "Click" }}</button>'
    })

    expect(wrapper.text()).toBe('Click')

    await wrapper.vm.setLoading(true)
    expect(wrapper.text()).toBe('Loading')
    expect(wrapper.attributes('data-loading')).toBe('true')
  })
})