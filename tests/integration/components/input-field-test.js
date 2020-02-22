import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { fillIn, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: InputField', function (hooks) {
  setupRenderingTest(hooks);

  test('it render a label if the @label is passed', async function (assert) {
    await render(hbs`<InputField @label="Awesome input" />`);

    assert.dom('label').hasText('Awesome input');
  });

  test('it does not render label if one is not provided', async function (assert) {
    await render(hbs`<InputField />`);

    assert.dom('label').doesNotExist();
  });

  test('it sets the for and id attribute of the label and the input', async function (assert) {
    await render(hbs`<InputField @label="Awesome" />`);

    let id = this.element.querySelector('input').id;

    assert.ok(id);
    assert.dom('label').hasAttribute('for', id);
  });

  test('it displays hint message if there is a @hint prop', async function (assert) {
    await render(hbs`<InputField @hint="The field is required" />`);

    assert.dom('.field-hint').hasText('The field is required');
  });

  test('it displays an error message if there is an @error prop', async function (assert) {
    await render(hbs`<InputField @error="The field is required" />`);

    assert.dom('.field.invalid').exists();
    assert.dom('.field-error').hasText('The field is required');
  });

  test('it triggers the passed @onChange action on input', async function (assert) {
    this.onChange = (value) => assert.step(value);

    await render(hbs`<InputField @onChange={{this.onChange}} />`);

    await fillIn('input', 'Most gracious');

    assert.verifySteps(['Most gracious']);
  });

  test('it does not mutate the @value if @onChange is provided', async function (assert) {
    this.value = 'OG';
    this.onChange = (value) => assert.step(value);

    await render(hbs`<InputField @value={{this.value}} @onChange={{this.onChange}} />`);

    await fillIn('input', 'Rip off');

    assert.verifySteps(['Rip off']);
    assert.equal(this.value, 'OG');
  });

  test('it passes the attributes to the input', async function (assert) {
    await render(hbs`<InputField data-test-input type="number" min="1" max="5" required={{true}} />`);

    assert.dom('input').hasAttribute('data-test-input');
    assert.dom('input').hasAttribute('type', 'number');
    assert.dom('input').hasAttribute('min', '1');
    assert.dom('input').hasAttribute('max', '5');
    assert.dom('input').hasAttribute('required');
  });

  test('it works using the normal value and a modifier', async function (assert) {
    this.value = 'initial value';
    this.onInput = (e) => this.set('value', e.target.value);

    await render(hbs`<InputField value={{this.value}} {{on "input" this.onInput}} />`);

    assert.dom('input').hasValue(this.value);

    await fillIn('input', 'New value');

    assert.dom('input').hasValue('New value');
    assert.equal(this.value, 'New value');
  });
});
