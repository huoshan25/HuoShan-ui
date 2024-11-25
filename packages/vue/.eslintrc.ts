const config = {
  extends: [
    '../../.eslintrc.ts',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue'],
  rules: {
    'vue/html-indent': ['error', 2],
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: 1
    }]
  }
};

export default config;