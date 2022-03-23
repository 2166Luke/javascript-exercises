/*simple method
const removeFromArray = function(array, ...args) {
    return array.filter(x => !args.includes(x));
};
*/

//longer form method
const removeFromArray = function(array, ...args) {

    args.forEach((arg) => {
        const index = array.indexOf(arg);
        if(index > -1) 
            array.splice(index, 1);
    });
    return array
}

removeFromArray([1,2,3,4],3);
removeFromArray([1,2,3,4],3,2);
removeFromArray([1,2,3,4], 7);
removeFromArray([1,2,3,4], 7,2);
removeFromArray(["hey",2,3,"ho"],"hey",3);
removeFromArray([1,2,3],"1",3);

// Do not edit below this line
module.exports = removeFromArray;
