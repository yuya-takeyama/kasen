# kasen.js

Underscore-like functional utilities based on ES2015 Generator.

## Usage

A list in argument can be both of an Array and an Object implements [Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)

```js
import _ from 'kasen';

_.map([1, 2, 3], function(num){ return num * 3; });
// => [3, 6, 9]
// But it's not an Array but a Generator!

_.reduce([1, 2, 3], (memo, num) => memo + num, 0);
// => 6

_.filter([1, 2, 3, 4, 5, 6], (num) => num % 2 === 0);
// => [2, 4, 6]
// But it's not an Array but a Generator!
```

## License

The MIT License
