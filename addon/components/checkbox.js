import Component from '@glimmer/component';
import { action } from '@ember/object';
import guid from '../-private/guid';

/**
  HTML <input type="checkbox"> wrapper

  ```hbs
  <Checkbox />
  ```
  @class Checkbox
  @public
*/
export default class CheckboxComponent extends Component {
  get guid() {
    return 'hex-' + guid();
  }

  @action handleChangeEvent(e) {
    if (this.args.onChange) {
      this.args.onChange(e.target.checked);
    }
  }
}
