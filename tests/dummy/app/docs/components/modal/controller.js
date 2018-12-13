import Controller from '@ember/controller';

export default Controller.extend({
  isModalVisible: false,
  isSmall: false,
  isLarge: false,

  // BEGIN-SNIPPET modal-example.ts
  showModal() {
    this.setProperties({ isModalVisible: true, isSmall: false, isLarge: false });
  },

  showSmallModal() {
    this.setProperties({ isModalVisible: true, isSmall: true, isLarge: false });
  },

  showLargeModal() {
    this.setProperties({ isModalVisible: true, isSmall: false, isLarge: true });
  }

  // END-SNIPPET
});
