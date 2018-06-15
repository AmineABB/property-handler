# Object property handler

> A simpler way to manage your object properties values:

## Installation:

```js
npm i -D property-handler
```

## Usage:

### Import the module property-handler:
```js
import propertyHandler from 'property-handler'
```

### Get object property value:
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

### You can use the same implementation for arrays:
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
propertyHandler.getProp(data, 'barbaz') // => [ {id: 0, name: 'baar'}, {id: 1, name: 'fooo'} ]
```