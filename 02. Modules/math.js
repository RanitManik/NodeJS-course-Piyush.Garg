// module to calculate mathematical calculations

// add function
function add(a, b) {
    return a + b;
}

// subtraction function
function sub(a, b) {
    return a - b;
}

// multiplication function
function mul(a, b) {
    return a * b;
}

// division function
function div(a, b) {
    return a / b;
}

// exporting the modules =>

// Method 1:
module.exports = {add, sub, mul, div};

// Method 2:
/*
module.exports = {
    "addFn": add,
    "subFn": sub,
    "mulFn": mul,
    "divFn": div
};
*/

// Method 3:
/*
exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;
exports.mul = (a, b) => a * b;
exports.div = (a, b) => a / b;
*/
