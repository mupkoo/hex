import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: Notify', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.notify = this.owner.lookup('service:notify');
  });

  test('it renders all the messages from the notify service', async function (assert) {
    this.notify.info('An info message');
    this.notify.success('A success message');
    this.notify.danger('A danger message');

    await render(hbs`<Notify />`);

    assert.dom('[data-test-notify-message="info"]').containsText('An info message');
    assert.dom('[data-test-notify-message="success"]').containsText('A success message');
    assert.dom('[data-test-notify-message="danger"]').containsText('A danger message');
  });

  test('it removes a message', async function (assert) {
    this.notify.info('A message');

    await render(hbs`<Notify />`);

    await click('[data-test-notify-message]');

    assert.dom('[data-test-notify-message]').doesNotExist();
  });
});
