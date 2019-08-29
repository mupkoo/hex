import Button from './button';
import { or } from '@ember/object/computed';
import layout from '../templates/components/spinner-button';

/**
  A handy button component which can be used to display
  a <Spinner /> component while a given action is running

  ```hbs
  <SpinnerButton @primary @isLoading={{true}}>
    Save
  </SpinnerButton>
  ```

  @class SpinnerButton
  @public
*/
export default class SpinnerButton extends Button {
  layout = layout;

  @or('isLoading', 'disabled') isDisabled;
}
