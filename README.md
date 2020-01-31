# Char Regex [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/char-regex/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/char-regex)

A regex to match any full character, considering weird character ranges. Extracted from https://github.com/lodash/lodash/blob/master/.internal/unicodeSize.js.

[![NPM Badge](https://nodei.co/npm/char-regex.png)](https://npmjs.com/package/char-regex)

## Install

```sh
npm install char-regex
```

## Usage

```js
const charRegex = require("char-regex");

"❤️👊🏽".match(/./)
//=> ["", "", "", "", "", "", ""]

"❤️👊🏽".match(charRegex())
//=> ["❤️", "👊🏽"]
```

## API

### charRegex()
