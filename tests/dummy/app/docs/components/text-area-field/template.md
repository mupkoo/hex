# TextAreaField

Text area field component

One of the ways to use the component, is to provide `@value` property. Doing that
the property will get updated in the input event. If you want to manually handle 
this, you can provide `@onChange` handler which will return the value of the input.
This is more or less equal to `oninput={{action (mut this.value) value="target.value"}}`.

<DocsDemo as |demo|>
  <demo.example @name="text-area-field-example.hbs">
    <TextAreaField
      @label="Secret" 
      @value={{this.model}}
      {{on "focus" (fn (mut this.currentEvent) "'on focus' called")}}
      {{on "blur" (fn (mut this.currentEvent) "'on blur' called")}}
      class="custom-class"
    />

    <div class="docs-debug">
      Debug: {{this.currentEvent}}<br>
      Current value: {{this.model}}
    </div>
  </demo.example>

  <demo.snippet @name="text-area-field-example.hbs" />
  <demo.snippet @name="text-area-field-example.js" />
</DocsDemo>
