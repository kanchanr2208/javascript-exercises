const repeatString = function(string, repetitionNumber) {
    let word = String(string);
    let finalString = "";
    for (let i = 1; i <= repetitionNumber; i++) {
        finalString = finalString+string;
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
