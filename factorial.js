'use strict'

function fact(num){
    if(num<=0){
        return 1;
    }
    return num*fact(num-1);
}

let n = 4;
answer = fact(n)
console.log("The factorial of " + n + " is " + answer);