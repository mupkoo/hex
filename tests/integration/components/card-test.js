import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: Card', function (hooks) {
  setupRenderingTest(hooks);

  test('it yields the provided block', async function (assert) {
    this.message = 'The system only dreams in total darkness';

    await render(hbs`<Card>{{this.message}}</Card>`);

    assert.dom('.card').hasText(this.message);
  });

  test('it assigns the given HTML attributes', async function (assert) {
    await render(hbs`<Card data-test-id aria-label="Sweet">Awesome</Card>`);

    assert.dom('.card[data-test-id]').exists();
    assert.dom('.card').hasAttribute('aria-label', 'Sweet');
  });
});
