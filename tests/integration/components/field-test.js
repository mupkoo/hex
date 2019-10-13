import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: Field', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a label if the @label is passed', async function (assert) {
    await render(hbs`<Field @label="Awesome input" />`);

    assert.dom('label').hasText('Awesome input');
  });

  test('it does not render label if one is not provided', async function (assert) {
    await render(hbs`<Field />`);

    assert.dom('label').doesNotExist();
  });

  test('it sets the "for" attribute of the label and yields the id to the block', async function (assert) {
    await render(hbs`
      <Field @label="Awesome" as |id|>
        <span id="the-id">{{ id }}</span>
      </Field>
    `);

    let id = this.element.querySelector('label').getAttribute('for');

    assert.ok(id);
    assert.dom('#the-id').hasText(id);
  });

  test('it renders a hint if there is @hint prop passed', async function (assert) {
    await render(hbs`<Field @hint="Please fill in the field" />`);

    assert.dom('.field-hint').hasText('Please fill in the field');
  });

  test('it renders an error message if there is @error prop passed', async function (assert) {
    this.error = null;

    await render(hbs`<Field @error={{this.error}} />`);

    assert.dom('.field-error').doesNotExist();

    this.set('error', 'Username is taken');

    assert.dom('.field-error').hasText(this.error);
  });

  test('it sets the "invalid" flag of the field if there is an error', async function (assert) {
    this.error = null;

    await render(hbs`<Field @error={{this.error}} data-test-field />`);

    assert.dom('[data-test-field]').doesNotHaveClass('invalid');

    this.set('error', 'Username is taken');

    assert.dom('[data-test-field]').hasClass('invalid');
  });
});
