// Write a program to generate the reverse of a given number N. Print the corresponding reverse number.

let number = 98752;
let reverse = 0;
let result = 0
while(number != 0){
    reverse = number % 10;
    result = result * 10 + reverse;
    number =  parseInt(number / 10);

}
console.log(result)