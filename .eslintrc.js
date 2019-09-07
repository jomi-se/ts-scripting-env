module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['jest', 'prettier'],
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // prettier rules
    'prettier/prettier': 'error',
    'no-console': 'off',
    'no-unused-vars': ['error', { varsIgnorePattern: '_[a-zA-Z0-9]+' }],
  },
  env: {
    jest: true,
    es6: true,
    node: true,
  },
}
