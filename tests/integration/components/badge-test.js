import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: Badge', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a span, yielding the provided block', async function (assert) {
    await render(hbs`<Badge>Sweet</Badge>`);

    assert.dom('span.badge').hasText('Sweet');
  });

  test('it adds "badge-primary" class if @primary is set', async function (assert) {
    await render(hbs`<Badge @primary>Awesome</Badge>`);

    assert.dom('span').hasClass('badge-primary');
  });

  test('it adds "badge-primary" class if @primary is true', async function (assert) {
    await render(hbs`<Badge @primary={{true}}>Awesome</Badge>`);

    assert.dom('span').hasClass('badge-primary');
  });

  test('it adds "badge-success" class if @success is set', async function (assert) {
    await render(hbs`<Badge @success>Awesome</Badge>`);

    assert.dom('span').hasClass('badge-success');
  });

  test('it adds "badge-success" class if @success is true', async function (assert) {
    await render(hbs`<Badge @success={{true}}>Awesome</Badge>`);

    assert.dom('span').hasClass('badge-success');
  });

  test('it adds "badge-danger" class if @danger is set', async function (assert) {
    await render(hbs`<Badge @danger>Awesome</Badge>`);

    assert.dom('span').hasClass('badge-danger');
  });

  test('it adds "badge-danger" class if @danger is true', async function (assert) {
    await render(hbs`<Badge @danger={{true}}>Awesome</Badge>`);

    assert.dom('span').hasClass('badge-danger');
  });

  test('it adds "badge-warning" class if @warning is set', async function (assert) {
    await render(hbs`<Badge @warning>Awesome</Badge>`);

    assert.dom('span').hasClass('badge-warning');
  });

  test('it adds "badge-warning" class if @warning is true', async function (assert) {
    await render(hbs`<Badge @warning={{true}}>Awesome</Badge>`);

    assert.dom('span').hasClass('badge-warning');
  });

  test('it adds "badge-info" class if @info is set', async function (assert) {
    await render(hbs`<Badge @info>Awesome</Badge>`);

    assert.dom('span').hasClass('badge-info');
  });

  test('it adds "badge-info" class if @info is true', async function (assert) {
    await render(hbs`<Badge @info={{true}}>Awesome</Badge>`);

    assert.dom('span').hasClass('badge-info');
  });

  test('it adds "badge-light" class if @light is set', async function (assert) {
    await render(hbs`<Badge @light>Awesome</Badge>`);

    assert.dom('span').hasClass('badge-light');
  });

  test('it adds "badge-light" class if @light is true', async function (assert) {
    await render(hbs`<Badge @light={{true}}>Awesome</Badge>`);

    assert.dom('span').hasClass('badge-light');
  });

  test('it adds "badge-dark" class if @dark is set', async function (assert) {
    await render(hbs`<Badge @dark>Awesome</Badge>`);

    assert.dom('span').hasClass('badge-dark');
  });

  test('it adds "badge-dark" class if @dark is true', async function (assert) {
    await render(hbs`<Badge @dark={{true}}>Awesome</Badge>`);

    assert.dom('span').hasClass('badge-dark');
  });
});
