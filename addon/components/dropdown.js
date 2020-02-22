import Component from '@glimmer/component';
import booleanArgument from 'hex/-private/boolean-argument';

/**
  An alert component used to display some feedback message

  ```hbs
  <Dropdown as |d|>
    <d.Trigger>
      Open
    </d.Trigger>

    <d.Content>
      <d.button>
        {{svg-jar "ok"}} Save
      </d.button>
    </d.Content>
  </Dropdown>
  ```

  @class Dropdown
  @public
*/
export default class ModalBodyComponent extends Component {
  @booleanArgument('matchTriggerWidth') matchTriggerWidth;
  @booleanArgument('renderInPlace') renderInPlace;
  @booleanArgument('disabled') disabled;

  get horizontalPosition() {
    return this.args.horizontalPosition || 'auto-right';
  }

  get verticalPosition() {
    return this.args.verticalPosition || 'auto';
  }
}
