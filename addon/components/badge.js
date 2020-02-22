import Component from '@glimmer/component';
import objStr from 'hex/-private/obj-str';

/**
  A badge component

  ```hbs
  <Badge @primary>Pending</Badge>
  ```

  @class Badge
  @public
*/
export default class BadgeComponent extends Component {
  get classNames() {
    return objStr({
      'badge-primary': this.args.primary,
      'badge-success': this.args.success,
      'badge-danger': this.args.danger,
      'badge-warning': this.args.warning,
      'badge-info': this.args.info,
      'badge-light': this.args.light,
      'badge-dark': this.args.dark
    });
  }
}
