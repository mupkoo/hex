# SelectField

SelectField component

One of the ways to use the component, is to provide `@selected` property. Doing that
the property will get updated in the change event. If you want to manually handle 
this, you can provide `@onChange` handler which will return the value of the select.
This is more or less equal to `onchange={{action (mut this.selected) value="target.value"}}`.

{{#docs-demo as |demo|}}
  {{#demo.example name="select-field-example.hbs"}}
    <SelectField 
      @label="Where is the love?" 
      @selected={{this.model}}
      @options={{ array 
        (array "jedi" "Jedi Masters")
        (array "sith" "Sith Lords")
      }}
      {{on "focus" (fn (mut this.currentEvent) "'on focus' called")}}
      {{on "blur" (fn (mut this.currentEvent) "'on blur' called")}}
      class="custom-class"
    />

    <div class="docs-debug">
      Debug: {{this.currentEvent}}<br>
      Current value: {{this.model}}
    </div>
  {{/demo.example}}

  {{demo.snippet "select-field-example.hbs"}}
  {{demo.snippet "select-field-example.js"}}
{{/docs-demo}}
