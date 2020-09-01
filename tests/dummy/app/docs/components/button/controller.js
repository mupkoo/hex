// BEGIN-SNIPPET button-spinner-example.js
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ButtonController extends Controller {
  isLoading = true;

  @action toggleState() {
    this.set('isLoading', !this.isLoading);
  }
}

// END-SNIPPET
