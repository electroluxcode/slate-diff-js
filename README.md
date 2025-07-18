# slate-diff-js

## usage

```js

import { slateDiff } from "slate-diff-js";
console.log(slateDiff([{
    type: 'paragraph',
    children: [
        {
            text: '123'
        }
    ]
}], [{
    type: 'paragraph',
    children: [
        {
            text: '123456'
        }
    ]
}]));
```