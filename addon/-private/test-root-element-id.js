import { DEBUG } from '@glimmer/env';
import requirejs from 'require';

/**
  Returns the testing container ID if the current environment is "test"

  Taken from [ember-basic-dropdown][1] 🙇‍♂️ ❤️

  [1]: https://github.com/cibernox/ember-basic-dropdown/blob/baa1d75402e7b8a72dc8a528400c94dcee538c6e/addon/components/basic-dropdown.js#L273-L293

  @param {Object} config
  @return {string | null}
*/
export default function testRootElementId(config) {
  let id;

  if (config.environment === 'test' && DEBUG && (typeof FastBoot === 'undefined')) {
    if (requirejs.has('@ember/test-helpers/dom/get-root-element')) {
      try {
        id = requirejs('@ember/test-helpers/dom/get-root-element').default().id;
      } catch (e) {}
    }

    if (!id) {
      let rootView = document.querySelector('#ember-testing > .ember-view');
      id = rootView && rootView.id;
    }
  }

  return id;
}
