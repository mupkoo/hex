import Route from '@ember/routing/route';

export default class TextAreaRoute extends Route {
  model() {
    return 'The universe is almost 14 billion years old!';
  }
}
