import Component from '@ember/component';
import booleanArgument from 'hex/-private/boolean-argument';
import layout from '../templates/components/dropdown';

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
  layout = layout;
  tagName = '';

  horizontalPosition = 'auto-right';
  verticalPosition = 'auto';
  @booleanArgument('matchTriggerWidth') _matchTriggerWidth;
  @booleanArgument('renderInPlace') _renderInPlace;
  @booleanArgument('disabled') _disabled;
}
