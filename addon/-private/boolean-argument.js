import { computed } from '@ember/object';

/**
  A handy computed property that is casting
  empty arguments to true

  @param {string} argumentName
  @return {ComputedProperty} computed property that returns true or false depending on the passed argumentName
*/
export default function booleanArgument(argumentName) {
  return computed('args.' + argumentName, function () {
    return this.args[argumentName] || this.args[argumentName] === '';
  });
}
