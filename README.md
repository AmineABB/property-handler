# PropertyHandler
> A simpler way to manage your object properties values

## Installation:

```js
npm i -D property-handler
```

## Usage:

### Import the module property-handler:
```js
import propertyHandler from 'property-handler'
```
**There are two ways for finding object property value, directly by calling the name of the property or via string like 'foo.bar'**

## By using the name directly:
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

### It also powerful if we want to get all values of a property name present in multiple levels:
```js
const data = [
    {
        "first_name": "foo",
        "email": "foo@foo.com"
    }, 
    {
        "first_name": "baar",
        "email": "baar@baar.com"
    },
    {
        "first_name": "barbaz",
        "email": "barbaz@barbaz.com"
    }
]
propertyHandler.getProp(data, 'first_name') // => Array ["foo", "baar", "barbaz"]
```

## By using dot string:
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
propertyHandler.getProp(data, 'barbaz.1.name') // => fooo
```

```js
const data = [
    {
        "first_name": "foo",
        "email": "foo@foo.com"
    }, 
    {
        "first_name": "baar",
        "email": "baar@baar.com"
    },
    {
        "first_name": "barbaz",
        "email": "barbaz@barbaz.com"
    }
]
propertyHandler.getProp(data, '1.first_name') // => baar
```