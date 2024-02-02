# Input Field

Input field component

One of the ways to use the component, is to provide `@value` property. Doing that
the property will get updated in the input event. If you want to manually handle 
this, you can provide `@onChange` handler which will return the value of the input.
This is more or less equal to `oninput={{action (mut this.value) value="target.value"}}`.

<DocsDemo as |demo|>
  <demo.example @name="input-field-example.hbs">
    <InputField 
      @label="Secret" 
      @value={{this.model}}
      type="text"
      {{on "focus" (fn (mut this.currentEvent) "'on focus' called")}}
      {{on "blur" (fn (mut this.currentEvent) "'on blur' called")}}
      class="custom-class"
    />

    <div class="docs-debug">
      Debug: {{this.currentEvent}}<br>
      Current value: {{this.model}}
    </div>
  </demo.example>

  <demo.snippet @name="input-field-example.hbs" />
  <demo.snippet @name="input-field-example.js" />
</DocsDemo>
