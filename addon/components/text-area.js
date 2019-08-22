import Component from '@ember/component';
import layout from '../templates/components/text-area';

/**
  HTML <textarea> wrapper

  ```hbs
  <TextArea @value="Most awesome" />
  ```

  @class TextArea
  @public
*/
export default class TextAreaComponent extends Component {
  layout = layout;
}
