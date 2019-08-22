import Component from '@ember/component';
import { computed } from '@ember/object';
import objStr from 'hex/-private/obj-str';
import layout from '../templates/components/spinner';

/**
  A component that displays a spinning icon to show a loading state.
  ```hbs
  <Spinner />
  ```
  @class Spinner
  @public
*/
export default class SpinnerComponent extends Component {
  layout = layout;
  tagName = '';

  size = 24;

  @computed('inverted')
  get _classNames() {
    return objStr({
      inverted: this.inverted
    });
  }
}
