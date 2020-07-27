import Service from '@ember/service';

export default class DialogService extends Service {
  message = null;
  _promise = null;

  confirm(options) {
    if (this.message) return this._promise;

    this.set('message', createMessage(options));

    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });

    return this._promise;
  }

  confirmDelete() {
    return this.confirm({
      title: 'Are you sure?',
      message: 'Deleting a record is final and deleted records cannot be restored.',
      confirmLabel: 'Delete'
    });
  }

  onCancel() {
    // Catch the error if no catch was implemented
    this._promise.catch(() => {});

    this._reject();
    this.set('message', null);
  }

  onConfirm() {
    this._resolve();
    this.set('message', null);
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
