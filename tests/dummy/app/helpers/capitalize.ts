import { helper } from '@ember/component/helper';
import { capitalize as emberCapitalize } from '@ember/string';

export function capitalize([string]) {
  return emberCapitalize(string);
}

export default helper(capitalize);
