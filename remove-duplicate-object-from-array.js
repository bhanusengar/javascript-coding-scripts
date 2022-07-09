'use strict'

const arrList = [
                    {id: 1, name: 'Tom'},
                    {id: 1, name: 'Tom'},
                    {id: 2, name: 'Nick'},
                    {id: 2, name: 'Nick'}
                ]

let arrCheckDuplicate  = [];

const filteredArray = arrList.filter((currentVal)=>{
    const isDuplicate =  arrCheckDuplicate.includes(currentVal.id);
    if(!isDuplicate){
        arrCheckDuplicate.push(currentVal.id);
        return true;
    }
    return false;
});

console.log(filteredArray);