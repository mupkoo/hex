import Component from '@ember/component';
import layout from '../templates/components/input';

/**
  HTML <input> wrapper

  ```hbs
  <Input @value="Awesome" />
  ```

  @class Input
  @public
*/
export default class InputComponent extends Component {
  layout = layout;
  tagName = '';
}
