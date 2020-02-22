import Component from '@glimmer/component';

export const ICON_MAP = {
  success: 'M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z',
  danger: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
  info: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'
};

/**
  An alert component used to display some feedback message

  ```hbs
  <Alert @success>Record was saved successfully.</Alert>
  ```

  @class Alert
  @public
*/
export default class AlertComponent extends Component {
  get variant() {
    return this._checkFlag('success') ||
      this._checkFlag('danger') ||
      this._checkFlag('info') ||
      this.args.variant ||
      'info';
  }

  get iconPath() {
    return ICON_MAP[this.variant];
  }

  _checkFlag(key) {
    return this.args[key] || this.args[key] === '' ? key : false;
  }
}
