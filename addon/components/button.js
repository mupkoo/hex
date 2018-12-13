import Component from '@ember/component';
import { computed } from '@ember/object';
import objStr from 'hex/-private/obj-str';
import layout from '../templates/components/button';

/**
  A button component

  ```hbs
  <Button @primary>Save</Button>
  ```

  @class Button
  @public
*/
export default Component.extend({
  layout,
  tagName: '',

  _classNames: computed(
    'primary', 'success', 'danger', 'warning', 'subtle',
    'link', 'small', 'large', 'circle',
    function () {
      return objStr({
        'btn-primary': this.primary,
        'btn-success': this.success,
        'btn-danger': this.danger,
        'btn-warning': this.warning,
        'btn-subtle': this.subtle,
        'btn-link': this.link,
        'btn-sm': this.small,
        'btn-lg': this.large,
        'btn-circle': this.circle
      });
    }
  )
});
