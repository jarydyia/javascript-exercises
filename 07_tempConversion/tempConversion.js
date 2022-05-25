let tempF = 100;
const ftoc = function(tempF) {
let tempCel = (tempF -32) * (5/9);
tempCel = Math.round(tempCel *10)/10
return tempCel;
};

let tempC = 0

const ctof = function(tempC) {
let tempFar = tempC * (9/5) +32
tempFar =   Math.round(tempFar * 10)/10
return tempFar;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
