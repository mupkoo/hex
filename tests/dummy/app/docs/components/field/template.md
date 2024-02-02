# Field

Field component

You can use the `Field` component to wrap your form controls

<DocsDemo as |demo|>
  <demo.example @name="field-example.hbs">
    <Field @label="Custom form control" as |id|>
      <input id={{id}} placeholder="custom" class="field-control">
    </Field>

    <Field @label="With error" @error="Please, fill in" as |id|>
      <input id={{id}} placeholder="fill" class="field-control">
    </Field>
  </demo.example>

  <demo.snippet @name="field-example.hbs" />
  <demo.snippet @name="field-example.js" />
</DocsDemo>
