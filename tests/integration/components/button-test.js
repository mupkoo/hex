import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: Button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a button with default type of "button"', async function (assert) {
    await render(hbs`<Button>Sweet</Button>`);

    assert.dom('button').hasAttribute('type', 'button');
  });

  // TODO: Looks like this is an Ember bug
  // https://github.com/emberjs/ember.js/issues/18232
  // test('it overwrites the default type, if one is given', async function (assert) {
  //   await render(hbs`<Button type="submit">Sweet</Button>`);

  //   assert.dom('button').hasAttribute('type', 'submit');
  // });

  test('it overwrites the default type, if one is given', async function (assert) {
    await render(hbs`<Button @type="submit">Sweet</Button>`);

    assert.dom('button').hasAttribute('type', 'submit');
  });

  test('it adds "btn-primary" class if @primary is set', async function (assert) {
    await render(hbs`<Button @primary>Awesome</Button>`);

    assert.dom('button').hasClass('btn-primary');
    assert.dom('button').doesNotHaveClass('btn-outline-primary');
  });

  test('it adds "btn-primary" class if @primary is true', async function (assert) {
    await render(hbs`<Button @primary={{true}}>Awesome</Button>`);

    assert.dom('button').hasClass('btn-primary');
    assert.dom('button').doesNotHaveClass('btn-outline-primary');
  });

  test('it adds "btn-success" class if @success is set', async function (assert) {
    await render(hbs`<Button @success>Awesome</Button>`);

    assert.dom('button').hasClass('btn-success');
    assert.dom('button').doesNotHaveClass('btn-outline-success');
  });

  test('it adds "btn-success" class if @success is true', async function (assert) {
    await render(hbs`<Button @success={{true}}>Awesome</Button>`);

    assert.dom('button').hasClass('btn-success');
    assert.dom('button').doesNotHaveClass('btn-outline-success');
  });

  test('it adds "btn-danger" class if @danger is set', async function (assert) {
    await render(hbs`<Button @danger>Awesome</Button>`);

    assert.dom('button').hasClass('btn-danger');
    assert.dom('button').doesNotHaveClass('btn-outline-danger');
  });

  test('it adds "btn-danger" class if @danger is true', async function (assert) {
    await render(hbs`<Button @danger={{true}}>Awesome</Button>`);

    assert.dom('button').hasClass('btn-danger');
    assert.dom('button').doesNotHaveClass('btn-outline-danger');
  });

  test('it adds "btn-warning" class if @warning is set', async function (assert) {
    await render(hbs`<Button @warning>Awesome</Button>`);

    assert.dom('button').hasClass('btn-warning');
    assert.dom('button').doesNotHaveClass('btn-outline-warning');
  });

  test('it adds "btn-warning" class if @warning is true', async function (assert) {
    await render(hbs`<Button @warning={{true}}>Awesome</Button>`);

    assert.dom('button').hasClass('btn-warning');
    assert.dom('button').doesNotHaveClass('btn-outline-warning');
  });

  test('it adds "btn-outline-primary" class if @outline and @primary are set', async function (assert) {
    await render(hbs`<Button @outline @primary>Awesome</Button>`);

    assert.dom('button').hasClass('btn-outline-primary');
    assert.dom('button').doesNotHaveClass('btn-primary');
  });

  test('it adds "btn-outline-primary" class if @outline and @primary are true', async function (assert) {
    await render(hbs`<Button @outline={{true}} @primary={{true}}>Awesome</Button>`);

    assert.dom('button').hasClass('btn-outline-primary');
    assert.dom('button').doesNotHaveClass('btn-primary');
  });

  test('it adds "btn-outline-success" class if @outline and @success are set', async function (assert) {
    await render(hbs`<Button @outline @success>Awesome</Button>`);

    assert.dom('button').hasClass('btn-outline-success');
    assert.dom('button').doesNotHaveClass('btn-success');
  });

  test('it adds "btn-outline-success" class if @outline and @success are true', async function (assert) {
    await render(hbs`<Button @outline={{true}} @success={{true}}>Awesome</Button>`);

    assert.dom('button').hasClass('btn-outline-success');
    assert.dom('button').doesNotHaveClass('btn-success');
  });

  test('it adds "btn-outline-danger" class if @outline and @danger are set', async function (assert) {
    await render(hbs`<Button @outline @danger>Awesome</Button>`);

    assert.dom('button').hasClass('btn-outline-danger');
    assert.dom('button').doesNotHaveClass('btn-danger');
  });

  test('it adds "btn-outline-danger" class if @outline and @danger are true', async function (assert) {
    await render(hbs`<Button @outline={{true}} @danger={{true}}>Awesome</Button>`);

    assert.dom('button').hasClass('btn-outline-danger');
    assert.dom('button').doesNotHaveClass('btn-danger');
  });

  test('it adds "btn-outline-warning" class if @outline and @warning are set', async function (assert) {
    await render(hbs`<Button @outline @warning>Awesome</Button>`);

    assert.dom('button').hasClass('btn-outline-warning');
    assert.dom('button').doesNotHaveClass('btn-warning');
  });

  test('it adds "btn-outline-warning" class if @outline and @warning are true', async function (assert) {
    await render(hbs`<Button @outline={{true}} @warning={{true}}>Awesome</Button>`);

    assert.dom('button').hasClass('btn-outline-warning');
    assert.dom('button').doesNotHaveClass('btn-warning');
  });

  test('it adds "btn-subtle" class if @subtle is set', async function (assert) {
    await render(hbs`<Button @subtle>Awesome</Button>`);

    assert.dom('button').hasClass('btn-subtle');
  });

  test('it adds "btn-subtle" class if @subtle is true', async function (assert) {
    await render(hbs`<Button @subtle={{true}}>Awesome</Button>`);

    assert.dom('button').hasClass('btn-subtle');
  });

  test('it adds "btn-link" class if @link is set', async function (assert) {
    await render(hbs`<Button @link>Awesome</Button>`);

    assert.dom('button').hasClass('btn-link');
  });

  test('it adds "btn-link" class if @link is true', async function (assert) {
    await render(hbs`<Button @link={{true}}>Awesome</Button>`);

    assert.dom('button').hasClass('btn-link');
  });

  test('it adds "btn-sm" class if @small is set', async function (assert) {
    await render(hbs`<Button @small>Awesome</Button>`);

    assert.dom('button').hasClass('btn-sm');
  });

  test('it adds "btn-sm" class if @small is true', async function (assert) {
    await render(hbs`<Button @small={{true}}>Awesome</Button>`);

    assert.dom('button').hasClass('btn-sm');
  });

  test('it adds "btn-lg" class if @large is set', async function (assert) {
    await render(hbs`<Button @large>Awesome</Button>`);

    assert.dom('button').hasClass('btn-lg');
  });

  test('it adds "btn-lg" class if @large is true', async function (assert) {
    await render(hbs`<Button @large={{true}}>Awesome</Button>`);

    assert.dom('button').hasClass('btn-lg');
  });

  test('it adds "btn-circle" class if @circle is set', async function (assert) {
    await render(hbs`<Button @circle>Awesome</Button>`);

    assert.dom('button').hasClass('btn-circle');
  });

  test('it adds "btn-circle" class if @circle is true', async function (assert) {
    await render(hbs`<Button @circle={{true}}>Awesome</Button>`);

    assert.dom('button').hasClass('btn-circle');
  });

  test('it adds "btn-block" class if @block is set', async function (assert) {
    await render(hbs`<Button @block>Awesome</Button>`);

    assert.dom('button').hasClass('btn-block');
  });

  test('it adds "btn-block" class if @block is true', async function (assert) {
    await render(hbs`<Button @block={{true}}>Awesome</Button>`);

    assert.dom('button').hasClass('btn-block');
  });
});
