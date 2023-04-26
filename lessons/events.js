const Emitter = require('events')

const emitter = new Emitter();

const MESSAGE = process.env.message || '';

emitter.on('message', (message, data)=>{
    console.log('Повідомлення: ' + message);
    console.log('Дані: ' + data);
})

// Can be emitted only once
const callback = emitter.once('once', (info)=>{
    console.log(`This event can be emitted only once.This arg is ${info}`);
})
emitter.emit('once','fakeInfo')
emitter.emit('once','fakeInfo2')

if (MESSAGE){
    emitter.emit('message', MESSAGE, {name:'Taras'}.name);
} else {
    emitter.emit('message', 'Ви не вказали аргументи')
}

// emitter.removeListener('once', callback);
// emitter.removeAllListeners('once ');

    //Where is used
// http
// websockets
// long pulling
// clusters
