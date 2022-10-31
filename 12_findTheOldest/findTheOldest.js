const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldest;
    for(peeps in people){
        
        if(Object.hasOwn(people[peeps],"yearOfDeath")){
            let age = people[peeps].yearOfDeath - people[peeps].yearOfBirth;
            
            if(age>oldestAge){
                console.log("here we are");
                oldest = people[peeps];
                oldestAge = age;
            }

        }
        else{
            let today = new Date();
            let age = today.getFullYear() - people[peeps]['yearOfBirth'];
            if(age>oldestAge){
                oldest = people[peeps];
                oldestAge = age;
        }

    };
    
};

return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
