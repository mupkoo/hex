import Component, { tracked } from 'sparkles-component';
import objStr from 'hex/-private/obj-str';

export type BooleanArg = boolean | '';

export interface ButtonArgs {
  primary?: BooleanArg;
  success?: BooleanArg;
  danger?: BooleanArg;
  warning?: BooleanArg;
  subtle?: BooleanArg;
  link?: BooleanArg;
  small?: BooleanArg;
  large?: BooleanArg;
  circle?: BooleanArg;
}

/**
  A button component
  ```hbs
  <Button @primary>Save</Button>
  ```
  @class Button
  @public
*/
export default class Button extends Component<ButtonArgs> {
  @tracked('args')
  get classNames(): string {
    return objStr({
      'btn-primary': this.args.primary,
      'btn-success': this.args.success,
      'btn-danger': this.args.danger,
      'btn-warning': this.args.warning,
      'btn-subtle': this.args.subtle,
      'btn-link': this.args.link,
      'btn-sm': this.args.small,
      'btn-lg': this.args.large,
      'btn-circle': this.args.circle
    });
  }
};
