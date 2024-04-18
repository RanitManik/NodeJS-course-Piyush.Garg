const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    // console.log(req.headers);
    fs.appendFile('log.txt', `${Date.now()}: ${req.url}: new Req received\n`, (err, data) => {
        if (err) {
            console.error(err);
        } else {
            switch (req.url) {
                case '/':
                    res.end("Hello World!");
                    break;
                case '/about':
                    res.end("I am Ranit Manik");
                    break;
                case '/contact':
                    res.end("ranitmanik.dev@gmail.com");
                    break;
                default:
                    res.end("404 Not Found");
            }
        }
    });
});

myServer.listen(3000, () => console.log("Server is running on port 3000"));