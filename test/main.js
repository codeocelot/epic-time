
var epoch = require('../index');
var moment = require('moment');
var assert = require('assert');

console.log(epoch().toString());
describe('get random times',()=>{
  it('should not give me today\'s date',()=>{
    var now = moment(), rand = epoch();
    var isRandom = ['y','M','d','h','m','s','ms'].some(u=>now.get(u) != rand.get(u));
    console.log(now.toString(),rand.toString())
    assert(isRandom);
  })
})
