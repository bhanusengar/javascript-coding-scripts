'use strict'

const reverseString = (inputString,seprator) =>{
  
  return inputString.split(seprator).reverse().join(seprator);
    
}

const stringGiven = "bhanu pratap";
// Split by character
const reverseStringResponse = reverseString(stringGiven,''); //patarp unahb
// Split by word
//const reverseStringResponse = reverseString(stringGiven,' '); //pratap bhanu

console.log(`Reverse of string ${stringGiven} is ${reverseStringResponse}`)
