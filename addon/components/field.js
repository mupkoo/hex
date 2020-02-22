import Component from '@glimmer/component';
import guid from '../-private/guid';

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
    return 'hex-' + guid();
  }
}
