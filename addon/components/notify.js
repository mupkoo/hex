import Component from '@ember/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import layout from '../templates/components/notify';

export default class NotifyComponent extends Component {
  layout = layout;
  tagName = '';

  @service('notify') notify;

  @action removeMessage(message) {
    this.notify.remove(message);
  }
}
