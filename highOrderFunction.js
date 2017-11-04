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

console.log(evenNumbers);

var employees = [
    { name: "John", Salary: 50000 },
    { name: "Susan", Salary: 60000 },
    { name: "Greg", Salary: 100000 },
    { name: "Mary", Salary: 120000 }
]

var dueForRaise = _.filter(employees, function(element) {
    return element.Salary < 75000;
})

console.log(dueForRaise);

//Every

var numbArray = [1, 3, 5, 7, 9];

var isAllEven = _.every(numbArray, function(element) {
    return element % 2 === 0;

})

console.log(isAllEven);

//some

var isSomeEven = _.some(numbArray, function(element) {
    return element % 2 === 0;
})

console.log(isSomeEven);

//reduce