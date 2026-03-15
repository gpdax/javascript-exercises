const add = function(a,b) {
	let sum = a + b;
  return sum;
}

const subtract = function(a,b) {
	let difference = a - b;
  return difference;
};

const sum = function(array) {
	let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }
  return product;
};

const power = function(a, b) {
	let power = a ** b;
  return power;
};

const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
