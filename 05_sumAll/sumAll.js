/* first failed version
const sumAll = function(a,b) {
    
    if(a>b) {
        let finalSum = 0;
        let length = (a-b)+1;
        for (let i = b; i < length; i++){
        finalSum += (
            i + (i+1));
        return finalSum;
        }
    }
    else {
        let finalSum = 0;
        let length = (b-a)+1;
        for (let i = a; i < length; i++);
        finalSum += (i + (i+1));
        return finalSum;
    };
};*/

/* failed version
    const sumAll = function(a,b) {
        if (a < 0 || b < 0){return 'ERROR'}
        else if(a === NaN || b === NaN){return 'ERROR'}
        else if(a>b){
            while (i<a){
                return b+1;
            } 
        }
    }
*/

const sumAll = function(a,b) {
    if(typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0)
    {return 'ERROR'}
    else{
     const start = Math.min(a,b);
     const end = Math.max(a,b);
     let sum = 0;
     for(let i = start; i <= end; i++) {
     sum += i;
     }
     return sum
     }
}
sumAll(1,4)
sumAll(1, 4000)
sumAll(123, 1)
sumAll(-10,4)

// Do not edit below this line
module.exports = sumAll;
