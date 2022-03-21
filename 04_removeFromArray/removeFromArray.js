const removeFromArray = function(array, ...theArgs) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === theArgs.reduce()) {
            array.splice(i,1);
            i--;
        }
    }
    return array;
};

removeFromArray([1,2,3,4],3);
removeFromArray([1,2,3,4],3,2);

// Do not edit below this line
module.exports = removeFromArray;
