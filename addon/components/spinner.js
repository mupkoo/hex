import Component from '@glimmer/component';
import objStr from 'hex/-private/obj-str';

/**
  A component that displays a spinning icon to show a loading state.
  ```hbs
  <Spinner />
  ```
  @class Spinner
  @public
*/
export default class SpinnerComponent extends Component {
  get classNames() {
    return objStr({
      inverted: this.args.inverted
    });
  }

  get size() {
    return this.args.size || 24;
  }
}
