'use strict';

module.exports = {
  name: require('./package').name,

  contentFor(type, config) {
    if (config.environment !== 'test' && type === 'body-footer' && !config._hexContentForInvoked) {
      config._hexContentForInvoked = true;

      return `
        <div id="hex-modal-parent"></div>
      `;
    }
  }
};
