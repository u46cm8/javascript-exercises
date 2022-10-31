const palindromes = function (tex) {
    let counter = 0;

    tex = tex.toLowerCase();

    //getting rid of the punctuation wiht regular expressions
    let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    tex = tex.replace(regex, "");

    //removing all the spaces
    tex = tex.split(" ").join("");

    //iterrating through the input String to check if the match from the beginning and from the end
    for(let i = 0; tex.length>i; i++){
        if(tex[i] == tex[tex.length-i-1]){
            counter += 1;
        }
       
    }

    //the counter counts the matcha and if all letters match then its a palindrome and thus true is returned

    if(counter == (tex.length)){
        return true;
    }

    else{
        return false;
    }
    
};

// Do not edit below this line
module.exports = palindromes;
