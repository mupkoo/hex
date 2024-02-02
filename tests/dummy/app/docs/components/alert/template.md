# Alert

An Ember component for providing contextual feedback messages for typical user actions.

## Variants

The component comes with couple of different variations. You can use them as boolean attributes
by passing `@success={{true}}` or `@success={{false}}`, or by just setting the variant flag 
like `@success` for example.

<DocsDemo as |demo|>
  <demo.example @name="alert-variants.hbs">
    <Alert @info>
      A great challenge of life: Knowing enough to think you're doing it right, but not enough to know you're doing it wrong.
    </Alert>

    <Alert @success>
      I get a clock radio. He cannot afford. Great success!
    </Alert>

    <Alert @danger>
      Any time scientists disagree, it's because we have insufficient data. Then we can agree on what kind of data to get; we get the data; and the data solves the problem. Either I'm right, or you're right, or we're both wrong. And we move on. That kind of conflict resolution does not exist in politics or religion.
    </Alert>
  </demo.example>

  <demo.snippet @name="alert-variants.hbs" />
</DocsDemo>

## Dynamic variant

You can use the `@variant` property to define the style dynamically.

<DocsDemo as |demo|>
  <demo.example @name="alert-dynamic-variant.hbs">
    <Button {{on "click" (fn (mut this.variant) "info")}} @primary>Info</Button>
    <Button {{on "click" (fn (mut this.variant) "success")}} @success>Success</Button>
    <Button {{on "click" (fn (mut this.variant) "danger")}} @danger>Danger</Button>

    <hr>

    <Alert @variant={{this.variant}}>
      A great challenge of life: Knowing enough to think 
      you're doing it right, but not enough to know 
      you're doing it wrong.
    </Alert>
  </demo.example>

  <demo.snippet @name="alert-dynamic-variant.hbs" />
</DocsDemo>
