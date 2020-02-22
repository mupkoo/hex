import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NotifyComponent extends Component {
  @service('notify') notify;

  @action removeMessage(message) {
    this.notify.remove(message);
  }
}
