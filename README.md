# slate-diff-js

## usage

```js

import { slateDiff } from "./dist/esm/index.js";
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