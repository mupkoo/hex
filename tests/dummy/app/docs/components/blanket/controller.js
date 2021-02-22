import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class BlanketController extends Controller {
  @tracked canClickThrough = true;
  @tracked showBlanket = false;

  // BEGIN-SNIPPET blanket-example.ts
  toggleBlanket() {
    this.canClickThrough = !this.canClickThrough;
    this.showBlanket = !this.showBlanket;
  }

  // END-SNIPPET
}
