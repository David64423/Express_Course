const http = require("http");
const fs= require("fs");
const port=3000;


const server = http.createServer((req, res)=>{
    const read=fs.createReadStream("./static/index.html");
    console.log(read);
    read.pipe(res);
});

server.listen(port);

console.log(`server on port ${port}`);