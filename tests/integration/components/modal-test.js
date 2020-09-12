import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration: Modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it yields contextual modal components', async function (assert) {
    await render(hbs`
      <Modal as |m|>
        <m.Header>Header content</m.Header>
        <m.Body>Body content</m.Body>
        <m.Footer>Footer content</m.Footer>
      </Modal>
    `);

    assert.dom('.modal-header').containsText('Header content');
    assert.dom('.modal-body').containsText('Body content');
    assert.dom('.modal-footer').containsText('Footer content');
  });

  test('it yields the close action', async function (assert) {
    this.closeCalled = false;

    await render(hbs`
      <Modal @onClose={{fn (mut this.closeCalled) true}} as |m|>
        <Button id="inner-close" {{on "click" m.actions.close}}>
          Close
        </Button>
      </Modal>
    `);

    await click('#inner-close');

    assert.ok(this.closeCalled);
  });

  test('it triggers the passed @onClose action upon clicking the blanket', async function (assert) {
    this.closeCalled = false;

    await render(hbs`<Modal @onClose={{fn (mut this.closeCalled) true}} />`);

    await click('[data-test-modal-blanket]');

    assert.ok(this.closeCalled);
  });

  test('it does not trigger the passed @onClose action upon clicking the blanket if @preventBlanketClose is present', async function (assert) {
    this.closeCalled = false;

    await render(hbs`
      <Modal @preventBlanketClose @onClose={{action (mut this.closeCalled) true}} />
    `);

    await click('[data-test-modal-blanket]');

    assert.notOk(this.closeCalled);
  });

  test('it does not trigger the passed @onClose action upon clicking the blanket if @preventBlanketClose is true', async function (assert) {
    this.closeCalled = false;

    await render(hbs`
      <Modal @preventBlanketClose={{true}} @onClose={{fn (mut this.closeCalled) true}} />
    `);

    await click('[data-test-modal-blanket]');

    assert.notOk(this.closeCalled);
  });

  test('it does not propagate the click on the modal to the blanket', async function (assert) {
    this.closeCalled = false;

    await render(hbs`<Modal @onClose={{action (mut this.closeCalled) true}} />`);

    await click('.modal');

    assert.notOk(this.closeCalled);
  });

  test('it triggers the passed @onClose action upon clicking the close btn', async function (assert) {
    this.closeCalled = false;

    await render(hbs`
      <Modal @onClose={{action (mut this.closeCalled) true}} as |m|>
        <m.Header>Sweet</m.Header>
      </Modal>
    `);

    await click('[data-test-close-modal]');

    assert.ok(this.closeCalled);
  });

  test('it does not trigger the passed @onClose action upon clicking the close btn if @preventClose is present', async function (assert) {
    this.closeCalled = false;

    await render(hbs`
      <Modal @preventClose @onClose={{fn (mut this.closeCalled) true}} as |m|>
        <m.Header>Sweet</m.Header>
      </Modal>
    `);

    await click('[data-test-close-modal]');

    assert.notOk(this.closeCalled);
  });

  test('it does not trigger the passed @onClose action upon clicking the close btn if @preventClose is true', async function (assert) {
    this.closeCalled = false;

    await render(hbs`
      <Modal @preventClose @onClose={{fn (mut this.closeCalled) true}} as |m|>
        <m.Header>Sweet</m.Header>
      </Modal>
    `);

    await click('[data-test-close-modal]');

    assert.notOk(this.closeCalled);
  });

  test('it adds "modal-small" class if @small is present', async function (assert) {
    await render(hbs`<Modal @small />`);

    assert.dom('.modal').hasClass('modal-sm');
  });

  test('it adds "modal-sm" class if @small is true', async function (assert) {
    await render(hbs`<Modal @small={{true}} />`);

    assert.dom('.modal').hasClass('modal-sm');
  });

  test('it adds "modal-lg" class if @large is present', async function (assert) {
    await render(hbs`<Modal @large />`);

    assert.dom('.modal').hasClass('modal-lg');
  });

  test('it adds "modal-lg" class if @large is true', async function (assert) {
    await render(hbs`<Modal @large={{true}} />`);

    assert.dom('.modal').hasClass('modal-lg');
  });

  test('it renders the modal in places if @renderInPlace is present', async function (assert) {
    await render(hbs`
      <div id="modal-test-wrapper">
        <Modal @renderInPlace />
      </div>
    `);

    assert.dom('#modal-test-wrapper .modal').exists();
  });

  test('it passes all the additional attributes to the modal', async function (assert) {
    await render(hbs`<Modal data-test-id="1" class="sweet" />`);

    assert.dom('.modal').hasAttribute('data-test-id', '1');
    assert.dom('.modal').hasClass('sweet');
  });

  test('it passes all the additional attributes to the contextual modal components', async function (assert) {
    await render(hbs`
      <Modal as |m|>
        <m.Header data-test-header-id="header">Header content</m.Header>
        <m.Body data-test-body-id="body">Body content</m.Body>
        <m.Footer data-test-footer-id="footer">Footer content</m.Footer>
      </Modal>
    `);

    assert.dom('.modal-header').hasAttribute('data-test-header-id', 'header');
    assert.dom('.modal-body').hasAttribute('data-test-body-id', 'body');
    assert.dom('.modal-footer').hasAttribute('data-test-footer-id', 'footer');
  });
});
