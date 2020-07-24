# Dialog

A simple service for displaying dialogs.

{{#docs-demo as |demo|}}
  {{#demo.example name="dialog-example.hbs"}}
    <Button {{ action "displayConfirmation" }}>
      Confirm me
    </Button>

    <Button @danger {{ action "displayDeleteConfirmation" }}>
      {{svg-jar "trash"}} Delete
    </Button>

    {{#if isConfirmed}}
      <p>Sweet! You confirmed the message.</p>
    {{/if}}

    {{#if isDeleted}}
      <p>So long my love...</p>
    {{/if}}

    <Dialog />
  {{/demo.example}}

  {{demo.snippet "dialog-example.hbs"}}
  {{demo.snippet "dialog-example.js"}}
{{/docs-demo}}
