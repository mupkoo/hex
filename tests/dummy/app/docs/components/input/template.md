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

    <div class="docs-debug">
      Debug: {{this.currentEvent}}<br>
      Current value: {{this.value}}
    </div>
  {{/demo.example}}

  {{demo.snippet "input-example.hbs"}}
{{/docs-demo}}
