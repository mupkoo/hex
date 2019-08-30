import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: SpinnerButton', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a button', async function (assert) {
    await render(hbs`<SpinnerButton @primary disabled={{true}}>Save</SpinnerButton>`);

    assert.dom('button').hasText('Save');
    assert.dom('button').hasClass('btn-primary');
    assert.dom('button').isDisabled();
  });

  test('it renders a button in normal state if @isLoading is false', async function (assert) {
    await render(hbs`<SpinnerButton @isLoading={{false}}>Save</SpinnerButton>`);

    assert.dom('button').isNotDisabled();
    assert.dom('[data-test-spinner]').doesNotExist();
    assert.dom('.spinner-btn-label').doesNotHaveClass('-is-loading');
  });

  test('it renders a button in loading state if @isLoading is true', async function (assert) {
    await render(hbs`<SpinnerButton @isLoading={{true}}>Save</SpinnerButton>`);

    assert.dom('button').isDisabled();
    assert.dom('[data-test-spinner]').exists();
    assert.dom('.spinner-btn-label').hasClass('-is-loading');
  });
});
