const removeFromArray = function(listOfthings, ...removeThis) {
    let thingsAfterRemoval = [];
    for(thing in listOfthings){
        if(removeThis.includes(listOfthings[thing])){
            continue;
        }
        else{
            thingsAfterRemoval.push(listOfthings[thing]);
        }
    }
    return thingsAfterRemoval;

};

// Do not edit below this line
module.exports = removeFromArray;
