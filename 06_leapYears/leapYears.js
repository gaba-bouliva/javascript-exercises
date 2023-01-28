const leapYears = function(year) {
/**
 * Determine if year is a leap year
 * 
 * If year is divisable by 100 and it is divisable by 400 it is a leap year
 * If year is divisable by 100 and it is not divisable by 400 it is not a leap year
 * If year is divisable by 4 it is a leap year
 * 
 */
  if(year % 100 === 0 && year % 400 === 0) return true;
  if(year % 100 === 0 && year % 400 !== 0) return false;
  if(year % 4 === 0) return true;
  return false;
};

// Do not edit below this line
module.exports = leapYears;
