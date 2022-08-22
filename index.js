const x=require('./discount')


var events= require("events");
var eventEmitter=new events.EventEmitter();

var dprice= function(){
    console.log(x.disc(45))
}

eventEmitter.on("save",dprice)
eventEmitter.emit("save")
eventEmitter.off("save",dprice)