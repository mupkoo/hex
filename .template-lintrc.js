'use strict';

module.exports = {
  extends: 'recommended',
  rules: {
    'attribute-indentation': {
      indentation: 4,
      'element-open-end': 'last-attribute',
      'mustache-open-end': 'last-attribute'
    }
  }
};
