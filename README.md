# babel-plugin-class-properties-7to6

[es7.classProperties](https://gist.github.com/jeffmo/054df782c05639da2adb) without [es6.classes](https://babeljs.io/docs/learn-es2015/#classes).

**Note**: This plugin doesn't actually transform properties correctly at the moment. Instead, it just _removes_ class properties wherever they're encountered. This obviously breaks the code in the general case, but can still be helpful to apply before some tools (e.g. [JSDoc](https://github.com/jsdoc3/jsdoc)) that rely on pre-ES7 parsers.

The current behavior is enough for my needs. Of course, PRs reimplementing the required bits of [es6.classes](https://github.com/babel/babel/tree/master/src/babel/transformation/transformers/es6/classes) while still emitting valid ES6 are very welcome.

## Installation

```sh
$ npm install babel-plugin-class-properties-7to6
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["class-properties-7to6"]
}
```

### Via CLI

```sh
$ babel --plugins class-properties-7to6 script.js
```

### Via Node API

```javascript
require('babel').transform('code', {
  plugins: ['class-properties-7to6']
});
```
