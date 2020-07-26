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
    });

    this.dialog.onCancel();
    this.dialog.confirm({});

    assert.equal(this.dialog.message.title, null);
    assert.equal(this.dialog.message.message, 'Are you sure?');
    assert.equal(this.dialog.message.confirmLabel, 'Confirm');
  });

  test('.confirm does not overwrite the message on second call if there is already a message', function (assert) {
    this.dialog.confirm({ title: 'Want to be a Jedi?' });
    this.dialog.confirm({ title: 'Want to be a Sith?' });

    assert.equal(this.dialog.message.title, 'Want to be a Jedi?');
  });

  test('.onCancel removes the current message', function (assert) {
    this.dialog.confirm();
    this.dialog.onCancel();

    assert.equal(this.dialog.message, null);
  });

  test('.onConfirm resolves the promise', function (assert) {
    const promise = this.dialog.confirm({}).then(() => {
      assert.ok(true);
    });

    this.dialog.onConfirm();

    return promise;
  });

  test('.onCancel rejects the promise', function (assert) {
    const promise = this.dialog.confirm({}).then(() => 1, () => {
      assert.ok(true, 'Promise was rejected');
    });

    this.dialog.onCancel();

    return promise;
  });

  test('.onConfirm removes the current message', function (assert) {
    const promise = this.dialog.confirm({}).then(() => {
      assert.ok(true);
    });

    this.dialog.onConfirm();
    assert.equal(this.dialog.message, null);

    return promise;
  });

  test('.confirmDelete adds default delete message', function (assert) {
    this.dialog.confirmDelete();

    assert.equal(this.dialog.message.title, 'Are you sure?');
    assert.equal(this.dialog.message.message, 'Deleting a record is final and deleted records cannot be restored.');
    assert.equal(this.dialog.message.confirmLabel, 'Delete');
  });
});
