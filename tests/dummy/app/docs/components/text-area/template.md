# TextArea

HTML `<textarea>` wrapper.

{{#docs-demo as |demo|}}
  {{#demo.example name="text-area-example.hbs"}}
    <TextArea 
      @id="text-area-id"
      @value={{this.value}}
      oninput={{action (mut this.value) value="target.value"}}
      onfocus={{action (mut this.currentEvent) "'onfocus' called"}}
      onblur={{action (mut this.currentEvent) "'onblur' called"}}
      rows="5"
      class="custom-class" />

    <pre class="docs-debug">Debug: {{this.currentEvent}}</pre>
    <pre class="docs-debug">Current value: {{this.value}}</pre>
  {{/demo.example}}

  {{demo.snippet "text-area-example.hbs"}}
{{/docs-demo}}
