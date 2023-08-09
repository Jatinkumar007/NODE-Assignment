const http = require('http');

const server = http.createServer((request,response)=>{
   if(request.url==='/'){
    response.write(`<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>`)
   }
   response.end();
});
server.listen(3002);
console.log("The Http server is running");