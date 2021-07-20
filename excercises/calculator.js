import {
    showInput
} from "./excercises.js";

let arr = [];
let result = 0;

function parseData(userString) {
    if (isNaN(userString)) {
        return false
    } else {

        return true;
    }

}

function storeValue(value) {
    //If array is empty
    if(arr < 1){
        arr.push(parseInt(value))    
    }else{
        arr[0] = result;
        arr.push(parseInt(value))
    }
    
    
}




function add(value) {
  
    result = parseInt(value) + parseInt(arr[0]);
    return result;
}

function sub(value) {
    result =  parseInt(arr[0]) - parseInt(value) ;
    return result;
}

function mul(value) {
    result = parseInt(value) * parseInt(arr[0]);
    return result;
}

function div(value) {
    result = parseInt(arr[0]) / parseInt(value);
    return result;
}

export {
    add,
    sub,
    mul,
    div,
    parseData,
    storeValue,
    arr
}