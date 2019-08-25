import Component from '@ember/component';
import { action } from '@ember/object';
import layout from '../templates/components/checkbox';
import uuid from '../-private/uuid';

/**
  HTML <input type="checkbox"> wrapper

  ```hbs
  <Checkbox />
  ```
  @class Checkbox
  @public
*/
export default class CheckboxComponent extends Component {
  layout = layout;
  tagName = '';

  get uuid() {
    return 'hex-' + uuid();
  }

  @action handleChangeEvent(e) {
    if (this.onChange) {
      this.onChange(e.target.checked);
    } else {
      this.set('checked', e.target.checked);
    }
  }
}
