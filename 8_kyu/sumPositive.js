/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: array may be empty, in this case return 0.
*/

function sumPositiveNumbers(arr){

if(arr.length === 0){
    return 0;
}

    var result = 0;

for(var i = 0; i < arr.length; i++){

    if(arr[i]>0){
        result = result + arr[i];
    }
}
    return result;
}

console.log(sumPositiveNumbers([1,-4,7,12]));