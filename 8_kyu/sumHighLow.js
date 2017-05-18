/*
source: https://www.codewars.com/kata/sum-without-highest-and-lowest-number
Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

*/

function sumWithoutHighLow(numbers){

    function sortNumbers(a, b){
        return a - b;
    }

    if(numbers == null){
        return 0;
    }

    numbers.sort(sortNumbers);

    var result = 0;
    for(var i = 1; i < (numbers.length-1); i++){
            result = numbers[i] + result;
    }
    return result;
}

console.log(sumWithoutHighLow([1,1,2,11,4]));

function sumWithoutHighLowRef(numbers){
return !numbers || numbers.length < 4 ? 0 : numbers.sort((a, b) => a - b).slice(1, numbers.length - 1).reduce((a, b) => a + b);
}

console.log(sumWithoutHighLowRef([1,1,2,11,4]));