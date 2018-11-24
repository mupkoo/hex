# Input

HTML `<input>` wrapper.

{{#docs-demo as |demo|}}
  {{#demo.example name="input-example.hbs"}}
    <Input 
      value={{this.value}}
      oninput={{action (mut this.value) value="target.value"}}
      onfocus={{action (mut this.currentEvent) "'onfocus' called"}}
      onblur={{action (mut this.currentEvent) "'onblur' called"}}
      class="custom-class" />

    <pre class="docs-debug">Debug: {{this.currentEvent}}</pre>
    <pre class="docs-debug">Current value: {{this.value}}</pre>
  {{/demo.example}}

  {{demo.snippet "input-example.hbs"}}
{{/docs-demo}}
