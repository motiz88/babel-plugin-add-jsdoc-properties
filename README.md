# babel-plugin-jsdoc

Adds [JSDoc](https://github.com/jsdoc3/jsdoc) annotations to source code.

## Installation

```sh
$ npm install babel-plugin-jsdoc
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["jsdoc"]
}
```

### Via CLI

```sh
$ babel --plugins jsdoc script.js
```

### Via Node API

```javascript
require('babel').transform('code', {
  plugins: ['jsdoc']
});
```
