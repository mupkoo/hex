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
export default Component.extend({
  layout,
  tagName: ''
});
