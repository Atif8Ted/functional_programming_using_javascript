function add(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}


function createCounter() {
    var count = 0;
    return {
        increment: function() {
            count += 1
        },
        currenValue: function() {
            return count
        }
    }
}

var myCounter = createCounter();

myCounter.count(); //throws errror.