import Component from '@ember/component';
import booleanArgument from 'hex/-private/boolean-argument';
import layout from '../templates/components/dropdown';

/**
  An alert component used to display some feedback message

  ```hbs
  <Dropdown as |d|>
    <d.trigger>
      Open
    </d.trigger>

    <d.content>
      <d.button>
        {{svg-jar "ok"}} Save
      </d.button>
    </d.content>
  </Dropdown>
  ```

  @class Dropdown
  @public
*/
export default Component.extend({
  layout,
  tagName: '',

  horizontalPosition: 'auto-right',
  verticalPosition: 'auto',
  _matchTriggerWidth: booleanArgument('matchTriggerWidth'),
  _renderInPlace: booleanArgument('renderInPlace'),
  _disabled: booleanArgument('disabled')
});
