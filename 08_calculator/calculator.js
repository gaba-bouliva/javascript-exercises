const add = function(firstNum, secondNum) {
	return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum;
};

const sum = function(numbers) {
	return numbers.reduce((sum, currentValue) => sum + currentValue, 0);
};

const multiply = function(numbers) { 
  
  let total = numbers[0];
  for (let i = 0; i < numbers.length - 1; i++) {
    total  *= numbers[i+1];
  }
  return total;

};

const power = function(nbr, pow) {
	return nbr**pow;
};

const factorial = function(nbr) {
  let factorial = 1;
  
  if(nbr === 0){
    return factorial;
  }

	for (let i = 1; i <= nbr; i++) {
    factorial *= i   
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
