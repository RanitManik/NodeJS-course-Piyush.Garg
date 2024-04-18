const fs = require('fs');

// Synchronous call =>
fs.writeFileSync('./text1.txt', "This is an example text.");

// Asynchronous call =>
fs.writeFile('./text2.txt', "This is an example text.", (err) => {
    console.log("ERROR!")
});

// Synchronous call =>
const result = fs.readFileSync('./text.txt', "utf-8");
console.log(result);

// Asynchronous call =>
fs.readFile('./text.txt', "utf-8", (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
}); // asynchronous does not return anything...

// Appends string to a file =>
fs.appendFileSync("./text.txt", "\nThis is an example text.");

// copy a file content to another file =>
fs.cpSync("./text.txt", "./copy-text.txt");

// delete a file =>
fs.unlinkSync("./copy-text.txt");

// stat of a file =>
console.log(fs.statSync("./text.txt"));

// create a folder =>
fs.mkdirSync("./text");