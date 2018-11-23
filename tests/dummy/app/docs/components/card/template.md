# Card

A component for displaying content in a separate section.

{{#docs-demo as |demo|}}
  {{#demo.example name="card-example.hbs"}}
    <Card>
      <CardBody as |cb|>
        <h3 class="card-title">Technolojesus</h3>
        Even with all our technology and the inventions that make modern life so much easier than it once was, it takes just one big natural disaster to wipe all that away and remind us that, here on Earth, we're still at the mercy of nature.
      </CardBody>

      <CardActions>
        <Button @primary>Accept</Button>
        <Button>Cancel</Button>
      </CardActions>
    </Card>
  {{/demo.example}}

  {{demo.snippet "card-example.hbs"}}
{{/docs-demo}}
