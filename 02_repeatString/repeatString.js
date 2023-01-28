const repeatString = function(stringInput, nbrRepeats) {
  let repeatedString = "";
  if(!stringInput){
    return repeatedString;
  }
  if(nbrRepeats < 0){
    return 'ERROR';
  }
  for (let i = 0; i < nbrRepeats; i++) {
    repeatedString += stringInput;
  }
  
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
