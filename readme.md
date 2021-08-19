# <img valign="text-bottom" height="49" src="assets/logo.svg" align="right"> awesome-readme-lint-double-link
> Lint double link in awesome readme

[![Actions Status](https://github.com/Scrum/awesome-readme-lint-double-link/workflows/Actions%20Status/badge.svg?style=flat-square)](https://github.com/Scrum/awesome-readme-lint-double-link/actions?query=workflow%3A%22CI+tests%22)[![node](https://img.shields.io/node/v/awesome-readme-lint-double-link.svg?style=flat-square)]()[![npm version](https://img.shields.io/npm/v/awesome-readme-lint-double-link.svg?style=flat-square)](https://www.npmjs.com/package/awesome-readme-lint-double-link)[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/xojs/xo)[![Coveralls status](https://img.shields.io/coveralls/Scrum/awesome-readme-lint-double-link.svg?style=flat-square)](https://coveralls.io/r/Scrum/awesome-readme-lint-double-link)

[![npm downloads](https://img.shields.io/npm/dm/awesome-readme-lint-double-link.svg?style=flat-square)](https://www.npmjs.com/package/awesome-readme-lint-double-link)[![npm](https://img.shields.io/npm/dt/awesome-readme-lint-double-link.svg?style=flat-square)](https://www.npmjs.com/package/awesome-readme-lint-double-link)[![Package Quality](http://npm.packagequality.com/shield/awesome-readme-lint-double-link.svg?style=flat-square)](http://packagequality.com/#?package=awesome-readme-lint-double-link)

## Why?
For absence in awesome duplicate link list

## Install

```bash
$ npm install awesome-readme-lint-double-link
```

> **Note:** This project is compatible with node v10+

## Usage

```js
const awesomeReadmeLintLink = require('awesome-readme-lint-double-link');
const md = `
# awesome you project

## Level 1

### Level 1.1

*Description leve 1.1*

- [text link 1](https://url-link-1) - A description link 1
- [text link 2](https://url-link-2) - A description link 2
- [text link 1](https://url-link-1) - A description link 3
`;

awesomeReadmeLintLink(md, options);
```
> Will show an error in the terminal
```bash
ERROR duplicate links found:
  ✖  https://url-link-1
```
