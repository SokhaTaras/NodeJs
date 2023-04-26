const os = require('os')
const cluster = require('cluster')

// Operation sys (OS)
// console.log(os.platform());

//Architecture of OS
// console.log(os.arch());

//Info about CPU
// console.log(os.cpus());


if (cluster.isMaster){
    for (let i = 0; i < os.cpus().length - 2; i++){
        cluster.fork();
    }
    cluster.on('exit', (worker)=>{
        console.log(`Воркер з id ${process.pid} вмер`);
        cluster.fork();
    })
}else {
    console.log(`Воркер з ід ${process.pid} запущений`);

    setInterval(()=>{
        console.log(`Воркер з id ${process.pid} все ще запущений`)
    },5000)
}
