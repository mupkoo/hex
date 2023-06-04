# Notify

A simple service for displaying toast messages.

<DocsDemo as |demo|>
  <demo.example @name="notify-example.hbs">
    <Button @primary {{on "click" this.showInfoMessage}} data-test-show-info>
      Info Message
    </Button>

    <Button @success {{on "click" this.showSuccessMessage}} data-test-show-success>
      Success Message
    </Button>

    <Button @danger {{on "click" this.showDangerMessage}} data-test-show-danger>
      Danger Message
    </Button>

    <Notify />
  </demo.example>

  <demo.snippet @name="notify-example.hbs" />
  <demo.snippet @name="notify-example.js" />
</DocsDemo>
