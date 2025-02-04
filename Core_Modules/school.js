const EventEmitter = require('events');
class School extends EventEmitter{
startPeriod(){
    console.log('Class started');
    setTimeout(()=>{
    this.emit('bellRing','second period ended');
},2000);
}
}
module.exports = School;