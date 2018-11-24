import Controller from '@ember/controller';
import { alias } from '@ember-decorators/object/computed';

export default class InputController extends Controller {
  @alias('model') value = '';
}
