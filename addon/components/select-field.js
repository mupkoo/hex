import Component from '@ember/component';
import { action, computed } from '@ember/object';
import { assert } from '@ember/debug';
import layout from '../templates/components/select-field';
import guid from '../-private/guid';

/**
  A handle helper for creating a field that renders
  a label and an input

  ```hbs
  <SelectField @selected={{this.model.name}} />
  ```

  @class SelectField
  @public
*/
export default class SelectFieldComponent extends Component {
  layout = layout;
  tagName = '';

  init() {
    super.init();
    assert('Must provide @options for the SelectField to work', this.options);
  }

  get uuid() {
    return 'hex-' + guid();
  }

  @computed('options.[]', 'selected')
  get _options() {
    return this.options.map(([value, label]) => ({
      value,
      label,
      selected: value === this.selected
    }));
  }

  @action handleChange(e) {
    let value = e.target.value;

    if (this.onChange) {
      this.onChange(value);
    } else {
      this.set('selected', value);
    }
  }
}
