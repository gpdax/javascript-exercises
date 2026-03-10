const repeatString = function() {
    let string = arguments[0];
    let times = arguments[1];
    let result = '';

    if (times < 0) {
        return 'ERROR';
    }

    for (let i = 0; i < times; i++) {
        result += string;
    }

    return result;

};
console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
