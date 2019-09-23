# Notify

A simple service for displaying toast messages.

{{#docs-demo as |demo|}}
  {{#demo.example name="notify-example.hbs"}}
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
  {{/demo.example}}

  {{demo.snippet "notify-example.hbs"}}
  {{demo.snippet "notify-example.js"}}
{{/docs-demo}}
