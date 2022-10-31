const fibonacci = function(limit) {
    let pre = 0; let post = 1; var result = 0; 
    // let ch = [];
    if(limit<0){
        return "OOPS";
    }
    for(let i = 0; limit>i; i++){
        
        
        result = post + pre;

        // ch.push(pre);
        pre = post;
        post = result;
    }
    return pre;

};

// Do not edit below this line
module.exports = fibonacci;
