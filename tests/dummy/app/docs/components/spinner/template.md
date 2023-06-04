# Spinner

A component that displays a spinning icon to show a loading state.

<DocsDemo as |demo|>
  <demo.example @name="spinner-example.hbs" class="docs-flex docs-items-center">
    <div class="docs-p-2">
      <Spinner @size=48 />
    </div>
    <div class="docs-p-2">
      <Spinner @size=36 />
    </div>
    <div class="docs-p-2">
      <Spinner />
    </div>
    <div class="docs-p-2 docs-bg-grey-darkest docs-rounded-full">
      <Spinner @inverted />
    </div>
  </demo.example>

  <demo.snippet @name="spinner-example.hbs" />
</DocsDemo>
