const repeatString = function(letters, repeats) {
    let repeated ="";

    if(repeats<0){
        return "ERROR";
    }

    for(let i=0; i<repeats; i++){
        repeated += letters; 
    }
    return repeated;

};

// Do not edit below this line
module.exports = repeatString;
