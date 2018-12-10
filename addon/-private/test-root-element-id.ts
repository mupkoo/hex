import { DEBUG } from '@glimmer/env';
// @ts-ignore
import requirejs from 'require';

declare var FastBoot: any;

/**
  Returns the testing container ID if the current environment is "test"

  Taken from ember-basic-dropdown 🙇‍♂️ ❤️
  https://github.com/cibernox/ember-basic-dropdown/blob/baa1d75402e7b8a72dc8a528400c94dcee538c6e/addon/components/basic-dropdown.js

  @param {Object} config
  @return {string | null}
*/
export default function testRootElementId(config: any): string | null {
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
