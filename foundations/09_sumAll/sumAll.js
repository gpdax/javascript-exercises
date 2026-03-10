const sumAll = function() {
    let args = Array.from(arguments);
    let sum = 0;
    if (args.some(arg => typeof arg !== 'number' || !Number.isInteger(arg) || arg < 0)) {
        return 'ERROR';
    }
    let min = Math.min(...args);
    let max = Math.max(...args);
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

console.log(sumAll(1, 4)); // Output: 10


// Do not edit below this line
module.exports = sumAll;
