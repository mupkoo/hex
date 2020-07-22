import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

/**
  Base field component

  ```hbs
  <Field @label={{this.model.name}} as |id|>
    <input id={{id}} value="Awesome">
  </Field>
  ```

  @class Field
  @public
*/
export default class FieldComponent extends Component {
  get guid() {
    return guidFor(this);
  }
}
