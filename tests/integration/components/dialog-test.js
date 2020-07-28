import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, triggerKeyEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: Dialog', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.dialog = this.owner.lookup('service:dialog');
  });

  test('it does not display a dialog box if there is no message', async function (assert) {
    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    assert.dom('[data-test-dialog]').doesNotExist();
  });

  test('it displays a dialog box if there is message', async function (assert) {
    this.dialog.confirm();

    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    assert.dom('[data-test-dialog]').exists();
  });

  test('it displays all the message fields', async function (assert) {
    this.dialog.confirm({
      title: 'Dummy title',
      message: 'Dummy message',
      confirmLabel: 'Dummy confirm',
      cancelLabel: 'Dummy cancel'
    });

    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    assert.dom('.dialog-title').hasText('Dummy title');
    assert.dom('.dialog-message').hasText('Dummy message');
    assert.dom('[data-test-cancel-dialog]').hasText('Dummy cancel');
    assert.dom('[data-test-confirm-dialog]').hasText('Dummy confirm');
  });

  test('it renders the passed HTML to the body', async function (assert) {
    this.dialog.confirm({
      message: '<span id="dialog-span">Awesome</span>'
    });

    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    assert.dom('#dialog-span').exists();
  });

  test('it does not render header if there is no title', async function (assert) {
    this.dialog.confirm({ title: null });

    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    assert.dom('.dialog-header').doesNotExist();
  });

  test('it triggers the cancel action upon clicking the cancel button', async function (assert) {
    let isCancelTriggered = false;

    this.dialog.confirm().onCancel(() => isCancelTriggered = true);

    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    await click('[data-test-cancel-dialog]');

    assert.ok(isCancelTriggered, 'cancel was triggered');
  });

  test('it triggers the confirm action upon clicking the confirm button', async function (assert) {
    let isConfirmTriggered = false;

    this.dialog.confirm().then(() => isConfirmTriggered = true);

    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    await click('[data-test-confirm-dialog]');

    assert.ok(isConfirmTriggered, 'confirm was triggered');
  });

  test('it hides the dialog whenever the message is removed', async function (assert) {
    this.dialog.confirm();

    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    assert.dom('[data-test-dialog]').exists();

    await click('[data-test-confirm-dialog]');

    assert.dom('[data-test-dialog]').doesNotExist();
  });

  test('it triggers the cancel action upon hitting ESC', async function (assert) {
    let isCancelTriggered = false;

    this.dialog.confirm().onCancel(() => isCancelTriggered = true);

    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    await triggerKeyEvent(document, 'keydown', 27);

    assert.ok(isCancelTriggered, 'cancel was triggered');
  });

  test('it triggers the confirm action upon hitting ENTER', async function (assert) {
    let isConfirmTriggered = false;

    this.dialog.confirm().then(() => isConfirmTriggered = true);

    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    await triggerKeyEvent(document, 'keydown', 13);

    assert.ok(isConfirmTriggered, 'confirm was triggered');
  });

  test('it does not render cancel button if cancelLabel is set to false', async function (assert) {
    this.dialog.confirm({
      cancelLabel: false
    });

    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    assert.dom('[data-test-cancel-dialog]').doesNotExist();
  });
});
