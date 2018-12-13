import Component from '@ember/component';
import { computed } from '@ember/object';
import objStr from 'hex/-private/obj-str';
import layout from '../templates/components/spinner';

/**
  A component that displays a spinning icon to show a loading state.
  ```hbs
  <Spinner />
  ```
  @class Spinner
  @public
*/
export default Component.extend({
  layout,
  tagName: '',

  size: 24,

  _classNames: computed('inverted', function () {
    return objStr({
      inverted: this.inverted
    });
  })
});
