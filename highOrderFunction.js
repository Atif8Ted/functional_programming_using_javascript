//mapping
var _ = require("lodash")

var numbers = [1, 2, 3, 4, 5]

var numbersCubed = _.map(numbers, function(element) {
    return element * element * element;
})

console.log(numbersCubed)

//filtering

var _ = require('lodash');
var numberArray = [1, 2, 3, 4, 5, 6];

var evenNumbers = _.filter(numberArray, function(element) {
    return element % 2 === 0;
})

console.log(evenNumbers)