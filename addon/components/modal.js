import Component from '@ember/component';
import { action, computed } from '@ember/object';
import { getOwner } from '@ember/application';
import booleanArgument from 'hex/-private/boolean-argument';
import objStr from 'hex/-private/obj-str';
import testRootElementId from 'hex/-private/test-root-element-id';
import layout from '../templates/components/modal';

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
  layout = layout;
  tagName = '';

  @booleanArgument('preventBlanketClose') _preventBlanketClose;
  @booleanArgument('preventClose') _preventClose;
  @booleanArgument('renderInPlace') _renderInPlace;

  @computed('small', 'large')
  get _classNames() {
    return objStr({
      'modal-sm': this.small,
      'modal-lg': this.large
    });
  }

  get destinationElement() {
    return document.getElementById(this._getDestinationElementId());
  }

  _getDestinationElementId() {
    let config = getOwner(this).resolveRegistration('config:environment');
    return testRootElementId(config) || 'hex-modal-parent';
  }

  didInsertElement() {
    document.body.classList.add('has-modal');
  }

  willDestroyElement() {
    document.body.classList.remove('has-modal');
  }

  @action _handleBlanketClick() {
    if (!this._preventBlanketClose) {
      this._close();
    }
  }

  @action _close() {
    if (!this._preventClose) {
      this.onClose();
    }
  }

  @action _stopModalBodyPropagation(e) {
    e.stopPropagation();
    return false;
  }
}
