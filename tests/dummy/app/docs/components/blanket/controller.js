import Controller from '@ember/controller';

export default Controller.extend({
  canClickThrough: true,
  showBlanket: false,

  // BEGIN-SNIPPET blanket-example.ts
  toggleBlanket() {
    this.toggleProperty('canClickThrough');
    this.toggleProperty('showBlanket');
  }

  // END-SNIPPET
});
