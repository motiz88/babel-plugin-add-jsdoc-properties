# babel-plugin-class-properties-7to6

[es7.classProperties](https://gist.github.com/jeffmo/054df782c05639da2adb) without [es6.classes](https://babeljs.io/docs/learn-es2015/#classes).

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
