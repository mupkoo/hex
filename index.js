'use strict';

module.exports = {
  name: require('./package').name,

  contentFor(type, config) {
    let emberBasicDropdown = this.addons.find((a) => a.name === 'ember-basic-dropdown');
    let emberBasicDropdownContentFor = emberBasicDropdown.contentFor(type, config) || '';

    if (config.environment !== 'test' && type === 'body-footer' && !config._hexContentForInvoked) {
      config._hexContentForInvoked = true;

      return `
        <div id="hex-blanket-parent"></div>
        ${emberBasicDropdownContentFor}
      `;
    }
  }
};
