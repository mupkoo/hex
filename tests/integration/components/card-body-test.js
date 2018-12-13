import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: CardBody', function (hooks) {
  setupRenderingTest(hooks);

  test('it yields the provided block', async function (assert) {
    this.message = 'The system only dreams in total darkness';

    await render(hbs`<CardBody>{{this.message}}</CardBody>`);

    assert.dom('.card-body').hasText(this.message);
  });

  test('it assigns the given HTML attributes', async function (assert) {
    await render(hbs`<CardBody data-test-id aria-label="Sweet">Awesome</CardBody>`);

    assert.dom('.card-body[data-test-id]').exists();
    assert.dom('.card-body').hasAttribute('aria-label', 'Sweet');
  });
});
