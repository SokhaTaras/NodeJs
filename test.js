                    // Thread scheduler
// Thread pool has 4 threads(потоки) by default
// So, 5th crypto.pbkdf2(...) will start executing
// when one of threads will be free from previous execution

const crypto = require('crypto')

const start = Date.now();

crypto.pbkdf2('123tt','5',1000000, 64, 'sha512', ()=>{
    console.log('1st end', Date.now() - start);
})

crypto.pbkdf2('123tt','5',1000000, 64, 'sha512', ()=>{
    console.log('2nd end', Date.now() - start);
})

crypto.pbkdf2('123tt','5',1000000, 64, 'sha512', ()=>{
    console.log('3rd end', Date.now() - start);
})

crypto.pbkdf2('123tt','5',1000000, 64, 'sha512', ()=>{
    console.log('4th end', Date.now() - start);
})

crypto.pbkdf2('123tt','5',1000000, 64, 'sha512', ()=>{
    console.log('5th end', Date.now() - start);
})

// ===================================>


