import { module, test } from 'qunit';
import { visit, click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import percySnapshot from '@percy/ember';
import { selectChoose, selectSearch } from 'ember-power-select/test-support';

module('Acceptance: Percy', function (hooks) {
  setupApplicationTest(hooks);

  let cases = [
    { url: '/docs/colors' },
    { url: '/docs/components/alert' },
    { url: '/docs/components/badge' },
    { url: '/docs/components/blanket', setup: () => click('.btn') },
    { url: '/docs/components/button' },
    { url: '/docs/components/card' },
    { url: '/docs/components/dropdown', setup: () => click('.btn') },

    // { url: '/docs/components/empty-state' },

    {
      url: '/docs/components/modal',
      async setup() {
        await click('[data-test-normal]');
        await percySnapshot('/docs/modal/normal');

        await click('[data-test-small]');
        await percySnapshot('/docs/modal/small');

        await click('[data-test-large]');
        await percySnapshot('/docs/modal/large');
      }
    },
    { url: '/docs/components/spinner' },
    { url: '/docs/components/checkbox', setup: () => click('label') },
    { url: '/docs/components/field' },
    { url: '/docs/components/input-field' },
    { url: '/docs/components/search-field' },
    { url: '/docs/components/select-field' },
    { url: '/docs/components/text-area-field' },
    {
      url: '/docs/components/power-select-field',
      async setup() {
        await selectChoose('[data-test-single]', 'Jedi Master');
        await selectSearch('[data-test-single]', 's');
        await percySnapshot('/docs/power-select-field/single');

        await selectChoose('[data-test-multiple]', 'Yoda');
        await selectSearch('[data-test-multiple]', 'a');
        await percySnapshot('/docs/power-select-field/multiple');

        await selectChoose('[data-test-multiple]', 'Kenobi');
      }
    },
    {
      url: '/docs/services/dialog',
      async setup() {
        await click('[data-test-confirm]');
        await percySnapshot('/docs/service/dialog/confirm');
        await click('[data-test-confirm-dialog]');

        await click('[data-test-delete]');
      }
    },
    {
      url: '/docs/services/notify',
      async setup() {
        await click('[data-test-show-info]');
        await click('[data-test-show-success]');
        await click('[data-test-show-danger]');
      }
    },
    { url: '/sandbox/alert' },
    { url: '/sandbox/button' },
    { url: '/sandbox/button-outline' },
    { url: '/sandbox/button-circle' },
    { url: '/sandbox/card' },
    { url: '/sandbox/fields' },
    { url: '/sandbox/input' }
  ];

  for (let { url, setup } of cases) {
    test(`visit and capture screenshot - ${url}`, async function (assert) {
      await visit(url);

      if (setup) {
        await setup();
      }

      assert.equal(currentURL(), url);

      await percySnapshot(url);
    });
  }
});
