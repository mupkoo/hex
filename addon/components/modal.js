import Component from '@glimmer/component';
import { action } from '@ember/object';
import { getOwner } from '@ember/application';
import booleanArgument from 'hex/-private/boolean-argument';
import objStr from 'hex/-private/obj-str';
import testRootElementId from 'hex/-private/test-root-element-id';

/**
  A component that displays content in a layer blocking the interaction with the page.

  ```hbs
  <Modal @size="sm" @onClose={{action this.closeModal}} as |m|>
    <m.Header>
      Create Record
    </m.Header>

    <m.Body>
      Awesome
    </m.Body>

    <m.Footer>
      <Button @primary type="submit">Save</Button>
    </m.Footer>
  </Modal>
  ```

  @class Modal
  @public
*/
export default class ModalComponent extends Component {
  @booleanArgument('preventBlanketClose') preventBlanketClose;
  @booleanArgument('preventClose') preventClose;
  @booleanArgument('renderInPlace') renderInPlace;

  get classNames() {
    return objStr({
      'modal-sm': this.args.small,
      'modal-lg': this.args.large
    });
  }

  get destinationElement() {
    return document.getElementById(this._getDestinationElementId());
  }

  _getDestinationElementId() {
    let config = getOwner(this).resolveRegistration('config:environment');
    return testRootElementId(config) || 'hex-modal-parent';
  }

  addClassNameToBody() {
    document.body.classList.add('has-modal');
  }

  removeClassNameFromBody() {
    document.body.classList.remove('has-modal');
  }

  @action handleBlanketClick() {
    if (this.isDestroyed || this.isDestroying) return;

    if (!this.preventBlanketClose) {
      this.close();
    }
  }

  @action close() {
    if (!this.preventClose) {
      this.args.onClose();
    }
  }

  @action stopModalBodyPropagation(e) {
    e.stopPropagation();
    return false;
  }
}
