const sumAll = function(lowerLimit, higherLimit) {

    let sum = 'ERROR';
    if(typeof(lowerLimit) === "number" && typeof(higherLimit)=== "number"){
        sum = 0
        if(lowerLimit>higherLimit){
            let h = lowerLimit;
            lowerLimit = higherLimit;
            higherLimit = h;
        }
        for(let i = lowerLimit; i<=higherLimit; i++){
            sum += i;
        }
        
    };
  
    if(sum>=0){
        return sum;
    }
    else{
        return "ERROR";
    };
};

// Do not edit below this line
module.exports = sumAll;
