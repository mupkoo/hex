# Badge

A styled badge component

## Variants

The component comes with couple of different variations. 
You can use them as boolean attributes by passing 
`@primary={{true}}` or `@primary={{false}}`, or just by
setting the variant flag like `@primary` for example.

{{#docs-demo as |demo|}}
  {{#demo.example name='badge-variants.hbs'}}
    <Badge>Default</Badge>
    <Badge @primary>Primary</Badge>
    <Badge @success>Success</Badge>
    <Badge @danger>Danger</Badge>
    <Badge @warning>Warning</Badge>
    <Badge @info>Info</Badge>
    <Badge @light>Light</Badge>
    <Badge @dark>Dark</Badge>
  {{/demo.example}}

  {{demo.snippet 'badge-variants.hbs'}}
{{/docs-demo}}

## As links

If you want to display a link as a badge, you need to manually
add the class names.

{{#docs-demo as |demo|}}
  {{#demo.example name='link-badge.hbs'}}
    <a href="#" class="badge">Default</a>
    <a href="#" class="badge badge-primary">Primary</a>
    <a href="#" class="badge badge-success">Success</a>
    <a href="#" class="badge badge-danger">Danger</a>
    <a href="#" class="badge badge-warning">Warning</a>
    <a href="#" class="badge badge-info">Info</a>
    <a href="#" class="badge badge-light">Light</a>
    <a href="#" class="badge badge-dark">Dark</a>
  {{/demo.example}}

  {{demo.snippet 'link-badge.hbs'}}
{{/docs-demo}}
