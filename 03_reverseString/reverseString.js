let string = "hello"

const reverseString = function(string) {
    const reverseArr = [];
    let stringReverse = "";
    

    console.log(typeof(reverseArr))

    for ( i = string.length-1; i >= 0; i--){
        reverseArr.push(string[i])
    } 
    console.log(reverseArr)
    console.log(typeof(reverseArr[0]))
    console.log(reverseArr.join(""))// THIS MAKES IT SO SEPERATING EACH SECTION is not using a , 
    return reverseArr.join("");



    
};

// Do not edit below this line
module.exports = reverseString;
