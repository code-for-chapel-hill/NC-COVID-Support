module.exports = {
  root: true,
  parserOptions: {
    parser: require.resolve('babel-eslint'),
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended', 'eslint:recommended'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        excludeFiles: ['**/src/ExtraMarkers/**/*.*']
      }
    ]
  },
  ignorePatterns: ['**/src/ExtraMarkers/'],
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
}
