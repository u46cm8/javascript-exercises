const add = function() {
//same as sum as this was developed under the assumption that add had to do both
  let sum = 0;

  for(arg in arguments){

      if(Array.isArray(arguments[arg])){

          for(listed in arguments[arg]){

              sum += arguments[arg][listed];
          }
      }
      else{
          sum += arguments[arg];
      }
  }
  return sum;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function() {
  //same as sum as this was developed under the assumption that add had to do both
    let sum = 0;
  
    for(arg in arguments){
  
        if(Array.isArray(arguments[arg])){
  
            for(listed in arguments[arg]){
  
                sum += arguments[arg][listed];

            }
        }
        else{
            sum += arguments[arg];
        }
    }
    return sum;
};

const multiply = function() {
  let prod = 1;

  for(arg in arguments){
  
    if(Array.isArray(arguments[arg])){

        for(listed in arguments[arg]){

            prod= prod*arguments[arg][listed];

        }
    }
    else{
        prod = prod*arguments[arg];
    }

    if(arguments[arg].length<1 || arguments.length < 1){
      return 0;
    }
  return prod;

  }
};


const power = function(num1,num2) {
  return num1**num2;
	
};

const factorial = function(num) {
	let fact = 1;
  for(let i = 1; i<=num; i++){
    fact = fact * i;
  }
  
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
