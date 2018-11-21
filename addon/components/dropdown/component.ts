import Component, { tracked } from 'sparkles-component';
import { BooleanArg } from 'hex/-private/types';

export interface DropdownArgs {
  horizontalPosition?: 'auto' | 'auto-right' | 'left' | 'center' | 'right';
  verticalPosition?: 'auto' | 'above' | 'below';
  matchTriggerWidth?: BooleanArg;
  renderInPlace?: BooleanArg;
  disabled?: BooleanArg;
}

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
export default class Dropdown extends Component<DropdownArgs> {
  @tracked('args')
  get horizontalPosition() {
    return this.args.horizontalPosition || 'auto-right';
  }

  @tracked('args')
  get verticalPosition() {
    return this.args.verticalPosition || 'auto';
  }

  @tracked('args')
  get matchTriggerWidth() {
    return this.args.matchTriggerWidth || this.args.matchTriggerWidth === '';
  }

  @tracked('args')
  get renderInPlace() {
    return this.args.renderInPlace || this.args.renderInPlace === '';
  }

  @tracked('args')
  get disabled() {
    return this.args.disabled || this.args.disabled === '';
  }
};
