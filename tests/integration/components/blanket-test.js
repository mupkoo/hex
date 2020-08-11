import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: Blanket', function (hooks) {
  setupRenderingTest(hooks);

  test('it yields the provided block', async function (assert) {
    this.message = 'The system only dreams in total darkness';

    await render(hbs`<Blanket>{{this.message}}</Blanket>`);

    assert.dom('.blanket').hasText(this.message);
  });

  test('it assigns the given HTML attributes', async function (assert) {
    await render(hbs`<Blanket data-test-blanket aria-label="Sweet">Awesome</Blanket>`);

    assert.dom('.blanket[data-test-blanket]').exists();
    assert.dom('.blanket').hasAttribute('aria-label', 'Sweet');
  });

  test('it adds "blanket-tinted" class if @isTinted is set', async function (assert) {
    await render(hbs`<Blanket @isTinted>Awesome</Blanket>`);

    assert.dom('.blanket').hasClass('blanket-tinted');
  });

  test('it adds "blanket-tinted" class if @isTinted is true', async function (assert) {
    await render(hbs`<Blanket @isTinted={{true}}>Awesome</Blanket>`);

    assert.dom('.blanket').hasClass('blanket-tinted');
  });

  test('it adds "blanket-click-through" class if @canClickThrough is set', async function (assert) {
    await render(hbs`<Blanket @canClickThrough>Awesome</Blanket>`);

    assert.dom('.blanket').hasClass('blanket-click-through');
  });

  test('it adds "blanket-click-through" class if @canClickThrough is true', async function (assert) {
    await render(hbs`<Blanket @canClickThrough={{true}}>Awesome</Blanket>`);

    assert.dom('.blanket').hasClass('blanket-click-through');
  });

  test('it triggers the @onClick callback whenever a user clicks on the blanket itself', async function (assert) {
    this.dummyClick = () => assert.step('clicked');

    await render(hbs`
      <Blanket @onClick={{this.dummyClick}} data-test-blanket>
        <button type="button">Inner Button</button>
      </Blanket>
    `);

    await click('[data-test-blanket]');
    await click('button');

    assert.verifySteps(['clicked']);
  });
});
