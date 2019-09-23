import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance: notify', function (hooks) {
  setupApplicationTest(hooks);

  test('smoke test', async function (assert) {
    await visit('/docs/services/notify');

    await click('[data-test-show-info]');
    assert.dom('[data-test-notify-message="info"]').exists();

    await click('[data-test-show-success]');
    assert.dom('[data-test-notify-message="success"]').exists();

    await click('[data-test-show-danger]');
    assert.dom('[data-test-notify-message="danger"]').exists();

    await click('[data-test-notify-message="info"]');
    assert.dom('[data-test-notify-message="info"]').doesNotExist();

    await click('[data-test-notify-message="success"]');
    assert.dom('[data-test-notify-message="success"]').doesNotExist();

    await click('[data-test-notify-message="danger"]');
    assert.dom('[data-test-notify-message="danger"]').doesNotExist();
  });
});
