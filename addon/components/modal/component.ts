import Component, { tracked } from 'sparkles-component';
import { getOwner } from '@ember/application';
import objStr from 'hex/-private/obj-str';
import testRootElementId from 'hex/-private/test-root-element-id';
import { BooleanArg } from 'hex/-private/types';

export interface ModalArgs {
  small?: BooleanArg;
  large?: BooleanArg;
  preventBlanketClose?: BooleanArg;
  preventClose?: BooleanArg;
  renderInPlace?: BooleanArg;
  onClose: () => {};
}

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
export default class Modal extends Component<ModalArgs> {
  @tracked('args')
  get classNames(): string {
    return objStr({
      'modal-sm': this.args.small,
      'modal-lg': this.args.large
    });
  }

  @tracked('args')
  get preventBlanketClose(): boolean {
    return this.args.preventBlanketClose || this.args.preventBlanketClose === '';
  }

  @tracked('args')
  get preventClose(): boolean {
    return this.args.preventClose || this.args.preventClose === '';
  }

  @tracked('args')
  get renderInPlace(): boolean {
    return this.args.renderInPlace || this.args.renderInPlace === '';
  }

  get destinationElement(): HTMLElement {
    return document.getElementById(this.destinationElementId) as HTMLElement;
  }

  handleBlanketClick(): void {
    if (!this.preventBlanketClose) {
      this.close();
    }
  }

  close(): void {
    if (!this.preventClose) {
      this.args.onClose();
    }
  }

  stopModalBodyPropagation(e: TouchEvent | MouseEvent): boolean {
    e.stopPropagation();
    return false;
  }

  didInsertElement(): void {
    document.body.classList.add('has-modal');
  }

  destroy(): void {
    document.body.classList.remove('has-modal');
  }

  private get destinationElementId(): string {
    let config = getOwner(this).resolveRegistration('config:environment');

    return testRootElementId(config) || 'hex-modal-parent';
  }
}
