module.exports = function(num){
  if(!num) num = 1;
  var moment = require('moment');
  var epochs = ['y','M','d','h','m','s','ms'], dur = {}, times = [];
  for(var i = 0; i < num; i++){
    epochs.forEach(e=>{
      dur[e] = Math.floor(Math.random() * 20) + 1 ;
    });
    if(Math.floor(Math.random()*2) % 2) times.push(moment().add(dur));
    else times.push(moment().subtract(dur));
  }
  if(num === 1){
    return times[0]
  } else {
    return times;
  }
}
