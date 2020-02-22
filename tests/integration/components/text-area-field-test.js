import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { fillIn, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: TextAreaField', function (hooks) {
  setupRenderingTest(hooks);

  test('it render a label if the @label is passed', async function (assert) {
    await render(hbs`<TextAreaField @label="Awesome textarea" />`);

    assert.dom('label').hasText('Awesome textarea');
  });

  test('it does not render label if one is not provided', async function (assert) {
    await render(hbs`<TextAreaField />`);

    assert.dom('label').doesNotExist();
  });

  test('it sets the for and id attribute of the label and the textarea', async function (assert) {
    await render(hbs`<TextAreaField @label="Awesome" />`);

    let id = this.element.querySelector('textarea').id;

    assert.ok(id);
    assert.dom('label').hasAttribute('for', id);
  });

  test('it displays hint message if there is a @hint prop', async function (assert) {
    await render(hbs`<TextAreaField @hint="The field is required" />`);

    assert.dom('.field-hint').hasText('The field is required');
  });

  test('it displays an error message if there is an @error prop', async function (assert) {
    await render(hbs`<TextAreaField @error="The field is required" />`);

    assert.dom('.field.invalid').exists();
    assert.dom('.field-error').hasText('The field is required');
  });

  test('it triggers the passed @onChange action on textarea', async function (assert) {
    this.onChange = (value) => assert.step(value);

    await render(hbs`<TextAreaField @onChange={{this.onChange}} />`);

    await fillIn('textarea', 'Most gracious');

    assert.verifySteps(['Most gracious']);
  });

  test('it does not mutate the @value if @onChange is provided', async function (assert) {
    this.value = 'OG';
    this.onChange = (value) => assert.step(value);

    await render(hbs`<TextAreaField @value={{this.value}} @onChange={{this.onChange}} />`);

    await fillIn('textarea', 'Rip off');

    assert.verifySteps(['Rip off']);
    assert.equal(this.value, 'OG');
  });

  test('it passes the attributes to the textarea', async function (assert) {
    await render(hbs`<TextAreaField data-test-textarea rows="5" required={{true}} />`);

    assert.dom('textarea').hasAttribute('data-test-textarea');
    assert.dom('textarea').hasAttribute('rows', '5');
    assert.dom('textarea').hasAttribute('required');
  });

  test('it works using the normal value and a modifier', async function (assert) {
    this.value = 'initial value';
    this.onInput = (e) => this.set('value', e.target.value);

    await render(hbs`<TextAreaField value={{this.value}} {{on "input" this.onInput}} />`);

    assert.dom('textarea').hasValue(this.value);

    await fillIn('textarea', 'New value');

    assert.dom('textarea').hasValue('New value');
    assert.equal(this.value, 'New value');
  });
});
