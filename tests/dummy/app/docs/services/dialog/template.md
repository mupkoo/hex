# Dialog

A simple service for displaying dialogs.

{{#docs-demo as |demo|}}
  {{#demo.example name="dialog-example.hbs"}}
    <Button {{on "click" this.displayConfirmation}}>
      Confirm me
    </Button>

    <Button @danger {{on "click" this.displayDeleteConfirmation}}>
      {{svg-jar "trash"}} Delete
    </Button>

    {{#if this.isConfirmed}}
      <p class="docs-mt-4 docs-text-sm">Sweet! You confirmed the message.</p>
    {{/if}}

    {{#if this.isDeleted}}
      <p class="docs-mt-4 docs-text-sm">So long my love...</p>
    {{/if}}

    <Dialog />
  {{/demo.example}}

  {{demo.snippet "dialog-example.hbs"}}
  {{demo.snippet "dialog-example.js"}}
{{/docs-demo}}
