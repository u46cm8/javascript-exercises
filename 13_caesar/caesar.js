const caesar = function(message, places) {


    let encyptedMessage = "";

    let encyptedLower = [];
    let unEedLower = [];
    let encyptedUpper = [];
    let unEedUpper = []


    function checkCharUpper(letter){
        return letter == letter.toUpperCase()
      };


    for(let i = 65; i<91; i++){
        encyptedLower.push(String.fromCharCode(i +32));
        unEedLower.push(String.fromCharCode(i + 32));
        encyptedUpper.push(String.fromCharCode(i));
        unEedUpper.push(String.fromCharCode(i));

    }


    
    if(places> 0){

        for(let i=0; places>i; i++){
            let holdLower = encyptedLower.shift();
            let holdUpper = encyptedUpper.shift();

            encyptedLower.push(holdLower);
            encyptedUpper.push(holdUpper);
        }
    }
    else if(places<0){
        let aPlaces = places * -1;
        for(let i=0; aPlaces>i; i++){
            let holdLower = encyptedLower.pop();
            let holdUpper = encyptedUpper.pop();

            encyptedLower.unshift(holdLower);
            encyptedUpper.unshift(holdUpper);        }

    }

    for(mess in message){
        
        
        if(!!message[mess].match(/^[.,:!?]/) || message[mess] == " "){
            encyptedMessage += message[mess];
        }
        else if(checkCharUpper(message[mess])){
            let place = unEedUpper.indexOf(message[mess]);
            //below is for testing 
            // console.log(place);
            encyptedMessage += encyptedUpper[place];
        }
        else{
            let place = unEedLower.indexOf(message[mess]);

            encyptedMessage += encyptedLower[place];
        }


    }

    return encyptedMessage;


};

// Do not edit below this line
module.exports = caesar;           


