import Component from '@ember/component';
import { action } from '@ember/object';
import layout from '../templates/components/search-field';

/**
  Styled search field component

  ```hbs
  <SearchField @value={{this.term}} />
  ```

  @class SearchField
  @public
*/
export default class SearchFieldComponent extends Component {
  layout = layout;
  tagName = '';

  @action handleInputEvent(e) {
    this.setValue(e.target.value);
  }

  @action clear() {
    this.setValue('');
  }

  setValue(value) {
    if (this.onChange) {
      this.onChange(value);
    } else {
      this.set('value', value);
    }
  }
}
