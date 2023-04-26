const http = require('http')
const path = require('path')
const EventEmitter = require('events')
const Router = require('../framework/Router')
const Application = require('../framework/Application')
const userRouter = require('../src/user-router')
const jsonParser = require('../framework/parseJson')
const parseUrl = require('../framework/parseUrl')

const PORT = process.env.PORT || 5000
const emitter = new EventEmitter()
const app = new Application();

const router = new Router();

// router.get('/users', (req,res)=>{
//     res.end('YOU SEND REQUEST TO /USERS')
// })
//
// router.get('/posts', (req,res)=>{
//     res.end('YOU SEND REQUEST TO /POSTS')
// })

const server = http.createServer((req, res)=>{
    // res.writeHead(200,{
    //     'Content-type': 'application/json; charset=utf8'
    // })
    //
    // if (req.url === '/users'){
    //     return res.end(JSON.stringify([{
    //         name: 'Taras',
    //         surname: 'Sokha',
    //         id: 24
    //     }]))
    // }
    // if (req.url === '/post'){
    //     return res.end('POSTS')
    // }
    // res.end(req.url)

})

app.use(jsonParser)
app.use(parseUrl, 'http://localhost:5000')

app.addRouter(userRouter);

app.listen(PORT,()=> console.log(`Server started on ${PORT} port`))
