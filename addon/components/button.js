import Component from '@glimmer/component';
import objStr, { checkValue } from 'hex/-private/obj-str';

/**
  A button component

  ```hbs
  <Button @primary>Save</Button>
  ```

  @class Button
  @public
*/
export default class ButtonComponent extends Component {
  get classNames() {
    let outline = checkValue(this.args.outline);

    return objStr({
      'btn-primary': !outline && checkValue(this.args.primary),
      'btn-success': !outline && checkValue(this.args.success),
      'btn-danger': !outline && checkValue(this.args.danger),
      'btn-warning': !outline && checkValue(this.args.warning),
      'btn-outline-primary': outline && checkValue(this.args.primary),
      'btn-outline-success': outline && checkValue(this.args.success),
      'btn-outline-danger': outline && checkValue(this.args.danger),
      'btn-outline-warning': outline && checkValue(this.args.warning),
      'btn-subtle': this.args.subtle,
      'btn-link': this.args.link,
      'btn-sm': this.args.small,
      'btn-lg': this.args.large,
      'btn-circle': this.args.circle,
      'btn-block': this.args.block,
      'btn-spinner': this.hasSpinner,
    });
  }

  get hasSpinner() {
    return typeof this.args.isLoading !== 'undefined';
  }

  get isDisabled() {
    return this.args.isLoading || this.args.disabled;
  }

  // Looks like you cannot overwrite the `type` attribute via `...attributes`
  // https://github.com/emberjs/ember.js/issues/18232
  get type() {
    return this.args.type || 'button';
  }
}
