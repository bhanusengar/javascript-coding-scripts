'use strict'

let finalreverseString = '';
const reverseString = (inputString) =>{
  
  for(let i=(inputString.length-1); i>=0; i--){
    finalreverseString += inputString[i];
  }
  return finalreverseString;
    
}

const stringGiven = "bhanu";
const reverseStringResponse = reverseString(stringGiven);

console.log(`Reverse of string ${stringGiven} is ${reverseStringResponse}`)
