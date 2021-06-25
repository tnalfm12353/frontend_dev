var port = 7070;
var http = require("http");

http.createServer((req, resp)=>{
    resp.writeHead(200, {
        "Content-Type" : "text/html"
    });
    resp.end("<h1>Hello World</h1>");
}).listen(port,()=>{
    console.log("Listening on : " + port);
})