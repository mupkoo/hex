import Component from '@glimmer/component';
import { action } from '@ember/object';
import { cancel, later } from '@ember/runloop';

export default class NotifyMessageComponent extends Component {
  @action startTimer() {
    if (this.args.message.isSticky) return;

    this._timer = later(
      this,
      () => this.args.onDismiss(),
      this.args.message.closeAfter
    );
  }

  @action stopTimer() {
    cancel(this._timer);
  }
}
