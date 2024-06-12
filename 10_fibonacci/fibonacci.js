const fibonacci = function(n) {
    if (n < 0){
        return "OOPS";
    }
    const sequence = [1, 1];
    if (n === 1 || n === 2) {
        return [0];
    } else {
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i-1] + sequence[i-2]);
        }
        return sequence[n - 1];
    }
};

fibonacci(10);



// Do not edit below this line
module.exports = fibonacci;
