import Ember from 'ember';
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import guid from 'hex/-private/guid';

export default class NotifyService extends Service {
  @tracked messages = [];

  /**
    Push a message to the notify massages

    @param {string} text The notification text
    @param {Object} options The options for the notification
    @param {string} options.info The type of the notification
    @param {Boolean} options.isSticky Should the notification be sticky
    @param {number} options.closeAfter Close after in milliseconds
    @returns {void}
  */
  show(text, options = {}) {
    let { type = 'info', isSticky = Ember.testing, closeAfter = 2500 } = options;
    let message = { id: guid(), text, type, isSticky, closeAfter };

    this.messages = [...this.messages, message];
  }

  /**
    Remove a message from the messages

    @param {Object} messageToBeRemoved The notification message to be removed
    @returns {void}
  */
  remove(messageToBeRemoved) {
    this.messages = this.messages.filter((message) => messageToBeRemoved != message);
  }

  /**
    Alias for showing an info message

    @param {string} text The notification text
    @param {Object} options The options for the notification
    @returns {void}
  */
  info(text, options = {}) {
    this.show(text, { ...options, type: 'info' });
  }

  /**
    Alias for showing a success message

    @param {string} text The notification text
    @param {Object} options The options for the notification
    @returns {void}
  */
  success(text, options = {}) {
    this.show(text, { ...options, type: 'success' });
  }

  /**
    Alias for showing a danger message

    @param {string} text The notification text
    @param {Object} options The options for the notification
    @returns {void}
  */
  danger(text, options = {}) {
    this.show(text, { ...options, type: 'danger' });
  }
}
