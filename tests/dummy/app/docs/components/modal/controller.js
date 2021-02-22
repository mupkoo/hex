// BEGIN-SNIPPET modal-example.js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ModalController extends Controller {
  @tracked isModalVisible = false;
  @tracked isSmall = false;
  @tracked isLarge = false;

  @action showModal() {
    this.isModalVisible = true;
    this.isSmall = false;
    this.isLarge = false;
  }

  @action showSmallModal() {
    this.isModalVisible = true;
    this.isSmall = true;
    this.isLarge = false;
  }

  @action showLargeModal() {
    this.isModalVisible = true;
    this.isSmall = false;
    this.isLarge = true;
  }
}

// END-SNIPPET
