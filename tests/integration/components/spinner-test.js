import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: Spinner', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders an SVG with default size of 24', async function (assert) {
    await render(hbs`<Spinner />`);

    assert.dom('svg').hasAttribute('width', '24');
    assert.dom('svg').hasAttribute('height', '24');
  });

  test('it assigns the given HTML attributes', async function (assert) {
    await render(hbs`<Spinner data-test-id="23" />`);

    assert.dom('svg').hasAttribute('data-test-id', '23');
  });

  test('it uses the passed size', async function (assert) {
    await render(hbs`<Spinner @size=48 />`);

    assert.dom('svg').hasAttribute('width', '48');
    assert.dom('svg').hasAttribute('height', '48');
  });

  test('it adds "inverted" class if @inverted is set', async function (assert) {
    await render(hbs`<Spinner @inverted />`);

    assert.dom('svg').hasClass('inverted');
  });

  test('it adds "inverted" class if @inverted is true', async function (assert) {
    await render(hbs`<Spinner @inverted={{true}} />`);

    assert.dom('svg').hasClass('inverted');
  });
});
