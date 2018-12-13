import Component from '@ember/component';
import { computed } from '@ember/object';
import { getOwner } from '@ember/application';
import booleanArgument from 'hex/-private/boolean-argument';
import objStr from 'hex/-private/obj-str';
import testRootElementId from 'hex/-private/test-root-element-id';
import layout from '../templates/components/modal';

/**
  A component that displays content in a layer blocking the interaction with the page.

  ```hbs
  <Modal @size="sm" @onClose={{action this.closeModal}} as |m|>
    <m.header>
      Create Record
    </m.header>

    <m.body>
      Awesome
    </m.body>

    <m.footer>
      <Button @primary type="submit">Save</Button>
    </m.footer>
  </Modal>
  ```

  @class Modal
  @public
*/
export default Component.extend({
  layout,
  tagName: '',

  _preventBlanketClose: booleanArgument('preventBlanketClose'),
  _preventClose: booleanArgument('preventClose'),
  _renderInPlace: booleanArgument('renderInPlace'),

  _classNames: computed('small', 'large', function () {
    return objStr({
      'modal-sm': this.small,
      'modal-lg': this.large
    });
  }),

  destinationElement: computed(function () {
    return document.getElementById(this._getDestinationElementId());
  }),

  _getDestinationElementId() {
    let config = getOwner(this).resolveRegistration('config:environment');
    return testRootElementId(config) || 'hex-modal-parent';
  },

  didInsertElement() {
    document.body.classList.add('has-modal');
  },

  willDestroyElement() {
    document.body.classList.remove('has-modal');
  },

  _handleBlanketClick() {
    if (!this._preventBlanketClose) {
      this._close();
    }
  },

  _close() {
    if (!this._preventClose) {
      this.onClose();
    }
  },

  _stopModalBodyPropagation(e) {
    e.stopPropagation();
    return false;
  }
});
