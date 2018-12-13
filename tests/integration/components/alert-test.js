import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { ICON_MAP } from 'hex/components/alert';

module('Integration: Alert', function (hooks) {
  setupRenderingTest(hooks);

  test('it yields the provided block', async function (assert) {
    this.message = 'The system only dreams in total darkness';

    await render(hbs`<Alert>{{this.message}}</Alert>`);

    assert.dom('.alert-body').hasText(this.message);
  });

  test('it assigns the given HTML attributes', async function (assert) {
    await render(hbs`<Alert data-test-alert aria-label="Sweet">Awesome</Alert>`);

    assert.dom('.alert[data-test-alert]').exists();
    assert.dom('.alert').hasAttribute('aria-label', 'Sweet');
  });

  test('it has a default variant of "info"', async function (assert) {
    await render(hbs`<Alert>Awesome</Alert>`);

    assert.dom('.alert').hasClass('alert-info');
  });

  test('it renders different icon depending on the variant', async function (assert) {
    await render(hbs`
      <Alert @success>Success!</Alert>
      <Alert @danger>Danger!</Alert>
      <Alert @info>Info!</Alert>
    `);

    assert.dom('.alert-success [data-test-icon-path]').hasAttribute('d', ICON_MAP.success);
    assert.dom('.alert-danger [data-test-icon-path]').hasAttribute('d', ICON_MAP.danger);
    assert.dom('.alert-info [data-test-icon-path]').hasAttribute('d', ICON_MAP.info);
  });

  test('it assigns the correct correct class when @variant is passed', async function (assert) {
    await render(hbs`<Alert @variant="danger">Danger stranger</Alert>`);

    assert.dom('.alert').hasClass('alert-danger');
  });

  test('it adds "alert-success" class if @success is set', async function (assert) {
    await render(hbs`<Alert @success>Awesome</Alert>`);

    assert.dom('.alert').hasClass('alert-success');
  });

  test('it adds "alert-success" class if @success is true', async function (assert) {
    await render(hbs`<Alert @success={{true}}>Awesome</Alert>`);

    assert.dom('.alert').hasClass('alert-success');
  });

  test('it adds "alert-danger" class if @danger is set', async function (assert) {
    await render(hbs`<Alert @danger>Awesome</Alert>`);

    assert.dom('.alert').hasClass('alert-danger');
  });

  test('it adds "alert-danger" class if @danger is true', async function (assert) {
    await render(hbs`<Alert @danger={{true}}>Awesome</Alert>`);

    assert.dom('.alert').hasClass('alert-danger');
  });

  test('it adds "alert-info" class if @info is set', async function (assert) {
    await render(hbs`<Alert @info>Awesome</Alert>`);

    assert.dom('.alert').hasClass('alert-info');
  });

  test('it adds "alert-info" class if @info is true', async function (assert) {
    await render(hbs`<Alert @info={{true}}>Awesome</Alert>`);

    assert.dom('.alert').hasClass('alert-info');
  });
});
