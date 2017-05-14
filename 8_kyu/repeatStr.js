/*
source:
https://www.codewars.com/kata/string-repeat

Write a function called repeatStr which repeats the given string string exactly n times.
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr(num, word){

    var result = '';

    for(var i = 0; i < num; i++){
        result = result + word;
    };

    return result;
}

//Test
console.log(repeatStr(5,"Karol"));