// BEGIN-SNIPPET modal-example.js
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ModalController extends Controller {
  isModalVisible = false;
  isSmall = false;
  isLarge = false;

  @action showModal() {
    this.setProperties({ isModalVisible: true, isSmall: false, isLarge: false });
  }

  @action showSmallModal() {
    this.setProperties({ isModalVisible: true, isSmall: true, isLarge: false });
  }

  @action showLargeModal() {
    this.setProperties({ isModalVisible: true, isSmall: false, isLarge: true });
  }
}

// END-SNIPPET
