const fs = require('fs')
const path = require('path')

//Стріми дозволяють читати,записувати,апдейтити
// файли не весь цілком за раз, а по частинах,по 64 кілобайти

    //Here we read all file at once
// fs.readFile(path.resolve(__dirname,'test.txt'),(err,data)=>{
//     if (err){
//         throw err
//     }
//     console.log(data);
// })


    //Here we read it in parts (one chunk = 64kb)
// const stream = fs.createReadStream(path.resolve(__dirname,'test.txt'))
// stream.on('data', (chunk)=>{
//     console.log(chunk)
// })
//
// stream.on('end', ()=> console.log('Ended reading'))
// stream.on('open', ()=> console.log('Started reading'))
// stream.on('error', (e)=> console.log(e))

    //Here we write it in parts

// const writableStream = fs.createWriteStream(path.resolve(__dirname,'write_here.txt'))
// for (let i = 0; i <= 20; i++){
//     writableStream.write(i + '\n')
// }
//Here are different ways to close writing stream
// writableStream.end()
// writableStream.close()
// writableStream.destroy()
// writableStream.on('error')


const http = require('http')

http.createServer((req, res)=>{
    //req = readable stream
    //res = writable stream
    const stream = fs.createReadStream(path.resolve(__dirname,'test3.txt'))
    //Readable стрім не починає читати нову порцію даних
    //поки writable не закінчить записувати минулу порцію
    stream.pipe(res)
})
