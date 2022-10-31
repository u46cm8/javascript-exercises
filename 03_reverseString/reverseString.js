const reverseString = function(toBeReversed) {
    let reversed = "";
    for(i in toBeReversed){
        reversed += toBeReversed[toBeReversed.length-i-1];
    }
    return reversed;

};

// Do not edit below this line
module.exports = reverseString;
