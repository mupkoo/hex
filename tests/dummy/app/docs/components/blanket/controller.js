import Controller from '@ember/controller';

export default class BlanketController extends Controller {
  canClickThrough = true;
  showBlanket = false;

  // BEGIN-SNIPPET blanket-example.ts
  toggleBlanket() {
    this.set('canClickThrough', !this.canClickThrough);
    this.set('showBlanket', !this.showBlanket);
  }

  // END-SNIPPET
}
