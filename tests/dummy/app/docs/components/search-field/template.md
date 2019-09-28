# SearchField

Styled search field component.

The passed `@value` is mutated, unless `@onChange` action is provided.
In that case, the action will be called with the new value.

{{#docs-demo as |demo|}}
  {{#demo.example name="search-field-example.hbs"}}
    <SearchField 
      @value={{this.model}}
      placeholder="Search the users..."
      class="custom-class"
    />

    <div class="docs-debug">
      Debug: {{this.currentEvent}}<br>
      Current value: {{this.model}}
    </div>
  {{/demo.example}}

  {{demo.snippet "search-field-example.hbs"}}
  {{demo.snippet "search-field-example.js"}}
{{/docs-demo}}
