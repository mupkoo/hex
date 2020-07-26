import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, triggerKeyEvent, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

const DialogServiceStub = Service.extend({
  message: null,

  init() {
    this._super(...arguments);

    this.message = {
      title: 'Dummy title',
      message: 'Dummy content',
      cancelLabel: 'Dummy cancel',
      confirmLabel: 'Dummy confirm'
    };
  },

  onCancel() {
    this.set('message.title', 'CANCELED');
  },

  onConfirm() {
    this.set('message.title', 'CONFIRMED');
  }
});

module('Integration: Dialog', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:dialog', DialogServiceStub);
    this.dialog = this.owner.lookup('service:dialog');
  });

  test('does not display a dialog box if there is no message', async function (assert) {
    this.set('dialog.message', null);

    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    assert.dom('.dialog').doesNotExist();
  });

  test('displays a dialog box if there is message', async function (assert) {
    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    assert.dom('.dialog').exists();
  });

  test('displays all the message fields', async function (assert) {
    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    assert.dom('.dialog-header').hasText('Dummy title');
    assert.dom('.dialog-content').hasText('Dummy content');
    assert.dom('[data-test-cancel-dialog]').hasText('Dummy cancel');
    assert.dom('[data-test-confirm-dialog]').hasText('Dummy confirm');
  });

  test('renders the passed HTML to the body', async function (assert) {
    this.set('dialog.message.message', '<span id="dialog-span">Awesome</span>');

    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    assert.dom('#dialog-span').exists();
  });

  test('does not render header if there is no title', async function (assert) {
    this.set('dialog.message.title', null);

    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    assert.dom('.dialog-header').doesNotExist();
  });

  test('sends cancel action upon clicking the cancel button', async function (assert) {
    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    await click('[data-test-cancel-dialog]');

    assert.dom('.dialog-header').hasText('CANCELED');
  });

  test('sends confirm action upon clicking the confirm button', async function (assert) {
    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    await click('[data-test-confirm-dialog]');

    assert.dom('.dialog-header').hasText('CONFIRMED');
  });

  test('hides the dialog whenever the message is removed', async function (assert) {
    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    assert.dom('.dialog').exists();
    this.set('dialog.message', null);
    await settled();
    assert.dom('.dialog').doesNotExist();
  });

  test('sends cancel action on hitting ESC', async function (assert) {
    let message = this.dialog.message;
    this.set('dialog.message', null);

    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    this.set('dialog.message', message);

    await triggerKeyEvent(document, 'keydown', 27);

    assert.dom('.dialog-header').hasText('CANCELED');
  });

  test('sends confirm action on hitting ENTER', async function (assert) {
    let message = this.dialog.message;
    this.set('dialog.message', null);

    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    this.set('dialog.message', message);

    await triggerKeyEvent(document, 'keydown', 13);

    assert.dom('.dialog-header').hasText('CONFIRMED');
  });

  test('does not render cancel button if cancelLabel is set to false', async function (assert) {
    this.set('dialog.message.cancelLabel', false);

    await render(hbs`
      <div id="dummy-dialog"></div>
      <Dialog @parentElement="dummy-dialog" />
    `);

    assert.dom('[data-test-cancel-dialog]').doesNotExist();
  });
});
