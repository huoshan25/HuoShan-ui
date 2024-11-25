import { describe, it, expect } from 'vitest'
import { ButtonCore } from '@huoshan-ui/core'

describe('ButtonCore', () => {
  it('初始化时应该有正确的默认状态', () => {
    const button = new ButtonCore()
    expect(button.getState()).toEqual({
      disabled: false,
      loading: false
    })
  })

  it('应该可以通过构造函数设置初始状态', () => {
    const button = new ButtonCore({
      disabled: true,
      loading: true
    })
    expect(button.getState()).toEqual({
      disabled: true,
      loading: true
    })
  })

  it('应该可以更新禁用状态', () => {
    const button = new ButtonCore()
    button.setDisabled(true)
    expect(button.getState().disabled).toBe(true)
  })

  it('应该可以更新加载状态', () => {
    const button = new ButtonCore()
    button.setLoading(true)
    expect(button.getState().loading).toBe(true)
  })

  it('禁用状态和加载状态应该可以独立变化', () => {
    const button = new ButtonCore()
    button.setLoading(true)
    button.setDisabled(true)
    expect(button.getState()).toEqual({
      disabled: true,
      loading: true
    })

    button.setLoading(false)
    expect(button.getState()).toEqual({
      disabled: true,
      loading: false
    })
  })

  it('获取状态时应该返回状态的副本', () => {
    const button = new ButtonCore()
    const state = button.getState()
    state.disabled = true
    expect(button.getState().disabled).toBe(false)
  })
})