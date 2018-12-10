import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  docsRoute(this, function () {
    this.route('colors');

    this.route('components', function () {
      this.route('alert');
      this.route('blanket');
      this.route('button');
      this.route('card');
      this.route('dropdown');
      this.route('empty-state');
      this.route('modal');
      this.route('spinner');

      this.route('checkbox');
      this.route('power-select');
      this.route('field');
      this.route('form');
      this.route('input');
      this.route('label');
      this.route('select');
      this.route('text-area');
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

export default Router;
