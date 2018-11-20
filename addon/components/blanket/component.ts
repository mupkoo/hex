import Component, { tracked } from 'sparkles-component';
import { BooleanArg } from 'hex/-private/types';
import objStr from 'hex/-private/obj-str';

export interface BlanketArgs {
  isTinted?: BooleanArg;
  canClickThrough?: BooleanArg;
}

/**
  A component that covers the underlying UI for a layered component.

  ```hbs
  <Blanket @isTinted @canClickThrough></Blanket>
  ```

  @class Blanket
  @public
*/
export default class Blanket extends Component<BlanketArgs> {
  @tracked('args')
  get classNames() {
    return objStr({
      'blanket-tinted': this.args.isTinted,
      'blanket-click-through': this.args.canClickThrough,
    });
  }
}
