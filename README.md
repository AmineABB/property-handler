# Object property handler

> A simpler way to manage your property values in an object:

**Installation**

```js
npm install --save-dev property-handler
```

**How to use the module**

> Import the module property-handler:
import propertyHandler from 'property-handler'

> Get object property value:
```js
const data = {
    foo: 'bar',
    barbaz: [
        {
            id: 0,
            name: 'baar'
        },
        {
            id: 1,
            name: 'fooo'
        }
    ]
}
propertyHandler.getProp(data, 'foo') // => bar
```

> You can use the same implementation for arrays:
```js
const data = {
    foo: 'bar',
    barbaz: [
        {
            id: 0,
            name: 'baar'
        },
        {
            id: 1,
            name: 'fooo'
        }
    ]
}
propertyHandler.getProp(data, 'barbaz') // => Array of object values
```