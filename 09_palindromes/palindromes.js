const palindromes = function (str) {
    /**filter out punctuation and spaces */
    const lowerCaseStr = str.toLowerCase();
    const filteredStr = lowerCaseStr.split('')
                        .filter(char => char.match(/[a-zA-Z]/))
                        .join('');

    /** split phrase in half */
    len = filteredStr.length;
    if (len % 2 === 0) {
        const firstHalf = filteredStr.slice(0, len/2);
        const secondHalf = filteredStr.slice(len/2, len);
        if (firstHalf === secondHalf.split('').reverse().join('')) {
            return true;
        }else {
            return false;
        }
    } 
    else {
        const middleValue = Math.round(len/2);
        const firstHalf = filteredStr.slice(0, middleValue - 2);
        const secondHalf = filteredStr.slice(middleValue + 1, len);
        if (firstHalf === secondHalf.split('').reverse().join('')) {
            return true;
        }else {
            return false;
        }
    }

};

palindromes('A car, a man, a maraca.');

// Do not edit below this line
module.exports = palindromes;
