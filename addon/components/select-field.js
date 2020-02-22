import Component from '@glimmer/component';
import { action } from '@ember/object';

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
  get options() {
    return this.args.options.map(([value, label]) => ({
      value,
      label,
      selected: value === this.args.selected
    }));
  }

  @action handleChange(e) {
    if (this.args.onChange) {
      this.args.onChange(e.target.value);
    }
  }
}
