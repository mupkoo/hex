import Component from '@ember/component';
import { scheduleOnce, run } from '@ember/runloop';
import { action, computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default class DialogComponent extends Component {
  @service('dialog') dialog;
  @readOnly('dialog.message') message;

  @computed('message')
  get hasMessage() {
    let hasMessage = !isEmpty(this.message);
    let callback = hasMessage
      ? this._attachDocumentEventHandler
      : this._detachDocumentEventHandler;
    scheduleOnce('afterRender', this, callback);

    return hasMessage;
  }

  @computed('message.cancelLabel')
  get displayCancelButton() {
    return this.message.cancelLabel !== false;
  }

  willDestroyElement() {
    this._detachDocumentEventHandler();
  }

  @action confirm() {
    this.dialog.onConfirm();
  }

  @action cancel() {
    this.dialog.onCancel();
  }

  addClassNameToBody() {
    document.body.classList.add('has-dialog');
  }

  removeClassNameFromBody() {
    document.body.classList.remove('has-dialog');
  }

  _detachDocumentEventHandler() {
    document.removeEventListener('keydown', this._keyDownHandler);
  }

  _attachDocumentEventHandler() {
    this._keyDownHandler = (e) => {
      e.preventDefault();

      if (e.keyCode === 27) {
        run(() => this.send('cancel'));
      }

      if (e.keyCode === 13) {
        run(() => this.send('confirm'));
      }
    };

    document.addEventListener('keydown', this._keyDownHandler);
  }
}
