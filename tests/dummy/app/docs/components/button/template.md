# Button

An Ember component that is a base button.

## Variants

The component comes with couple of different variations. You can use them as boolean attributes
by passing `@primary={{true}}` or `@primary={{false}}`, or by just setting the variant flag like `@primary` for example.

{{#docs-demo as |demo|}}
  {{#demo.example name='button-variants.hbs'}}
    <Button>Default</Button>
    <Button @primary>Primary</Button>
    <Button @danger>Danger</Button>
    <Button @warning>Warning</Button>
    <Button @subtle>Subtle</Button>
    <Button @link>Link</Button>
  {{/demo.example}}

  {{demo.snippet 'button-variants.hbs'}}
{{/docs-demo}}

## Small Variant

You can reduce the size of the `<Button />` component by passing `@small` attribute.

{{#docs-demo as |demo|}}
  {{#demo.example name='small-buttons.hbs'}}
    <Button @small>Default</Button>
    <Button @small @primary>Primary</Button>
    <Button @small @danger>Danger</Button>
    <Button @small @warning>Warning</Button>
    <Button @small @subtle>Subtle</Button>
    <Button @small @link>Link</Button>
  {{/demo.example}}

  {{demo.snippet 'small-buttons.hbs'}}
{{/docs-demo}}

## Large Variant

You can increase the size of the `<Button />` component by passing `@large` attribute.

{{#docs-demo as |demo|}}
  {{#demo.example name='large-buttons.hbs'}}
    <Button @large>Default</Button>
    <Button @large @primary>Primary</Button>
    <Button @large @danger>Danger</Button>
    <Button @large @warning>Warning</Button>
    <Button @large @subtle>Subtle</Button>
    <Button @large @link>Link</Button>
  {{/demo.example}}

  {{demo.snippet 'large-buttons.hbs'}}
{{/docs-demo}}

## Icons

The button components should work well with SVG icons. The default behavior is for the icon to be before the text, but if you need to add it after it, you can set `-right` modifier class to it.

{{#docs-demo as |demo|}}
  {{#demo.example name='buttons-with-icons.hbs'}}
    <Button>{{svg-jar "edit"}} Edit</Button>
    <Button @primary>{{svg-jar "close"}} Close</Button>
    <Button @subtle>Trash {{svg-jar "trash" class="-right"}}</Button>

    <hr>
    
    <Button @primary>{{svg-jar "close"}} Close</Button>
    <Button @primary @large>{{svg-jar "close"}} Close</Button>
    <Button @primary @small>{{svg-jar "close"}} Close</Button>
  {{/demo.example}}

  {{demo.snippet 'buttons-with-icons.hbs'}}
{{/docs-demo}}

# Loading variant

A handy variant of the button that displays a 
<LinkTo @route="docs.components.spinner">`<Spinner />`</LinkTo>
component while a given action is running

{{#docs-demo as |demo|}}
  {{#demo.example name="button-spinner-example.hbs"}}
    <Button {{on "click" this.toggleState}}>Toggle</Button>
    <br><br>
    <Button @isLoading={{this.isLoading}}>Default</Button>
    <Button @primary @isLoading={{this.isLoading}}>Primary</Button>
    <Button @danger @isLoading={{this.isLoading}}>Danger</Button>
    <Button @warning @isLoading={{this.isLoading}}>Warning</Button>
    <Button @subtle @isLoading={{this.isLoading}}>Subtle</Button>
    <br><br>
    <Button @small @isLoading={{this.isLoading}}>Default</Button>
    <Button @primary @small @isLoading={{this.isLoading}}>Primary</Button>
    <Button @danger @small @isLoading={{this.isLoading}}>Danger</Button>
    <Button @warning @small @isLoading={{this.isLoading}}>Warning</Button>
    <Button @subtle @small @isLoading={{this.isLoading}}>Subtle</Button>
  {{/demo.example}}

  {{demo.snippet "button-spinner-example.hbs"}}
  {{demo.snippet "button-spinner-example.js"}}
{{/docs-demo}}
