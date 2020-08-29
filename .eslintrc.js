module.exports = {
  env: {
    es2020: true,
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off'
    // '@typescript-eslint/no-unused-vars': 'off'
  }
}
