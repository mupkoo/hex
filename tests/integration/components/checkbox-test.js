import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: Checkbox', function (hooks) {
  setupRenderingTest(hooks);

  test('it sets the label of the checkbox', async function (assert) {
    await render(hbs`<Checkbox @label="Remember?" />`);

    assert.dom('label').hasText('Remember?');
  });

  test('it assigns the same id/for for the input and the label', async function (assert) {
    await render(hbs`<Checkbox />`);

    let id = this.element.querySelector('input').id;
    let forAttribute = this.element.querySelector('label').getAttribute('for');

    assert.equal(id, forAttribute);
  });

  test('it assigns the given HTML attributes', async function (assert) {
    await render(hbs`<Checkbox data-test-id />`);

    assert.dom('input[data-test-id]').exists();
  });
});
