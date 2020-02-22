import Component from '@glimmer/component';
import objStr from 'hex/-private/obj-str';

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
    return objStr({
      'btn-primary': this.args.primary,
      'btn-success': this.args.success,
      'btn-danger': this.args.danger,
      'btn-warning': this.args.warning,
      'btn-subtle': this.args.subtle,
      'btn-link': this.args.link,
      'btn-sm': this.args.small,
      'btn-lg': this.args.large,
      'btn-circle': this.args.circle,
      'btn-block': this.args.block
    });
  }

  // Looks like you cannot overwrite the `type` attribute via `...attributes`
  // https://github.com/emberjs/ember.js/issues/18232
  get type() {
    return this.args.type || 'button';
  }
}
