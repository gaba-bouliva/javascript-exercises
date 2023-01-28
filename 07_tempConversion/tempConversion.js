const convertToCelsius = function(fahrenheit) {
  /**
   * Formule 
   * (fahrenheit - 32) * 5/9
   */ 
    let result = (fahrenheit - 32) * 5/9;
    
    return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function(celcius) {
  /**
   * Formule 
   * (celcius × 9/5) + 32
   */
    let result = (celcius * 9/5) + 32;

    return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
