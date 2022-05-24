let num1 = 1;
let num2 = 4
const sumAll = function(num1, num2) {
    let sum = 0 ;
    
    if( typeof(num1) != 'number' || typeof(num2) != 'number'){
        return 'ERROR'
    }if (typeof(num1)== 'string'   || typeof(num2) == 'string'){
        return 'ERROR'
    }else if (num1 < 0){
        return 'ERROR'
    }else if(num1> num2){
        for(i = num2; i <=num1; i++){
            sum+=i;
        }
    }else if(num1<num2){
        for(i = num1; i <= num2; i++){
            sum+=i;
        }
    }


    return sum

};

// Do not edit below this line
module.exports = sumAll;
