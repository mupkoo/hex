import Component from '@ember/component';
import layout from '../templates/components/checkbox';

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
}
