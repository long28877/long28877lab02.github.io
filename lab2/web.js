// tao web server voi node.js 

// 1. khai bao & import thu vien http
const http = require('http')
// 2. khai bao host (server)
const host = 'localhost'
// 3. khai bao server port (default : 3000)
const port = 3000
// 4. tao server 
const server = http.createServer((request, respond) => {
    respond.write("<h1> this is Nodejs web server</h1>")
})
// 5. chay server bang cach listen port 
server.listen(port)


