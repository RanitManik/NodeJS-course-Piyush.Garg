const fs = require('fs');
const os = require('os');

// cpu cores =>
console.log(os.cpus().length);

// Synchronous call => Blocking =>
console.log("0");

// Synchronous call => Non-Blocking =>
fs.writeFile('./text1.txt', "This is an example text.", (err) => {
    if (err) throw err;
});

// Synchronous call => Blocking =>
console.log("1");

// Synchronous call => Non-Blocking =>
fs.readFile('./text.txt', "utf-8", (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});
