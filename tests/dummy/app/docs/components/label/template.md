# Label

HTML `<label>` wrapper.

{{#docs-demo as |demo|}}
  {{#demo.example name="label-example.hbs"}}
    <div class="docs-flex docs-flex-col">
      <Label>First Name</Label>
      <Label @for="using-argument">Using Argument</Label>
      <Label for="using-attribute">Using Attribute</Label>
    </div>
  {{/demo.example}}

  {{demo.snippet "label-example.hbs"}}
{{/docs-demo}}