// BEGIN-SNIPPET spinner-button-example.js
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class SpinnerButtonController extends Controller {
  isLoading = true;

  @action toggleState() {
    this.set('isLoading', !this.isLoading);
  }
}

// END-SNIPPET
