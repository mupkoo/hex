import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, waitUntil, triggerEvent, waitFor } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: NotifyMessage', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.message = {
      text:
        'You either die a web developer, or live long enough to call yourself software engineer',
      type: 'info',
      isSticky: true,
      closeAfter: 5,
    };

    this.onDismissTriggered = false;
    this.onDismiss = () => (this.onDismissTriggered = true);
  });

  test('it renders the passed message', async function (assert) {
    await render(hbs`<NotifyMessage @message={{this.message}} @onDismiss={{this.onDismiss}} />`);

    assert.dom(this.element).containsText(this.message.text);
  });

  test('it sets the variant of the rendered alert', async function (assert) {
    await render(hbs`<NotifyMessage @message={{this.message}} @onDismiss={{this.onDismiss}} />`);

    assert.dom('.alert.alert-info').exists();
  });

  test('it triggers the @onDismiss action upon clicking the message', async function (assert) {
    await render(hbs`
      <NotifyMessage @message={{this.message}} @onDismiss={{this.onDismiss}} data-test-message />
    `);

    await click('[data-test-message]');

    assert.ok(this.onDismissTriggered, 'onDismissed was triggered');
  });

  test('it triggers the @onDismiss action after the given time if isSticky is false', async function (assert) {
    this.message.isSticky = false;

    await render(hbs`
      <NotifyMessage @message={{this.message}} @onDismiss={{this.onDismiss}} data-test-message />
    `);

    await waitUntil(() => this.onDismissTriggered, { timeout: 10 });

    assert.ok(this.onDismissTriggered, 'onDismissed was triggered');
  });

  test('it does not trigger the @onDismiss action after the given time is isSticky is true', async function (assert) {
    this.message.isSticky = true;

    await render(hbs`
      <NotifyMessage @message={{this.message}} @onDismiss={{this.onDismiss}} data-test-message />
    `);

    await timeout(10);

    assert.notOk(this.onDismissTriggered, 'onDismissed was not triggered');
  });

  test('it toggles the auto-close behavior on mouse enter and leave', async function (assert) {
    this.message.isSticky = false;
    this.message.closeAfter = 5;

    render(hbs`
      <NotifyMessage @message={{this.message}} @onDismiss={{this.onDismiss}} data-test-message />
    `);

    await waitFor('[data-test-message]');
    await triggerEvent('[data-test-message]', 'mouseenter');
    await timeout(10);

    assert.notOk(this.onDismissTriggered, 'onDismissed was not triggered');

    await triggerEvent('[data-test-message]', 'mouseleave');
    await waitUntil(() => this.onDismissTriggered, { timeout: 10 });

    assert.ok(this.onDismissTriggered, 'onDismissed was triggered');
  });
});

function timeout(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
