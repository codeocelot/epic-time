# epic-time
[![Coverage Status](https://coveralls.io/repos/github/codeocelot/epic-time/badge.svg?branch=master)](https://coveralls.io/github/codeocelot/epic-time?branch=master)

Mock dates in javascript.

## How to use: 

Epic returns pseudo-random momentjs dates, great for mocking & testing.  

    var epic = require('epic-time');
    var singleDate = epic();
    var dates = epic(5); // [ Date, Date, Date, Date, Date]

## Contribute
Fork, ensure test covereage and submit a PR. 

## Dependencies
Just momentjs

