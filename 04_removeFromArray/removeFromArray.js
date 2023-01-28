const removeFromArray = function(randomArr, ...valueToDRemove) {
 return randomArr.filter((currentItem) => !valueToDRemove.includes(currentItem));
};

// Do not edit below this line
module.exports = removeFromArray;
