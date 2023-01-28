const reverseString = function(randomString) {
  /**
   * loop through randmSring backwords last to first
   * concatenate each character to a reversedString variable
   * return the reversedString value 
   */

  let reversedString = "";
  for (let i = randomString.length - 1 ; i >= 0; i--) {
    reversedString += randomString[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
