import Component from '@ember/component';
import layout from '../templates/components/card-actions';

/**
  A component used as a footer for the Card component.
  Useful for adding some actions to it.
  ```hbs
  <Card>
    <CardActions>
      <Button @primary>Accept</Button>
    </CardActions>
  </Card>
  ```
  @class CardActions
  @public
*/
export default class CardActionsComponent extends Component {
  layout = layout;
  tagName = '';
}
