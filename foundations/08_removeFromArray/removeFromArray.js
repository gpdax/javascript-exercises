const removeFromArray = function(array, itemToRemove) {
    return array.filter(item => item !== itemToRemove);
};

console.log(removeFromArray([1, 2, 3, 4], 3));
// Do not edit below this line
module.exports = removeFromArray;
