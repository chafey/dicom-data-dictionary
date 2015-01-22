# dicom-data-dictionary
DICOM Data Dictionary JavaScript Library

About
=====

The purpose of this library is to provide DICOM data dictionary functionality.  Currently it just provides
a set of standard tags from an unknown version of the DICOM standard.  See backlog for some ideas of things
to add in the future - pull requests are welcome!

Usage
=====

This library is written using JavaScript ES6 and distributed as an ES5 CommonJS NPM
module.  When using from Node.JS, you must require() the [6to5 polyfill](https://6to5.org/docs/usage/polyfill/)
before loading this library.  You should be able to use this library from a web browser
using browserify or jspm.

Install from NPM

> npm install dicom-data-dictionary

see example/example.js for usage from Node.js ES5

> npm run example

see example/example-es6.js for usage from Node.js with ES6

> npm run example-es6

Building
========

Pre-requisites
--------------

NodeJs - [click to visit web site for installation instructions](http://nodejs.org).

> npm install

Common Tasks
------------

Build

> npm run build

Automatically run lint, test and build on any file change

> npm run watch

Bump the patch version number

> npm version patch

Bump the minor version number
> npm version minor

Bump the major version number

> npm version major

Publish new version

> npm run publish

Backlog
=======

* Create tool to generate standardDataElements.js from actual standard xml file
* Add UID dictionary
* Add support for private tags

Copyright
============
Copyright 2015 Chris Hafey [chafey@gmail.com](mailto:chafey@gmail.com)