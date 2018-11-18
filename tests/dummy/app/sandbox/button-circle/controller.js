import Controller from '@ember/controller';

export default Controller.extend({
  buttons: Object.freeze([
    'default',
    'primary',
    'success',
    'danger',
    'warning',
    'subtle'
  ])
});
