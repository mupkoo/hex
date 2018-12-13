import Component from '@ember/component';
import layout from '../templates/components/card-body';

/**
  A body component for the card
  ```hbs
  <Card>
    <CardBody>Most awesome card</CardBody>
  </Card>
  ```
  @class CardBody
  @public
*/
export default Component.extend({
  layout,
  tagName: ''
});
