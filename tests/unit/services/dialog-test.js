import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit - Service: dialog', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.dialog = this.owner.lookup('service:dialog');
  });

  test('.confirm creates and stores a new message', function (assert) {
    this.dialog.confirm({
      title: 'Want to be a Jedi?',
      message: 'Confirming you will enter the endless universe of the power.',
      confirmLabel: 'Make me Jedi'
    });

    assert.equal(this.dialog.message.title, 'Want to be a Jedi?');
    assert.equal(this.dialog.message.message, 'Confirming you will enter the endless universe of the power.');
    assert.equal(this.dialog.message.confirmLabel, 'Make me Jedi');
  });

  test('.confirm setting the message second time resets the values to the default once', function (assert) {
    this.dialog.confirm({
      title: 'Want to be a Jedi?',
      message: 'Confirming you will enter the endless universe of the power.',
      confirmLabel: 'Make me Jedi'
    }).onConfirm(() => {});

    this.dialog.onCancel();
    this.dialog.confirm();

    assert.equal(this.dialog.message.title, null);
    assert.equal(this.dialog.message.message, 'Are you sure?');
    assert.equal(this.dialog.message.confirmLabel, 'Confirm');
  });

  test('.confirm does not overwrite the message on second call if there is already a message', function (assert) {
    this.dialog.confirm({ title: 'Want to be a Jedi?' });
    this.dialog.confirm({ title: 'Want to be a Sith?' });

    assert.equal(this.dialog.message.title, 'Want to be a Jedi?');
  });

  test('.confirm returns promise like object that works with async/await', async function (assert) {
    let result = this.dialog.confirm();

    this.dialog.onConfirm();

    await result;

    assert.ok(true);
  });

  test('.confirmDelete adds default delete message', function (assert) {
    this.dialog.confirmDelete();

    assert.equal(this.dialog.message.title, 'Are you sure?');
    assert.equal(this.dialog.message.message, 'Deleting a record is final and deleted records cannot be restored.');
    assert.equal(this.dialog.message.confirmLabel, 'Delete');
  });

  test('.onConfirm resolves the promise like object', async function (assert) {
    let isThenTriggered = false;
    let result = this.dialog.confirm().then(() => isThenTriggered = true);

    this.dialog.onConfirm();
    await result;

    assert.ok(isThenTriggered, 'then was triggered');
  });

  test('.onConfirm triggers the onConfirm callbacks', async function (assert) {
    let isOnConfirmTriggered = false;
    let result = this.dialog.confirm().onConfirm(() => isOnConfirmTriggered = true);

    this.dialog.onConfirm();
    await result;

    assert.ok(isOnConfirmTriggered, 'then was triggered');
  });

  test('.onConfirm clears the message', function (assert) {
    this.dialog.confirm();
    this.dialog.onConfirm();

    assert.notOk(this.dialog.message);
  });

  test('.onConfirm does not trigger the onCancel handler', function (assert) {
    let done = assert.async();

    this.dialog.confirm().onConfirm(() => {
      assert.ok(true);
      done();
    }).onCancel(() => {
      assert.notOk(true, 'onCancel was triggered');
    });

    this.dialog.onConfirm();
  });

  test('.onConfirm does not trigger the onCancel handler even if it is defined first', function (assert) {
    let done = assert.async();

    this.dialog.confirm().onCancel(() => {
      assert.notOk(true, 'onCancel was triggered');
    }).onConfirm(() => {
      assert.ok(true);
      done();
    });

    this.dialog.onConfirm();
  });

  test('.onCancel triggers the onCancel callbacks', function (assert) {
    let done = assert.async();

    this.dialog.confirm().onCancel(() => {
      assert.ok(true, 'onCancel was triggered');
      done();
    });

    this.dialog.onCancel();
  });

  test('.onCancel clears the message', function (assert) {
    this.dialog.confirm().onConfirm(() => {});
    this.dialog.onCancel();

    assert.notOk(this.dialog.message);
  });

  test('.onCancel does not trigger the onConfirm handler', function (assert) {
    let done = assert.async();

    this.dialog.confirm().onConfirm(() => {
      assert.notOk(true, 'onConfirm was triggered');
    }).onCancel(() => {
      assert.ok(true);
      done();
    });

    this.dialog.onCancel();
  });
});
