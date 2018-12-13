import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { clickDropdown } from 'hex/test-support/helpers';

module('Integration: Dropdown', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders decorated dropdown trigger', async function (assert) {
    await render(hbs`
      <Dropdown as |d|>
        <d.trigger>Awesome</d.trigger>
      </Dropdown>
    `);

    assert.dom('.ember-basic-dropdown-trigger').hasClass('btn');

    await clickDropdown();

    assert.dom('.ember-basic-dropdown-trigger').hasClass('active');
  });

  test('it renders decorated dropdown content', async function (assert) {
    await render(hbs`
      <Dropdown as |d|>
        <d.trigger>Awesome</d.trigger>
        <d.content>Content</d.content>
      </Dropdown>
    `);

    await clickDropdown();

    assert.dom('.dropdown-content').exists();
  });

  test('it passes the provided options to ember-basic-dropdown', async function (assert) {
    this.disabled = false;

    await render(hbs`
      <div style="margin: 10rem 0;">
        <Dropdown
          @horizontalPosition="right"
          @verticalPosition="above"
          @matchTriggerWidth
          @renderInPlace
          @disabled={{this.disabled}}
        as |d|>
          <d.trigger>Awesome</d.trigger>
          <d.content>Content</d.content>
        </Dropdown>
      </div>
    `);

    await clickDropdown();

    assert.dom('.dropdown-content').hasClass('ember-basic-dropdown-content--in-place');
    assert.dom('.dropdown-content').hasClass('ember-basic-dropdown-content--right');
    assert.dom('.dropdown-content').hasClass('ember-basic-dropdown-content--above');

    this.set('disabled', true);

    assert.dom('.ember-basic-dropdown-trigger').hasClass('disabled');
    assert.dom('.ember-basic-dropdown-trigger').hasAttribute('aria-disabled', 'true');
  });
});
