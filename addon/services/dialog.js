import Service from '@ember/service';

export default class DialogService extends Service {
  message = null;
  _handler = null;

  confirm(options = {}) {
    if (this.message) return this._handler;

    this.set('message', createMessage(options));
    this._handler = new Handler();

    return this._handler;
  }

  confirmDelete() {
    return this.confirm({
      title: 'Are you sure?',
      message: 'Deleting a record is final and deleted records cannot be restored.',
      confirmLabel: 'Delete'
    });
  }

  onConfirm() {
    this._handler.confirm();
    this._reset();
  }

  onCancel() {
    this._handler.cancel();
    this._reset();
  }

  _reset() {
    this.set('message', null);
    this._handler = null;
  }
}

class Handler extends Promise {
  defaultCatch = '__HANDLER_DEFAULT_CATCH';
  hasCancelHandler = false;

  constructor(executor = () => {}) {
    let resolve;
    let reject;

    super((_resolve, _reject) => {
      executor(_resolve, _reject);
      resolve = _resolve;
      reject = _reject;
    });

    this._resolve = resolve;
    this._reject = reject;
  }

  confirm() {
    this._resolve();
  }

  cancel() {
    this._reject();
  }

  onConfirm(handler) {
    return this.then((result) => {
      if (!this.isDefaultCatch(result)) handler();

      return result;
    }).catch(() => this.defaultCatch);
  }

  onCancel(handler) {
    return this.then((result) => {
      if (this.isDefaultCatch(result)) throw 'canceled';
    }).catch(handler);
  }

  isDefaultCatch(result) {
    return result && result.indexOf(this.defaultCatch) >= 0;
  }
}

function createMessage(attributes) {
  return {
    title: null,
    message: 'Are you sure?',
    cancelLabel: 'Cancel',
    confirmLabel: 'Confirm',
    ...attributes
  };
}
