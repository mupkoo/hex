import Component, { tracked } from 'sparkles-component';
import objStr from 'hex/-private/obj-str';
import { BooleanArg } from 'hex/-private/types';

export interface SpinnerArgs {
  size?: number;
  inverted?: BooleanArg;
}

/**
  A component that displays a spinning icon to show a loading state.

  ```hbs
  <Spinner />
  ```

  @class Spinner
  @public
*/
export default class Spinner extends Component<SpinnerArgs> {
  @tracked('args')
  get classNames() {
    return objStr({
      'inverted': this.args.inverted
    });
  }

  @tracked('args')
  get size() {
    return this.args.size || 24;
  }
}
