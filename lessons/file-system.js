const fs = require('fs')
const path = require('path')

    //Synchronously make direction
// fs.mkdirSync(path.resolve(__dirname,'main','inner1','inner2'),{recursive: true});

    //Asynchronously make direction
// console.log('START');
//
// fs.mkdir(path.resolve(__dirname, 'dir'), (err)=>{
//     if (err){
//         console.log(err)
//         return;
//     } else {
//         console.log('dir created')
//     }
// })
//
// console.log('END');


    //Removing direction
// fs.rmdir(path.resolve(__dirname,'dir'), (err)=>{
//     if (err){
//         throw err;
//     }
// })

    //Write something to file
// fs.writeFile(path.resolve(__dirname,'test.txt'),'Inserted data 24/11/03', (err)=>{
//     if (err){
//         throw err
//     }
//     console.log('Data is stored into file')
// })

    //Add something to file
// fs.appendFile(path.resolve(__dirname,'test.txt'), 'is my birthday', (err)=>{
//     if (err){
//         throw err
//     }
//     console.log('We added info in the end of the file')
// })

    //                      CRUD
    //Writing promise in order not to face with callback hell
const writeFileAsync = async (path, data)=>{
    return new Promise((resolve,reject)=> fs.writeFile(path, data, (err)=>{
        if (err){
            return reject(err.message);
        }
        resolve();
    }))
}

const appendFileAsync = async (path, data)=>{
    return new Promise((resolve,reject)=> fs.appendFile(path, data, (err)=>{
        if (err){
            return reject(err.message);
        }
        resolve();
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve,reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data)=>{
        if (err){
            return reject(err.message);
        }
        resolve(data);
    }))
}


const removeFileAsync = async (path) => {
    return new Promise((resolve,reject) => fs.rm(path,  (err)=>{
        if (err){
            return reject(err.message);
        }
        resolve()
    }))
}

// writeFileAsync(path.resolve(__dirname,'test.txt'), "new data")
//     .then(()=> appendFileAsync(path.resolve(__dirname,'test.txt'),' lol | '))
//     .then(()=> appendFileAsync(path.resolve(__dirname,'test.txt'),'lol'))
//     .then(()=> readFileAsync(path.resolve(__dirname,'test.txt')))
//     .then((data)=> console.log(data))
//     .catch(err => console.log(err))

// removeFileAsync(path.resolve(__dirname,'test.txt'))
//     .then(()=> console.log('file was deleted'))

    // Через змінну оточення передати строку, записати її в файл,
    // прочитати файл, порахувати к-сть слів в файлі і записати
    // їх в новий файл count.txt, потім видалити перший файл

const text = process.env.TEXT || '';

writeFileAsync(path.resolve(__dirname, 'task.txt'), text)
    .then(()=> readFileAsync(path.resolve(__dirname, 'task.txt')))
    .then((data)=> data.split(' ').length)
    .then((count)=> writeFileAsync(path.resolve(__dirname, 'count.txt'),`Amount of words ${count}`))
    // .then(()=> removeFileAsync(path.resolve(__dirname,'task.txt')))
