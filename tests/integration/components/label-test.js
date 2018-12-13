import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: Label', function (hooks) {
  setupRenderingTest(hooks);

  test('it yields the provided block', async function (assert) {
    this.message = 'The system only dreams in total darkness';

    await render(hbs`<Label>{{this.message}}</Label>`);

    assert.dom('label').hasText(this.message);
  });

  test('it passes the given @for attribute', async function (assert) {
    await render(hbs`<Label @for="awesome" />`);

    assert.dom('label').hasAttribute('for', 'awesome');
  });

  test('it assigns the given HTML attributes', async function (assert) {
    await render(hbs`<Label for="for-attribute" data-test-id aria-label="Sweet">Awesome</Label>`);

    assert.dom('label').hasAttribute('for', 'for-attribute');
    assert.dom('label[data-test-id]').exists();
    assert.dom('label').hasAttribute('aria-label', 'Sweet');
  });
});
