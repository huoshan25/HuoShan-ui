import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import './styles/vars.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
  }
}