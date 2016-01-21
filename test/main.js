
var epoch = require('../index');
var moment = require('moment');
var assert = require('assert');

describe('get random times',()=>{
  it('should not give me today\'s date',()=>{
    var now = moment(), rand = epoch();
    var isRandom = ['y','M','d','h','m','s','ms'].some(u=>now.get(u) != rand.get(u));
    assert(isRandom);
  })
  it('should return a different date each time',()=>{
    var times = [];
    for(var i = 0;i < 10; i++){
      times.push(epoch());
    }
    while(times.length > 0){
      var t = times.pop();
      assert(!times.some(el=>el == t));
    }
  })
})
