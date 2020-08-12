import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

export default class Router extends AddonDocsRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  docsRoute(this, function () {
    this.route('colors');

    this.route('components', function () {
      this.route('alert');
      this.route('badge');
      this.route('blanket');
      this.route('button');
      this.route('card');
      this.route('dropdown');
      this.route('empty-state');
      this.route('modal');
      this.route('spinner');

      this.route('checkbox');
      this.route('field');
      this.route('input-field');
      this.route('search-field');
      this.route('select-field');
      this.route('text-area-field');
      this.route('power-select-field');
      this.route('spinner-button');
    });

    this.route('services', function () {
      this.route('dialog');
      this.route('notify');
    });
  });

  this.route('sandbox', function () {
    this.route('alert');
    this.route('button');
    this.route('button-circle');
    this.route('card');
    this.route('fields');
    this.route('input');
    this.route('modal');
    this.route('spinner');
  });

  this.route('not-found', { path: '/*path' });
});
