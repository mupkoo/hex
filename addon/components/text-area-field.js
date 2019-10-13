import Component from '@ember/component';
import { action } from '@ember/object';
import layout from '../templates/components/text-area-field';

/**
  A handle helper for creating a field that renders
  a label and an textarea

  ```hbs
  <TextAreaField @value={{this.model.name}} />
  ```

  @class TextAreaFieldComponent
  @public
*/
export default class TextAreaFieldComponent extends Component {
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
