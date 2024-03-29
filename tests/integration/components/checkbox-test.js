import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: Checkbox', function (hooks) {
  setupRenderingTest(hooks);

  test('it sets the label of the checkbox', async function (assert) {
    await render(hbs`<Checkbox @label="Remember?" />`);

    assert.dom('label').hasText('Remember?');
  });

  test('it yields the given block instead of rendering the label if passed', async function (assert) {
    await render(hbs`
      <Checkbox @label="Remember?">
        This is the <strong>block</strong>
      </Checkbox>
    `);

    assert.dom('label').hasText('This is the block');
    assert.dom('label strong').hasText('block');
  });

  test('it sets the for and id attribute of the label and the input', async function (assert) {
    await render(hbs`<Checkbox @label="Awesome" />`);

    let id = this.element.querySelector('input').id;

    assert.ok(id);
    assert.dom('label').hasAttribute('for', id);
  });

  test('it triggers the passed @onChange action on input', async function (assert) {
    let checked;
    this.onChange = (value) => {
      checked = value;
    };

    await render(hbs`<Checkbox @checked={{false}} @onChange={{this.onChange}} />`);

    await click('input');

    assert.true(checked);
  });

  test('it does not mutate the @checked if @onChange is provided', async function (assert) {
    let checked;
    this.checked = true;
    this.onChange = (value) => {
      checked = value;
    };

    await render(hbs`<Checkbox @checked={{this.checked}} @onChange={{this.onChange}} />`);

    await click('input');

    assert.false(checked);
    assert.true(this.checked);
  });

  test('it passes the attributes to the input', async function (assert) {
    await render(hbs`<Checkbox data-test-input required={{true}} />`);

    assert.dom('input').hasAttribute('data-test-input');
    assert.dom('input').hasAttribute('required');
  });

  test('it works using the normal value and a modifier', async function (assert) {
    this.checked = true;
    this.onChange = (e) => this.set('checked', e.target.checked);

    await render(hbs`<Checkbox checked={{this.checked}} {{on "change" this.onChange}} />`);

    assert.dom('input').isChecked();

    await click('input');

    assert.dom('input').isNotChecked();
    assert.false(this.checked);
  });
});
