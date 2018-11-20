import Controller from '@ember/controller';

export default class BlanketController extends Controller {
  canClickThrough = true;
  showBlanket = false;

  // BEGIN-SNIPPET blanket-example.ts
  toggleBlanket() {
    this.toggleProperty('canClickThrough');
    this.toggleProperty('showBlanket');
  }
  // END-SNIPPET
}
