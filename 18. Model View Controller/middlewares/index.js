fs = require('fs');

function logReqRes(filename) {
    return (req, res, next) => {
        fs.appendFile(filename, `\n id=> ${Date.now()} :: method=> ${req.method} :: path=> ${req.path}`, (err) => {
            if (err) {
                throw err;
            }
            next();
        });
    }
}

module.exports = {logReqRes};
