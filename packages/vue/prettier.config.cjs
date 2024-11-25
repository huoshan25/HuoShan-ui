const baseConfig = require('../../prettier.config.cjs')

module.exports = {
  ...baseConfig,
  // 覆盖特定配置
  vueIndentScriptAndStyle: true,
  singleAttributePerLine: false,
  htmlWhitespaceSensitivity: 'ignore',
}