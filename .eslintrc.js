module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  extends: '@mate-academy/eslint-config',
  env: { jest: true },
  plugins: ['jest'],
  rules: { 'no-proto': 0 },
};
