import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

export default defineConfig({
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  title: 'HuoShan UI',
  description: '一个现代化的无头 UI 组件库',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', href: 'svg/logo.svg' }],
  ],

  themeConfig: {
    logo: '/svg/logo.svg',

    nav: [
      { text: '指南', link: '/guide/installation' },
      { text: '组件', link: '/components/button' },
      { text: 'GitHub', link: 'https://github.com/huoshan25/HuoShan-ui' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          items: [
            { text: '什么是 HuoShan UI?', link: '/guide/what-is-huoshan-ui' },
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickstart' }
          ]
        },
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/huoshan25' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024 火山'
    }
  }
})