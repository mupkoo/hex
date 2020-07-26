import Component from '@glimmer/component';
import { run } from '@ember/runloop';
import { action, computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default class DialogComponent extends Component {
  @service('dialog') dialog;
  @readOnly('dialog.message') message;

  @computed('message')
  get hasMessage() {
    return !isEmpty(this.message);
  }

  @computed('message.cancelLabel')
  get displayCancelButton() {
    return this.message.cancelLabel !== false;
  }

  @action confirm() {
    this.dialog.onConfirm();
  }

  @action cancel() {
    this.dialog.onCancel();
  }

  @action onDialogMount() {
    document.body.classList.add('has-dialog');
    this._attachDocumentEventHandler();
  }

  @action onDialogDismount() {
    document.body.classList.remove('has-dialog');
    this._detachDocumentEventHandler();
  }

  _attachDocumentEventHandler() {
    this._keyDownHandler = (e) => {
      e.preventDefault();

      if (e.keyCode === 27) run(this.cancel);
      if (e.keyCode === 13) run(this.confirm);
    };

    document.addEventListener('keydown', this._keyDownHandler);
  }

  _detachDocumentEventHandler() {
    document.removeEventListener('keydown', this._keyDownHandler);
  }
}
