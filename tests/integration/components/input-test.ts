import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: Input', function (hooks) {
  setupRenderingTest(hooks);

  test('it passes the given @id attribute', async function (assert) {
    await render(hbs`<Input @id="awesome" @value="" />`);

    assert.dom('input').hasAttribute('id', 'awesome');
  });

  test('it assigns the given HTML attributes', async function (assert) {
    await render(hbs`<Input value="one" data-test-id />`);

    assert.dom('input').hasValue('one');
    assert.dom('input[data-test-id]').exists();
  });
});
