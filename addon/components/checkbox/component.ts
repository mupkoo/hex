import Component from 'sparkles-component';
import { guidFor } from '@ember/object/internals';

interface CheckboxArgs {
  id?: string;
}

/**
  HTML <input type="checkbox"> wrapper

  ```hbs
  <Checkbox />
  ```

  @class Checkbox
  @public
*/
export default class Checkbox extends Component<CheckboxArgs> {
  get id() {
    return guidFor(this);
  }
}
