import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: Portal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given block inside the destination element', async function (assert) {
    await render(hbs`
      <div data-test-target></div>

      <div data-test-parent>
        {{#if this.destinationElement}}
          <Portal
            @element={{this.destinationElement}}
            @renderInPlace={{false}}
          >
            Awesome
          </Portal>
        {{/if}}
      </div>
    `);

    this.set('destinationElement', this.element.querySelector('[data-test-target]'));

    assert.dom('[data-test-target]').hasText('Awesome');
    assert.dom('[data-test-parent]').hasText('');
  });

  test('it renders the given block in place when @renderInPlace is true', async function (assert) {
    await render(hbs`
      <div data-test-target></div>

      <div data-test-parent>
        {{#if this.destinationElement}}
          <Portal
            @element={{this.destinationElement}}
            @renderInPlace={{true}}
          >
            Awesome
          </Portal>
        {{/if}}
      </div>
    `);

    this.set('destinationElement', this.element.querySelector('[data-test-target]'));

    assert.dom('[data-test-target]').hasText('');
    assert.dom('[data-test-parent]').hasText('Awesome');
  });
});
