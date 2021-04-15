import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit/Service: notify', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.notify = this.owner.lookup('service:notify');
  });

  test('.show adds a message to the messages', async function (assert) {
    this.notify.show('Test message');

    assert.equal(this.notify.messages.length, 1);
    assert.equal(this.notify.messages[0].text, 'Test message');
  });

  test('.show returns the added message', async function (assert) {
    const message = this.notify.show('Test message');

    assert.contain(message, {
      text: 'Test message',
      type: 'info',
      isSticky: true,
      closeAfter: 2500,
    });
  });

  test('.show sets the defaults of the message', async function (assert) {
    this.notify.show('Test message');

    assert.contain(this.notify.messages[0], {
      text: 'Test message',
      type: 'info',
      isSticky: true,
      closeAfter: 2500,
    });
  });

  test('.remove removes a given message', async function (assert) {
    this.notify.show('One');
    this.notify.show('Two');
    this.notify.show('Three');
    this.notify.remove(this.notify.messages[1]);

    assert.equal(this.notify.messages.length, 2);
    assert.equal(this.notify.messages[0].text, 'One');
    assert.equal(this.notify.messages[1].text, 'Three');
  });

  test('.show returns a message that can be passed to .remove', async function (assert) {
    const message = this.notify.show('Test');
    this.notify.remove(message);

    assert.equal(this.notify.messages.length, 0);
  });

  test('.info adds an info message', async function (assert) {
    this.notify.info('An info message');

    assert.contain(this.notify.messages[0], {
      text: 'An info message',
      type: 'info',
    });
  });

  test('.info returns the added message', async function (assert) {
    const message = this.notify.info('An info message');

    assert.contain(message, {
      text: 'An info message',
      type: 'info',
    });
  });

  test('.success adds an success message', async function (assert) {
    this.notify.success('A success message');

    assert.contain(this.notify.messages[0], {
      text: 'A success message',
      type: 'success',
    });
  });

  test('.success returns the added message', async function (assert) {
    const message = this.notify.success('A success message');

    assert.contain(message, {
      text: 'A success message',
      type: 'success',
    });
  });

  test('.danger adds an danger message', async function (assert) {
    this.notify.danger('A danger message');

    assert.contain(this.notify.messages[0], {
      text: 'A danger message',
      type: 'danger',
    });
  });

  test('.danger returns the added message', async function (assert) {
    const message = this.notify.danger('A danger message');

    assert.contain(message, {
      text: 'A danger message',
      type: 'danger',
    });
  });
});
