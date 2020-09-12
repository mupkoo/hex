import Controller from '@ember/controller';

export default Controller.extend({
  buttons: Object.freeze([
    'default',
    'outline-default',
    'primary',
    'outline-primary',
    'success',
    'outline-success',
    'danger',
    'outline-danger',
    'warning',
    'outline-warning',
    'subtle',
  ]),
});
