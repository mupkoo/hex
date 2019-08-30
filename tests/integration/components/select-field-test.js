import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { fillIn, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: SelectField', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.options = [
      ['jedi', 'Jedi Knight'],
      ['sith', 'Sith Lord']
    ];
  });

  test('it render a label if the @label is passed', async function (assert) {
    await render(hbs`<SelectField @label="Awesome select" @options={{this.options}} />`);

    assert.dom('label').hasText('Awesome select');
  });

  test('it does not render label if one is not provided', async function (assert) {
    await render(hbs`<SelectField @options={{this.options}} />`);

    assert.dom('label').doesNotExist();
  });

  test('it sets the for and id attribute of the label and the select', async function (assert) {
    await render(hbs`<SelectField @label="Awesome" @options={{this.options}} />`);

    let id = this.element.querySelector('select').id;

    assert.ok(id);
    assert.dom('label').hasAttribute('for', id);
  });

  test('it renders all the passed @options', async function (assert) {
    await render(hbs`<SelectField @options={{this.options}} />`);

    assert.dom('option').exists({ count: 2 });

    let options = this.element.querySelectorAll('option');
    assert.dom(options[0]).hasValue(this.options[0][0]);
    assert.dom(options[0]).hasText(this.options[0][1]);
    assert.dom(options[1]).hasValue(this.options[1][0]);
    assert.dom(options[1]).hasText(this.options[1][1]);
  });

  test('it sets the selected option', async function (assert) {
    await render(hbs`<SelectField @selected="sith" @options={{this.options}} />`);

    assert.dom('option:checked').exists({ count: 1 });
    assert.dom('option:checked').hasValue('sith');
  });

  test('it mutates the passed @selected', async function (assert) {
    this.selected = 'jedi';

    await render(hbs`<SelectField @selected={{this.selected}} @options={{this.options}} />`);

    await fillIn('select', 'sith');

    assert.equal(this.selected, 'sith');
  });

  test('it triggers the passed @onChange action on select', async function (assert) {
    this.onChange = (selected) => assert.step(selected);

    await render(hbs`<SelectField @options={{this.options}} @onChange={{this.onChange}} />`);

    await fillIn('select', 'sith');

    assert.verifySteps(['sith']);
  });

  test('it does not mutate the @selected if @onChange is provided', async function (assert) {
    this.selected = 'sith';
    this.onChange = (selected) => assert.step(selected);

    await render(hbs`<SelectField @selected={{this.selected}} @options={{this.options}} @onChange={{this.onChange}} />`);

    await fillIn('select', 'jedi');

    assert.verifySteps(['jedi']);
    assert.equal(this.selected, 'sith');
  });

  test('it passes the attributes to the select', async function (assert) {
    await render(hbs`<SelectField data-test-select disabled={{true}} required={{true}} @options={{this.options}} />`);

    assert.dom('select').hasAttribute('data-test-select');
    assert.dom('select').hasAttribute('disabled');
    assert.dom('select').hasAttribute('required');
  });

  test('it works using the normal value and a modifier', async function (assert) {
    this.selected = 'jedi';
    this.onChange = (e) => this.set('selected', e.target.value);

    await render(hbs`<SelectField selected={{this.selected}} {{on "change" this.onChange}} @options={{this.options}} />`);

    assert.dom('select').hasValue(this.selected);

    await fillIn('select', 'sith');

    assert.dom('select').hasValue('sith');
    assert.equal(this.selected, 'sith');
  });
});
