const School = require('./school.js');
const EventEmitter = require('events');
const emitter = new EventEmitter();

// register a listner for bellRing event
const school = new School();
school.on('bellRing',(period)=>{
    console.log(`We need to run! because ${period}`)
});
school.startPeriod();
//raise an event 
// setTimeout(()=>{
// emitter.emit('bellRing','second period ended');
// },2000);