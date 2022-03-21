const repeatString = function(string, num) {
    const result = string;
    for (i = 0; i < num; i++){
        return result.repeat(num);
    }
    if(num == 0){return ""}
    else if(num < 0) {return 'ERROR'}
    else if(string[0] == "") {return ""}
};

const number = Math.floor(Math.random() * 1000)

repeatString('hey', 3)
repeatString('hey', 10)
repeatString('hey', 1)
repeatString('hey', 0)
repeatString('hey', -1)
repeatString('hey', number)
repeatString('',10)
// Do not edit below this line
module.exports = repeatString;
