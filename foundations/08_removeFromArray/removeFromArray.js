const removeFromArray = function(arr, ...toBeRemoved) {
    let filteredArray = arr;
       for (let i = 0; i < toBeRemoved.length; i++) {
        filteredArray = filteredArray.filter(item => item != toBeRemoved[i]);
       }
       return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
