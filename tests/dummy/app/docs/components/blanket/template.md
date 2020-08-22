# Blanket

A component that covers the underlying UI for a layered component.

{{#docs-demo as |demo|}}
  {{#demo.example name='blanket-example.hbs'}}
    <Button onclick={{action this.toggleBlanket}}>
      {{#if this.showBlanket}}Hide{{else}}Show{{/if}} Blanket
    </Button>

    {{#if this.showBlanket}}
      <Blanket 
        @isTinted={{true}} 
        @canClickThrough={{this.canClickThrough}}
        onclick={{action this.toggleBlanket}}
      ></Blanket>
    {{/if}}
  {{/demo.example}}

  {{demo.snippet 'blanket-example.hbs'}}
  {{demo.snippet 'blanket-example.ts'}}
{{/docs-demo}}
