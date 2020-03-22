# deep-map-with-key

> Creates a new functor with the results of calling a provided function on every element in the calling functor and its key

[![Build Status](https://travis-ci.org/saxjst/deep-map-with-key.svg?branch=master)](https://travis-ci.org/saxjst/deep-map-with-key)
[![Coverage Status](https://coveralls.io/repos/github/saxjst/deep-map-with-key/badge.svg?branch=master)](https://coveralls.io/github/saxjst/deep-map-with-key?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/841af7743a474bb61775/maintainability)](https://codeclimate.com/github/saxjst/deep-map-with-key/maintainability)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/saxjst/deep-map-with-key.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/saxjst/deep-map-with-key/context:javascript)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier/)

## Install

```
$ npm install deep-map-with-key
```

## Usage

```js
const { deepMapWithKey } = require("./backend-lib/deep-map-with-key");

const double = (key, val) => val * 2;

const cart = {
  rice: 2,
    fruits: {
      apple: 4,
      orange: 8
    }
  }
};

deepMapWithKey(double, cart); //=> { rice: 4, fruits: { apple: 8, orange: 16 } }
```

## API

### deepMapWithKey ⇒ `Object` \| `Array`

Creates a new functor with the results of calling a provided function on every element in the calling functor and its key

**Returns**: <code>Object</code> \| <code>Array</code> - Returns a new value after applying rules  
**Sig**: ((String, \*) -> \*) -> Object \| Array -> Object | Array

| Param   | Type                                      | Description                                                    |
| ------- | ----------------------------------------- | -------------------------------------------------------------- |
| fn      | <code>function</code>                     | The function to be called on every element of the input `list` |
| functor | <code>Object</code> \| <code>Array</code> | The functor to iterate over                                    |

**Example**

```js
const cart = { rice: 2, fruits: { apple: 4, orange: 8 } } };
const double = (key, val) => val * 2;
deepMapWithKey(double, cart); //=> { rice: 4, fruits: { apple: 8, orange: 16 } }
```

## License

MIT © [saxjst](https://saxjst.com)
