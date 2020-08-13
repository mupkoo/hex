# Power Select

{{#docs-demo as |demo|}}
  {{#demo.example name="power-select-field-example.hbs"}}
    <Field @label="Power Select" as |id|>
      <PowerSelect 
        @triggerId={{id}}
        @allowClear={{true}}
        @onChange={{fn (mut this.title)}} 
        @options={{array "Jedi Master" "Sith Lord"}}
        @searchEnabled={{true}}
        @selected={{this.title}} as |title|
      >
        {{title}}
      </PowerSelect>
    </Field>

    <Field @label="Power Select Disabled" as |id|>
      <PowerSelect 
        @triggerId={{id}}
        @allowClear={{true}}
        @disabled={{true}}
        @onChange={{fn (mut this.title)}} 
        @options={{array "Jedi Master" "Sith Lord"}}
        @searchEnabled={{true}}
        @selected={{this.title}} as |title|
      >
        {{title}}
      </PowerSelect>
    </Field>

    <Field @label="Power Select Multiple" as |id|>
      <PowerSelectMultiple 
        @triggerId={{id}} 
        @onChange={{fn (mut this.jedis)}}
        @options={{array "Master Yoda" "Mace Windu" "Obi-Wan Kenobi"}}
        @searchEnabled={{true}}
        @selected={{this.jedis}} as |jedi|
      >
        {{jedi}}
      </PowerSelectMultiple>
    </Field>

    <Field @label="Power Select Multiple Disabled" as |id|>
      <PowerSelectMultiple 
        @disabled={{true}}
        @triggerId={{id}}
        @selected={{this.jedis}}
        @options={{array "Master Yoda" "Mace Windu" "Obi-Wan Kenobi"}}
        @onChange={{fn (mut this.jedis)}} as |jedi|
      >
        {{jedi}}
      </PowerSelectMultiple>
    </Field>

    <div class="docs-debug">
      Title: {{this.title}}<br>
      Jedis: {{this.jedis}}
    </div>
  {{/demo.example}}

  {{demo.snippet "power-select-field-example.hbs"}}
  {{demo.snippet "power-select-field-example.js"}}
{{/docs-demo}}
