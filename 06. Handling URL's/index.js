const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();
    const myURL = url.parse(req.url, true);
    fs.appendFile('log.txt', `${Date.now()}: ${req.url}: new Req received\n`, (err, data) => {
        if (err) {
            console.error(err);
        } else {
            switch (myURL.pathname) {
                case '/':
                    res.end("Hello World!");
                    break;
                case '/about':
                    const username = myURL.query.myname;
                    res.end(`HI, ${username}`);
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