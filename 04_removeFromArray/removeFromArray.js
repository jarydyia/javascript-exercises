
const arrList = [1,2,3,4] 
//ARGUMENT NOW IS #


const removeFromArray = function(array,...args) {
const newArray = [];

array.forEach((item)=>{ //1,2,3,4
    if(!args.includes(item)){ //IF FALSE IT WILL DO THIS ... make a new array with the numbers that arent in nte argument
        newArray.push(item);
    }
    console.log(newArray)
})

return newArray

};

// Do not edit below this line
module.exports = removeFromArray;
