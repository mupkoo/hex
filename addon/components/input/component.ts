import Component from 'sparkles-component';

interface InputArgs {
  id?: string;
}

/**
  HTML <input> wrapper

  ```hbs
  <Input @value="Awesome" />
  ```

  @class Input
  @public
*/
export default class Input extends Component<InputArgs> {
}
