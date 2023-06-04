# Blanket

A component that covers the underlying UI for a layered component.

<DocsDemo as |demo|>
  <demo.example @name="blanket-example.hbs">
    <Button {{on "click" this.toggleBlanket}}>
      {{#if this.showBlanket}}Hide{{else}}Show{{/if}} Blanket
    </Button>

    {{#if this.showBlanket}}
      <Blanket 
        @isTinted={{true}} 
        @canClickThrough={{this.canClickThrough}}
        @onClick={{this.toggleBlanket}}
      />
    {{/if}}
  </demo.example>

  <demo.snippet @name="blanket-example.hbs" />
  <demo.snippet @name="blanket-example.ts" />
</DocsDemo>
