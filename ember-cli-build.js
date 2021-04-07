'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const nodeSass = require('node-sass');
const { maybeEmbroider } = require('@embroider/test-setup');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    sassOptions: {
      implementation: nodeSass,
    },
  });

  return maybeEmbroider(app);
};
