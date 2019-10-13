# Field

Field component

You can use the `Field` component to wrap your form controls

{{#docs-demo as |demo|}}
  {{#demo.example name="field-example.hbs"}}
    <Field @label="Custom form control" as |id|>
      <input id={{id}} placeholder="custom" class="field-control">
    </Field>

    <Field @label="With error" @error="Please, fill in" as |id|>
      <input id={{id}} placeholder="fill" class="field-control">
    </Field>
  {{/demo.example}}

  {{demo.snippet "field-example.hbs"}}
  {{demo.snippet "field-example.js"}}
{{/docs-demo}}
