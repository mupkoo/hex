'use strict';

module.exports = {
  arrowParens: 'always',
  singleQuote: true,
  printWidth: 100,
  overrides: [
    {
      files: '*.{js,ts}',
      options: {
        singleQuote: true,
      },
    },
  ],
};
