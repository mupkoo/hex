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
  @action handleInputEvent(e) {
    this.setValue(e.target.value);
  }

  @action clear() {
    this.setValue('');
  }

  setValue(value) {
    if (this.args.onChange) {
      this.args.onChange(value);
    }
  }
}
