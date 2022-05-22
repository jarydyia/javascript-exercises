let phrase = "bleep"
let repeater = 10

const repeatString = function(phrase, repeater) {
    // if(phrase === ""){
    //     return ""
    // }
    if (repeater <0 ){
        return "ERROR";
    }

    let phraseCompletion = "";

    for(i = 0; i < repeater ; i++){
        phraseCompletion = phraseCompletion + phrase
    }

    return phraseCompletion


};

// Do not edit below this line
module.exports = repeatString;
