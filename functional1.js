// function doIf(condition, func) {
//     if (condition) {
//         func()
//     }
// }

// const x = 1;

// doIf(x === 1, sayXis1);
// doIf(x === "Bananas", sayXisBananas);
// doIf(x < 10 && x > 0, sayXisBetween0And10);

// function sayXis1() {
//     console.log("X si equal to 1");
// }

// function sayXisBananas() { console.log("X is Bananas") };

// function sayXisBetween0And10() { console.log("X is between o and 10") };

/****Functional Programmung solution */

function doIf(condition, func) {
    if (condition) {
        func()
    }
}

const x = 1;

doIf(x === 1, function() {
    console.log("X is 1");
});
doIf(x === "Bananas", function() {
    console.log("X is bananas");
});
doIf(x < 10 && x > 0, function() {
    console.log("X is between 0 and 1");
});