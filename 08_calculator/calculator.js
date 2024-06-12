const add = function(a, b) {
  let sum = a + b;
  return sum;
};

const subtract = function(a, b) {
	let difference = a - b;
  return difference;
};

const sum = function(array) {
	const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
return sum;
};

const multiply = function(a, b) {
  let product = a * b;
  return product;
};

const power = function(a, b) {
	power = Math.pow(a, b);
  return power;
};

const factorial = function(n) {
  let factorial = 1;
	for (let i = n; i >1; i--) {
    factorial *= i;
}
return factorial;
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
