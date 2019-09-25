// BEGIN-SNIPPET notify-example.js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NotifyController extends Controller {
  @service('notify') notify;

  @action showInfoMessage() {
    this.notify.info('This is an info message');
  }

  @action showSuccessMessage() {
    this.notify.success('Record saved successfully.');
  }

  @action showDangerMessage() {
    this.notify.danger('Something went wrong. Please, try again later.');
  }
}

// END-SNIPPET
