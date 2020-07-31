import Component from '@glimmer/component';
import { action } from '@ember/object';

/**
  Styled search field component

  ```hbs
  <SearchField @value={{this.term}} />
  ```

  @class SearchField
  @public
*/
export default class SearchFieldComponent extends Component {
  @action
  handleInputEvent(e) {
    this.safeTrigger('onChange', e.target.value);
  }

  @action
  handleSubmit(e) {
    e.preventDefault();

    this.safeTrigger('onSubmit', e.target.querySelector('input').value);
  }

  @action
  clear() {
    this.safeTrigger('onChange', '');
  }

  safeTrigger(callback, value) {
    if (this.args[callback]) this.args[callback](value);
  }
}
