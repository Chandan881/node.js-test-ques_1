const http = require("node:http");


const server = http.createServer((req,res)=>{

    if(req.url === '/' && req.method === 'GET')
    {
        res.write("Hello, world");
        res.end();
        return;
    }
    else
    {
     res.write("404 error");
     res.end();
     return;
    }
})

server.listen(3000,()=>{
    console.log(`server is up on http://localhost:3000`);
})