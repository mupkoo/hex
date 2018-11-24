import Controller from '@ember/controller';
import { alias } from '@ember-decorators/object/computed';

export default class TextAreaController extends Controller {
  @alias('model') value = '';
}
