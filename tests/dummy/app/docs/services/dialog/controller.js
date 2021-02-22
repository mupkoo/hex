// BEGIN-SNIPPET dialog-example.js
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';

export default class NotifyController extends Controller {
  @service('dialog') dialog;
  @tracked message;

  @action
  displayConfirmation() {
    this.message = null;

    this.dialog
      .confirm({
        title: 'How awesome?',
        message: 'This is a simple dialog message, used for confirming someones actions',
        cancelLabel: 'Dude',
        confirmLabel: 'Sweet',
      })
      .onConfirm(() => {
        this.message = 'Sweet! You confirmed the message.';
      })
      .onCancel(() => {
        this.message = 'Dialog was dismissed!';
      });
  }

  @action
  displayDeleteConfirmation() {
    this.message = null;

    this.dialog.confirmDelete().onConfirm(() => {
      this.message = 'So long my love...';
    });
  }

  @task({ drop: true })
  *dialogTask() {
    this.message = null;

    try {
      yield this.dialog.confirm();
    } catch (e) {
      return;
    }

    this.message = 'Task was confirmed!';
  }
}

// END-SNIPPET
