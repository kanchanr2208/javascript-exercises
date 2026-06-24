const sumAll = function(a, b) {
    let sum = 0;
    let smaller = 0;
    let bigger = 0
    if (a > b) {
        smaller = b;
        bigger = a; 
    } else {
        smaller = a;
        bigger = b;
    }
    for (let i = smaller; i <= bigger; i++ ) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
