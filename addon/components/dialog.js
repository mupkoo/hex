import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default class DialogComponent extends Component {
  @service('dialog') dialog;

  get message() {
    return this.dialog.message;
  }

  get hasMessage() {
    return !isEmpty(this.message);
  }

  get hasCancelButton() {
    return this.message.cancelLabel !== false;
  }

  @action confirm() {
    this.dialog.onConfirm();
  }

  @action cancel() {
    this.dialog.onCancel();
  }

  @action onDialogMount() {
    this._attachDocumentEventHandler();
  }

  @action onDialogDismount() {
    this._detachDocumentEventHandler();
  }

  _attachDocumentEventHandler() {
    this._keyDownHandler = (e) => {
      e.preventDefault();

      if (e.keyCode === 27) this.cancel();
      if (e.keyCode === 13) this.confirm();
    };

    document.addEventListener('keydown', this._keyDownHandler);
  }

  _detachDocumentEventHandler() {
    document.removeEventListener('keydown', this._keyDownHandler);
  }
}
