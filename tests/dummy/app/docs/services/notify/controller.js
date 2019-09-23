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
    this.notify.success('This is an success message');
  }

  @action showDangerMessage() {
    this.notify.danger('This is an danger message');
  }
}

// END-SNIPPET
