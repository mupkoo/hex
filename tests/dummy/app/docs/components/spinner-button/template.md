# Spinner

A handy button that displays a <LinkTo @route="docs.components.spinner">`<Spinner />`</LinkTo> component while a given action
is running

{{#docs-demo as |demo|}}
  {{#demo.example name="spinner-button-example.hbs"}}
    <Button {{on "click" this.toggleState}}>Toggle</Button>
    <SpinnerButton @isLoading={{this.isLoading}}>Default</SpinnerButton>
    <SpinnerButton @primary @isLoading={{this.isLoading}}>Primary</SpinnerButton>
    <SpinnerButton @danger @isLoading={{this.isLoading}}>Danger</SpinnerButton>
    <SpinnerButton @warning @isLoading={{this.isLoading}}>Warning</SpinnerButton>
    <SpinnerButton @subtle @isLoading={{this.isLoading}}>Subtle</SpinnerButton>
  {{/demo.example}}

  {{demo.snippet "spinner-button-example.hbs"}}
  {{demo.snippet "spinner-button-example.js"}}
{{/docs-demo}}
