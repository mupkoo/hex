import Service from '@ember/service';
import EmberObject from '@ember/object';
import { defer } from 'rsvp';

export var DialogMessage = EmberObject.extend({
  title: null,
  message: 'Are you sure?',
  cancelLabel: 'Cancel',
  confirmLabel: 'Confirm'
});

export default class DialogService extends Service {
  message = null
  _deferred = null

  confirm(options) {
    if (this.message === null) {
      this._deferred = defer();
      this.set('message', DialogMessage.create(options));
    }

    return this._deferred.promise;
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
    this._deferred.promise.catch(() => { });

    this._deferred.reject();
    this._deferred = null;
    this.set('message', null);
  }

  onConfirm() {
    this._deferred.resolve();
    this._deferred = null;
    this.set('message', null);
  }
}
