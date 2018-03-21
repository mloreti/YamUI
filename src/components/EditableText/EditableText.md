### Notes for use
EditableText will inherit the text size of the nearest Block component.

### Examples

Basic usage:

```js { "props": { "data-example": "basic" } }
const { TextSize } = require('../Block');

<Block textSize={TextSize.SMALL}>
  <EditableText text="i am editable..." />
</Block>
```
