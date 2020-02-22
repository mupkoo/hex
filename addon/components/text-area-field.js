import Component from '@glimmer/component';
import { action } from '@ember/object';

/**
  A handle helper for creating a field that renders
  a label and an textarea

  ```hbs
  <TextAreaField
    @value={{this.model.name}}
    @onChange={{fn (mut this.model.name)}}
  />
  ```

  @class TextAreaFieldComponent
  @public
*/
export default class TextAreaFieldComponent extends Component {
  @action handleInputEvent(e) {
    if (this.args.onChange) {
      this.args.onChange(e.target.value);
    }
  }
}
