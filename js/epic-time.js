module.exports = function(){
  var moment = require('moment');
  var epochs = ['y','M','d','h','m','s','ms'], dur = {};
  epochs.forEach(e=>{
    dur[e] = Math.floor(Math.random() * 20) + 1 ;
  });
  if(Math.floor(Math.random()*2) % 2) return moment().add(dur);
  else return moment().subtract(dur);
}
