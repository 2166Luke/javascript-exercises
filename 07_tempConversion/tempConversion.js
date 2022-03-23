const ftoc = function(temp) {
  let celsius = (5/9)*(temp-32);
  return (Math.round(celsius*10))/10;
};

const ctof = function(temp) {
  let fahrenheit = (9/5)*(temp)+32;
  return (Math.round(fahrenheit*10))/10;
};




// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
