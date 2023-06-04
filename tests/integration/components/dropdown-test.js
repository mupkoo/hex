import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { clickDropdown } from 'hex/test-support/helpers';

module('Integration: Dropdown', function (hooks) {
  setupRenderingTest(hooks);

  test('it yields decorated dropdown trigger', async function (assert) {
    await render(hbs`
      <Dropdown as |d|>
        <d.Trigger>Awesome</d.Trigger>
      </Dropdown>
    `);

    assert.dom('.ember-basic-dropdown-trigger').hasClass('btn');

    await clickDropdown();

    assert.dom('.ember-basic-dropdown-trigger').hasClass('active');
  });

  test('it yields decorated dropdown content', async function (assert) {
    await render(hbs`
      <Dropdown as |d|>
        <d.Trigger>Awesome</d.Trigger>
        <d.Content>Content</d.Content>
      </Dropdown>
    `);

    await clickDropdown();

    assert.dom('.dropdown-content').exists();
  });

  test('it yields the rest dropdown public API', async function (assert) {
    this.disabled = true;

    await render(hbs`
      <Dropdown @initiallyOpened={{true}} @disabled={{this.disabled}} as |d|>
        <d.Trigger>Awesome</d.Trigger>
        <d.Content>Content</d.Content>

        <div data-test-id>
          {{d.uniqueId}}
        </div>

        {{#if d.disabled}}
          <div data-test-disabled></div>
        {{/if}}

        {{#if d.isOpen}}
          <div data-test-opened></div>
        {{/if}}

        <button type="button" {{on "click" d.actions.close}} data-test-close>
          Close
        </button>
      </Dropdown>
    `);

    assert.ok(this.element.querySelector('[data-test-id]').textContent.trim().length);
    assert.dom('[data-test-disabled]').exists();
    assert.dom('[data-test-opened]').exists();

    this.set('disabled', false);
    await click('[data-test-close]');

    assert.dom('[data-test-disabled]').doesNotExist();
    assert.dom('[data-test-opened]').doesNotExist();
  });

  test('it passes the provided options to ember-basic-dropdown', async function (assert) {
    this.disabled = false;

    await render(hbs`
      {{! template-lint-disable no-inline-styles }}
      <div style="margin: 10rem 0;">
        <Dropdown
          @horizontalPosition="right"
          @verticalPosition="above"
          @matchTriggerWidth
          @renderInPlace
          @disabled={{this.disabled}}
        as |d|>
          <d.Trigger>Awesome</d.Trigger>
          <d.Content>Content</d.Content>
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
