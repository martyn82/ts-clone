ts-essentials
========

[![Build Status](https://travis-ci.org/martyn82/ts-essentials.svg?branch=master)](https://travis-ci.org/martyn82/ts-essentials)

A small TypeScript library that contains some essential tools to build sophisticated applications.

The library contains:
* Object clone function
* Class name inflection from type
* Class name inflection from object
* Base exception
* Mixins / traits

## Prerequisites

Requirements:
* Node 6+

## Installation

    $ npm install

## Usage

Compile:

    $ npm run compile

Test run (requires compilation):

    $ npm test

Use in your application:

```
// TypeScript
import {Mixin} from "ts-essentials/target/build/main/lib/mixin";
    
@Mixin(SomeTrait, SomeOtherTrait)
class YourClass {
}
    
// JavaScript
var essentials = require("ts-essentials");
essentials.clone(foo);
```

Make sure to build the `ts-essentials` first.

## Documentation

Documentation is with the code.

## Licensing

Please consult the `LICENSE` file.
