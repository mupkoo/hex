import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance: dialog', function (hooks) {
  setupApplicationTest(hooks);

  test('it handles both confirm and cancel actions', async function (assert) {
    await visit('/docs/services/dialog');

    await click('[data-test-confirm]');
    await click('[data-test-confirm-dialog]');
    assert.dom('[data-test-message]').hasText('Sweet! You confirmed the message.');

    await click('[data-test-confirm]');
    await click('[data-test-cancel-dialog]');
    assert.dom('[data-test-message]').hasText('Dialog was dismissed!');

  });

  test('it works with task instance that does not have a catch block', async function (assert) {
    await visit('/docs/services/dialog');

    await click('[data-test-task]');
    await click('[data-test-confirm-dialog]');
    assert.dom('[data-test-message]').hasText('Task was confirmed!');

    await click('[data-test-task]');
    await click('[data-test-cancel-dialog]');
    assert.dom('[data-test-message]').doesNotExist();
  });

  test('it does not raise if onCancel is not given', async function (assert) {
    await visit('/docs/services/dialog');

    await click('[data-test-delete]');
    await click('[data-test-confirm-dialog]');
    assert.dom('[data-test-message]').hasText('So long my love...');

    await click('[data-test-delete]');
    await click('[data-test-cancel-dialog]');
    assert.dom('[data-test-message]').doesNotExist();
  });
});
