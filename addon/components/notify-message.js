import Component from '@ember/component';
import { action } from '@ember/object';
import { cancel, later } from '@ember/runloop';
import layout from '../templates/components/notify-message';

export default class NotifyMessageComponent extends Component {
  layout = layout;
  tagName = '';

  @action startTimer() {
    if (this.message.isSticky) return;

    this._timer = later(this, () => this.onDismiss(), this.message.closeAfter);
  }

  @action stopTimer() {
    cancel(this._timer);
  }
}
