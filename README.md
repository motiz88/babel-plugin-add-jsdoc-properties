# babel-plugin-add-jsoc-properties

Adds [JSDoc](https://github.com/jsdoc3/jsdoc) annotations to source code.

[![Build Status](https://travis-ci.org/motiz88/babel-plugin-add-jsoc-properties.svg)](https://travis-ci.org/motiz88/babel-plugin-add-jsoc-properties)

This module only handles a handful of cases at the moment, designed to take the tedium out of documenting ES2015+ classes with JSDoc.

## Installation

```sh
$ npm install babel-plugin-add-jsoc-properties
```

## Usage

### Via JSDoc (Recommended)

Install [jsdoc-babel](https://github.com/ctumolosus/jsdoc-babel) and load `babel-plugin-add-jsoc-properties` within it.

**[conf.json](http://usejsdoc.org/about-configuring-jsdoc.html)**

```json
{
    "plugins": ["node_modules/jsdoc-babel"],
    "babel": {
        "plugins": ["jsdoc"]
    }
}
```

### Via `.babelrc`

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