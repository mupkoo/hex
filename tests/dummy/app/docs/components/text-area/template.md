# TextArea

HTML `<textarea>` wrapper.

{{#docs-demo as |demo|}}
  {{#demo.example name="text-area-example.hbs"}}
    <TextArea
      @id="text-area-id"
      @value={{this.value}}
      oninput={{action (mut this.value) value="target.value"}}
      {{on "focus" (fn (mut this.currentEvent) "'onfocus' called")}}
      {{on "blur" (fn (mut this.currentEvent) "'onblur' called")}}
      rows="5"
      class="custom-class" 
    />

    <div class="docs-debug">
      Debug: {{this.currentEvent}}<br>
      Current value: {{this.value}}
    </div>
  {{/demo.example}}

  {{demo.snippet "text-area-example.hbs"}}
{{/docs-demo}}
