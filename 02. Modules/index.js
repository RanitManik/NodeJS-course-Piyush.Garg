// getting the functions as objects =>
const math = require("./math");
// getting the functions by object destructuring =>
/*const {add, sub, mul, div} = require("./math");*/

// usage of module =>
console.log("addition of 2 and 3:", math.add(2, 5));
console.log("subtraction of 2 and 3:", math.sub(2, 5));
console.log("multiplication of 2 and 3:", math.mul(2, 5));
console.log("division of 2 and 3:", math.div(2, 5));