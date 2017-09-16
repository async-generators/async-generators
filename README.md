# async-generators

[![Greenkeeper badge](https://badges.greenkeeper.io/async-generators/async-generators.svg)](https://greenkeeper.io/)
![logo](https://avatars1.githubusercontent.com/u/31987273?v=4&s=100)

convenience package combining the @async-generator packages

[![NPM version][npm-image]][npm-url]
[![Travis Status][travis-image]][travis-url]
[![Coverage][codecov-image]][codecov-url]
[![Dependencies][dep-image]][dep-url]
[![Greenkeeper][green-image]][green-url]


>
  * <a href="#exports">Exports</a>
  * <a href="#ts">Typescript</a>


<a name="exports"></a>
## Exports 

* <a href="#equal"><code><b>equal</b></code></a>

<a name="equal"></a>
### equal

[`@async-generators/equal`](https://github.com/async-generators/equal)

compare two iterator sequences for equality

```ts
let sequence = async function* () {
  yield 1; yield 2; yield 3;
}

let result = await equal(sequence(), sequence());
```

<a name="ts"></a>
## Typescript 

This library is fully typed and can be used by importing the methods you want to use. 

foo.ts
```ts
import {equal} from 'async-generators');

async function main(){
  let sequence = async function* () {
    yield 1; yield 2; yield 3;
  }

  let result = await equal(sequence(), sequence());
  
  console.log("equal:", result);
}

main();
```

It is also possible to directly execute your [properly configured](https://stackoverflow.com/a/43694282/1657476) typescript with [ts-node](https://www.npmjs.com/package/ts-node):

```
ts-node --harmony_async_iteration foo.ts
```

[npm-url]: https://npmjs.org/package/async-generators
[npm-image]: https://img.shields.io/npm/v/async-generators.svg
[npm-downloads]: https://img.shields.io/npm/dm/async-generators.svg
[travis-url]: https://travis-ci.org/async-generators/async-generators
[travis-image]: https://img.shields.io/travis/async-generators/async-generators/master.svg
[codecov-url]: https://codecov.io/gh/async-generators/async-generators
[codecov-image]: https://codecov.io/gh/async-generators/async-generators/branch/master/graph/badge.svg

[dep-url]: https://david-dm.org/async-generators/async-generators
[dep-image]: https://david-dm.org/async-generators/async-generators.svg
[green-url]: https://greenkeeper.io/
[green-image]: https://badges.greenkeeper.io/async-generators/async-generators.svg




