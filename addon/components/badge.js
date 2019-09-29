import Component from '@ember/component';
import { computed } from '@ember/object';
import objStr from 'hex/-private/obj-str';
import layout from '../templates/components/badge';

/**
  A badge component

  ```hbs
  <Badge @primary>Pending</Badge>
  ```

  @class Badge
  @public
*/
export default class BadgeComponent extends Component {
  layout = layout;
  tagName = '';

  @computed(
    'primary', 'success', 'danger', 'warning',
    'info', 'light', 'dark'
  )
  get _classNames() {
    return objStr({
      'badge-primary': this.primary,
      'badge-success': this.success,
      'badge-danger': this.danger,
      'badge-warning': this.warning,
      'badge-info': this.info,
      'badge-light': this.light,
      'badge-dark': this.dark
    });
  }
}
