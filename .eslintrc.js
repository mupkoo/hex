/* eslint-env node */
'use strict';

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: ['ember', 'prettier'],
  extends: ['eslint:recommended', 'plugin:ember/recommended', 'plugin:prettier/recommended'],
  env: {
    browser: true,
  },
  rules: {
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'no-empty': [2, { allowEmptyCatch: true }],
    'no-spaced-func': 2,
    'array-bracket-spacing': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'quote-props': [2, 'as-needed'],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
        mode: 'minimum',
      },
    ],
    'space-unary-ops': [
      2,
      {
        words: false,
        nonwords: false,
      },
    ],
    'no-mixed-spaces-and-tabs': 2,
    'no-trailing-spaces': 2,
    'comma-spacing': [
      2,
      {
        after: true,
        before: false,
      },
    ],
    yoda: [2, 'never'],
    'no-with': 2,
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'no-multiple-empty-lines': 2,
    'no-multi-str': 2,
    'one-var': [2, 'never'],
    'semi-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    'space-before-blocks': [2, 'always'],
    'wrap-iife': 2,
    'space-infix-ops': 2,
    camelcase: [2, { properties: 'never' }],
    'eol-last': 2,
    'dot-notation': 2,
    curly: ['error', 'multi-line'],
    'keyword-spacing': [2, {}],
    semi: [2, 'always'],
    'consistent-this': [2, '_this'],
    'linebreak-style': [2, 'unix'],
    quotes: [2, 'single', { avoidEscape: true }],

    // Workaround for ESLint failing to parse files with template literals
    // with this error: "TypeError: Cannot read property 'range' of null"
    // https://github.com/babel/babel-eslint/issues/530
    // indent: [2, 2, { SwitchCase: 1 }],
    indent: ['error', 2, { ignoredNodes: ['TemplateLiteral'] }],
    'template-curly-spacing': 'off',
  },
  overrides: [
    // node files
    {
      files: [
        '.template-lintrc.js',
        'ember-cli-build.js',
        'index.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js',
      ],
      excludedFiles: ['addon/**', 'addon-test-support/**', 'app/**', 'tests/dummy/app/**'],
      parser: 'espree',
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
    },
  ],
};
