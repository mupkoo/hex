import Component from 'sparkles-component';

interface TextAreaArgs {
  id?: string;
  value: string | number;
}

/**
  HTML <textarea> wrapper

  ```hbs
  <TextArea>Most awesome card</TextArea>
  ```

  @class TextArea
  @public
*/
export default class TextArea extends Component<TextAreaArgs> {
}
