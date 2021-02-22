// BEGIN-SNIPPET button-spinner-example.js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ButtonController extends Controller {
  @tracked isLoading = true;

  @action toggleState() {
    this.isLoading = !this.isLoading;
  }
}

// END-SNIPPET
