var http = require('http');

var server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Basic Node Server</h1>');
});

server.listen(3000, function () {
    console.log('Server is live...');
})