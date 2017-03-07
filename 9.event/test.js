
/*var EventEmitter = require('events');

var emitter = new EventEmitter();

emitter.on('myEvent', () => {
    console.log('hi 1');
});

emitter.on('myEvent', () => {
    console.log('hi 2');
});

emitter.emit('myEvent');*/


const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('myEvent', function sth () {
    emitter.on('myEvent', sth);
    console.log('hi');
});

emitter.emit('myEvent');