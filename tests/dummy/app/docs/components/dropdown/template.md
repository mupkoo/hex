# Dropdown

A dropdown component, based on [ember-basic-dropdown](https://github.com/cibernox/ember-basic-dropdown)

{{#docs-demo as |demo|}}
  {{#demo.example name="dropdown-example.hbs"}}
    <Dropdown as |d|>
      <d.Trigger>Toggle</d.Trigger>

      <d.Content>
        <a href="#" class="dropdown-item">One</a>
        <button type="button" class="dropdown-item">Three</button>
        <hr>
        <div class="dropdown-item">Two</div>
      </d.Content>
    </Dropdown>
  {{/demo.example}}

  {{demo.snippet "dropdown-example.hbs"}}
{{/docs-demo}}
