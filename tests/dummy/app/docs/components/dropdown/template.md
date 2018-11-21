# Dropdown

A dropdown component, based on [ember-basic-dropdown](https://github.com/cibernox/ember-basic-dropdown)

{{#docs-demo as |demo|}}
  {{#demo.example name="dropdown-example.hbs"}}
    <Dropdown as |d|>
      <d.trigger>Toggle</d.trigger>

      <d.content>
        <a href="#" class="dropdown-item">One</a>
        <button type="button" class="dropdown-item">Three</button>
        <hr>
        <div class="dropdown-item">Two</div>
      </d.content>
    </Dropdown>
  {{/demo.example}}

  {{demo.snippet "dropdown-example.hbs"}}
{{/docs-demo}}
