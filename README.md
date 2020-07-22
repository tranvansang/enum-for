# enum-for [![Build Status](https://travis-ci.org/tranvansang/enum-for.svg?branch=master)](https://travis-ci.org/tranvansang/enum-for)
[![NPM](https://nodei.co/npm/enum-for.png)](https://nodei.co/npm/enum-for/)

Tiny library to get all values/keys of a Typescript enum.

## Install

- With `yarn`: `yarn add enum-for`
- With `npm`: `npm install --save enum-for`

## API reference

```javascript
import {getAllEnumKeys, getAllEnumValues, getAllEnumEntries} from 'enum-for'
```

- `getAllEnumKeys` returns all keys of the enum object
- `getAllEnumValues` returns all values of the enum object
- `getAllEnumEntries` returns all entries ([key, value]) of the enum object

## Source code
The source code of the project is very simple (3 LOCs). You can copy and use it directly in your project.

However, I recommend installing this package instead, because it is well tested.

```javascript
exports.getAllEnumKeys = enumType => Object.keys(enumType).filter(key => isNaN(Number(key)))
exports.getAllEnumValues = enumType => exports.getAllEnumKeys(enumType).map(key => enumType[key])
exports.getAllEnumEntries = enumType => exports.getAllEnumKeys(enumType).map(key => [key, enumType[key]])
```

## Example

```typescript
import {getAllEnumKeys, getAllEnumValues, getAllEnumEntries} from 'enum-for'

enum MyEnum {
  foo = 0,
  bar = '1',
  '1foo' = 2,
  '2foo' = '3'
}

console.log(getAllEnumKeys(MyEnum))
console.log(getAllEnumValues(MyEnum))
console.log(getAllEnumEntries(MyEnum))
console.log(Object.keys(MyEnum))
console.log(Object.values(MyEnum))
console.log(Object.entries(MyEnum))
```

This script will print. Note that the results returned from `Object.keys`, `Object.values` are incorrect.

```text
[ 'foo', 'bar', '1foo', '2foo' ]
[ 0, '1', 2, '3' ]
[ [ 'foo', 0 ], [ 'bar', '1' ], [ '1foo', 2 ], [ '2foo', '3' ] ]
[ '0', '2', 'foo', 'bar', '1foo', '2foo' ]
[ 'foo', '1foo', 0, '1', 2, '3' ]
[ [ '0', 'foo' ], [ '2', '1foo' ], [ 'foo', 0 ], [ 'bar', '1' ], [ '1foo', 2 ], [ '2foo', '3' ] ]
```
