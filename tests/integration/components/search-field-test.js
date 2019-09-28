import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: SearchField', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a search input', async function (assert) {
    await render(hbs`<SearchField @value="Looking for the force" />`);

    assert.dom('input[type="search"]').hasValue('Looking for the force');
  });

  test('it mutates the passed @value', async function (assert) {
    this.value = 'First';

    await render(hbs`<SearchField @value={{this.value}} />`);

    await fillIn('input', 'Awesome');

    assert.equal(this.value, 'Awesome');
  });

  test('it triggers the passed @onChange action on input', async function (assert) {
    this.onChange = (value) => assert.step(value);

    await render(hbs`<SearchField @onChange={{this.onChange}} />`);

    await fillIn('input', 'Most gracious');

    assert.verifySteps(['Most gracious']);
  });

  test('it does not mutate the @value if @onChange is provided', async function (assert) {
    this.value = 'OG';
    this.onChange = (value) => assert.step(value);

    await render(hbs`<SearchField @value={{this.value}} @onChange={{this.onChange}} />`);

    await fillIn('input', 'Rip off');

    assert.verifySteps(['Rip off']);
    assert.equal(this.value, 'OG');
  });

  test('it passes the attributes to the input', async function (assert) {
    await render(hbs`<SearchField data-test-input type="number" min="1" max="5" required={{true}} />`);

    assert.dom('input').hasAttribute('data-test-input');
    assert.dom('input').hasAttribute('required');
  });

  test('it works using the normal value and a modifier', async function (assert) {
    this.value = 'initial value';
    this.onInput = (e) => this.set('value', e.target.value);

    await render(hbs`<SearchField value={{this.value}} {{on "input" this.onInput}} />`);

    assert.dom('input').hasValue(this.value);

    await fillIn('input', 'New value');

    assert.dom('input').hasValue('New value');
    assert.equal(this.value, 'New value');
  });

  test('it displays a clear button if there is a value', async function (assert) {
    this.value = '';

    await render(hbs`<SearchField @value={{this.value}} />`);

    assert.dom('[data-test-clear-search]').doesNotExist();

    this.set('value', 'The term');
    assert.dom('[data-test-clear-search]').exists();

    this.set('value', '');
    assert.dom('[data-test-clear-search]').doesNotExist();
  });

  test('it clears the value on clicking the clear button', async function (assert) {
    this.value = 'The term';

    await render(hbs`<SearchField @value={{this.value}} />`);

    await click('[data-test-clear-search]');

    assert.equal(this.value, '');
  });
});
