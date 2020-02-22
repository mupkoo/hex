import Component from '@glimmer/component';
import objStr from 'hex/-private/obj-str';

/**
  A component that covers the underlying UI for a layered component.

  ```hbs
  <Blanket @isTinted @canClickThrough></Blanket>
  ```

  @class Blanket
  @public
*/
export default class BlanketComponent extends Component {
  get classNames() {
    return objStr({
      'blanket-tinted': this.args.isTinted,
      'blanket-click-through': this.args.canClickThrough
    });
  }
}
