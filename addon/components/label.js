import Component from '@ember/component';
import layout from '../templates/components/label';

/**
  HTML <label> wrapper

  ```hbs
  <Label>Most awesome card</Label>
  ```

  @class Label
  @public
*/
export default class LabelComponent extends Component {
  layout = layout;
  tagName = '';
}
