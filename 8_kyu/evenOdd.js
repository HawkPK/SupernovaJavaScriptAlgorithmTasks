/*
Source:
https://www.codewars.com/kata/even-or-odd

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function compute(num){

   if(num % 2 != 0){
      return "Odd";
   } else
   {
      return "Even";
   }
}

console.log(compute(10));