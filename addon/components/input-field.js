import Component from '@glimmer/component';
import { action } from '@ember/object';

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
  @action handleInputEvent(e) {
    if (this.args.onChange) {
      this.args.onChange(e.target.value);
    }
  }
}
