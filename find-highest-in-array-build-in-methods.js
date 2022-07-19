'use strict'

let arrayList = [30,5,9,1,8,7,3];

//Solution-1 Start//

const highestValue = Math.max(...arrayList);
console.log(`Hightest using Math.max is ${highestValue}`)

//Solution-1 End//

//Solution-2 Start//

const sortedArrayList = arrayList.sort((a,b)=>b-a);
console.log(`Hightest using sort() is ${sortedArrayList[0]}`)

//Solution-2 End//


//Solution-3 Start//

const highestValueUsingReduce = arrayList.reduce((a,b)=>Math.max(a,b));
console.log(`Hightest using reduce() is ${highestValueUsingReduce}`)

//Solution-3 End//
