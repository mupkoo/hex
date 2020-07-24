// BEGIN-SNIPPET dialog-example.js
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { later } from '@ember/runloop';
import Controller from '@ember/controller';

export default class NotifyController extends Controller {
  @service('dialog') dialog;

  @action displayConfirmation() {
    this.dialog.confirm({
      title: 'How awesome?',
      message: 'This is a simple dialog message, used for confirming someones actions',
      cancelLabel: 'Dude',
      confirmLabel: 'Sweet'
    }, () => {
      this.set('isConfirmed', true);

      later(() => {
        this.set('isConfirmed', false);
      }, 2000);
    });
  }

  @action displayDeleteConfirmation() {
    this.dialog.confirmDelete(() => {
      this.set('isDeleted', true);

      later(() => {
        this.set('isDeleted', false);
      }, 2000);
    });
  }
}

// END-SNIPPET
