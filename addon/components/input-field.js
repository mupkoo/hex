import Component from '@ember/component';
import { action } from '@ember/object';
import layout from '../templates/components/input-field';

/**
  A handle helper for creating a field that renders
  a label and an input

  ```hbs
  <InputField @value={{this.model.name}} />
  ```

  @class InputField
  @public
*/
export default class InputFieldComponent extends Component {
  layout = layout;
  tagName = '';

  @action handleInputEvent(e) {
    let value = e.target.value;

    if (this.onChange) {
      this.onChange(value);
    } else {
      this.set('value', value);
    }
  }
}
