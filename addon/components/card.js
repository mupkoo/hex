import Component from '@ember/component';
import layout from '../templates/components/card';

/**
  A component for displaying content in a separate section.
  ```hbs
  <Card>Most awesome card</Card>
  ```
  @class Card
  @public
*/
export default class CardComponent extends Component {
  layout = layout;
  tagName = '';
}
