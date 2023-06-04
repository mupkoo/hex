# Checkbox

HTML `<input type="checkbox">` wrapper.

<DocsDemo as |demo|>
  <demo.example @name="checkbox-example.hbs">
    <Checkbox
      @label="Shall we?"
      @checked={{this.checked}}
      @onChange={{fn (mut this.checked)}}
      {{on "focus" (fn (mut this.currentEvent) "'onfocus' called")}}
      {{on "blur" (fn (mut this.currentEvent) "'onblur' called")}}
      class="custom-class" 
    />

    <div class="docs-debug">
      Current value: {{this.checked}}<br>
      Debug: {{this.currentEvent}}
    </div>
  </demo.example>

  <demo.snippet @name="checkbox-example.hbs" />
</DocsDemo>
