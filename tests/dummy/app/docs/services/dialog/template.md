# Dialog

A simple service for displaying dialogs.

<DocsDemo as |demo|>
  <demo.example @name="dialog-example.hbs">
    <Button {{on "click" this.displayConfirmation}} data-test-confirm>
      Confirm me
    </Button>

    <Button {{on "click" (perform this.dialogTask)}} data-test-task>
      Confirm a task
    </Button>

    <Button @danger {{on "click" this.displayDeleteConfirmation}} data-test-delete>
      {{svg-jar "trash"}} Delete
    </Button>

    {{#if this.message}}
      <p class="docs-mt-4 docs-text-sm" data-test-message>
        {{this.message}}
      </p>
    {{/if}}

    <Dialog />
  </demo.example>

  <demo.snippet @name="dialog-example.hbs" />
  <demo.snippet @name="dialog-example.js" />
</DocsDemo>
