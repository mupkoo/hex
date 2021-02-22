// BEGIN-SNIPPET dialog-example.js
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { task } from 'ember-concurrency';

export default class NotifyController extends Controller {
  @service('dialog') dialog;

  @action
  displayConfirmation() {
    this.set('message', null);

    this.dialog
      .confirm({
        title: 'How awesome?',
        message: 'This is a simple dialog message, used for confirming someones actions',
        cancelLabel: 'Dude',
        confirmLabel: 'Sweet',
      })
      .onConfirm(() => {
        this.set('message', 'Sweet! You confirmed the message.');
      })
      .onCancel(() => {
        this.set('message', 'Dialog was dismissed!');
      });
  }

  @action
  displayDeleteConfirmation() {
    this.set('message', null);

    this.dialog.confirmDelete().onConfirm(() => {
      this.set('message', 'So long my love...');
    });
  }

  @task({ drop: true })
  *dialogTask() {
    this.set('message', null);

    yield this.dialog.confirm();

    this.set('message', 'Task was confirmed!');
  }
}

// END-SNIPPET
