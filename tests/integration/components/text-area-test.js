import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: TextArea', function (hooks) {
  setupRenderingTest(hooks);

  test('it assigns the passed value', async function (assert) {
    this.value = 'The system only dreams in total darkness';

    await render(hbs`<TextArea @value={{this.value}} />`);

    assert.dom('textarea').hasValue(this.value);
  });

  test('it passes the given @id attribute', async function (assert) {
    await render(hbs`<TextArea @id="awesome" @value="" />`);

    assert.dom('textarea').hasAttribute('id', 'awesome');
  });

  test('it assigns the given HTML attributes', async function (assert) {
    await render(hbs`<TextArea @value="" data-test-id rows="5" />`);

    assert.dom('textarea[data-test-id]').exists();
    assert.dom('textarea').hasAttribute('rows', '5');
  });
});
