import Component from '@glimmer/component';
import { getOwner } from '@ember/application';
import { action } from '@ember/object';
import booleanArgument from 'hex/-private/boolean-argument';
import objStr from 'hex/-private/obj-str';
import testRootElementId from 'hex/-private/test-root-element-id';

/**
  A component that covers the underlying UI for a layered component.

  ```hbs
  <Blanket @isTinted @canClickThrough></Blanket>
  ```

  @class Blanket
  @public
*/
export default class BlanketComponent extends Component {
  @booleanArgument('renderInPlace') renderInPlace;

  get classNames() {
    return objStr({
      'blanket-tinted': this.args.isTinted,
      'blanket-click-through': this.args.canClickThrough,
    });
  }

  get targetElement() {
    let config = getOwner(this).resolveRegistration('config:environment');
    let id = testRootElementId(config) || 'hex-blanket-parent';

    return document.getElementById(id);
  }

  @action
  handleClick(e) {
    if (e.currentTarget === e.target && this.args.onClick) {
      this.args.onClick();
    }
  }

  @action
  addClassNameToBody() {
    document.body.classList.add('has-blanket');
  }

  @action
  removeClassNameFromBody() {
    document.body.classList.remove('has-blanket');
  }
}
