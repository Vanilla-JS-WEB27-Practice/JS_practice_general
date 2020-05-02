
// Template
// Date: - May - 2020
// Source: 
// Title: 

// Instructions:
// 

// Examples:
// 

// Notes:
// 

// Sudo code:
// 1 - 

// Work: 

// ------------------------------------------------------------------------------------------------------------------

// Date: - May - 2020
// Source: https://edabit.com/challenge/pEzxi4MqHGrAi7ZdA
// Title: Find the Index (Part 1)

// Instructions:
// Create a function that finds the index of a given item.

// Examples:
// search([1, 5, 3], 5) ➞ 1
// search([9, 8, 3], 3) ➞ 2
// search([1, 2, 3], 4) ➞ -1

// Notes:
// If the item is not present, return -1.

// Work: 

// function search(arr, item){
//     // return arr.indexOf(item);
  
//     if (arr.includes(item)) {
//         const result = arr.indexOf(item)
        
//         return result;
//     } else {
//         return -1
//     }
// }

// console.log(search([1, 5, 3], 5));
// console.log(search([9, 8, 3], 3));
// console.log(search([1, 2, 3], 4));

// ------------------------------------------------------------------------------------------------------------------

// Date: 01 - May - 2020
// Source: https://edabit.com/challenge/4MSbtYFBiRtxHEkY8
// Title: Recursion: Length of a String

// Instructions:
// Write a function that returns the length of a string. Make your function recursive.

// Examples:
// length("apple") ➞ 5
// length("make") ➞ 4
// length("a") ➞ 1
// length("") ➞ 0

// Notes:
// Check the Resources tab for info on recursion.

// Work: 

// function length(str) {

//     const newArr = str.split('').length;

//     return newArr;
// }

// console.log(length('apple'));
// console.log(length('make'));
// console.log(length('a'));
// console.log(length(''));

// ------------------------------------------------------------------------------------------------------------------

// Date: 01 - May - 2020
// Source: https://edabit.com/challenge/niTEsddTdE4gs4YGX
// Title: Transform Upvotes

// Instructions:
// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

// Examples:
// transformUpvotes("6.8k 13.5k") ➞ [6800, 13500]
// transformUpvotes("5.5k 8.9k 32") ➞ [5500, 8900, 32]
// transformUpvotes("20.3k 3.8k 7.7k 992") ➞ [20300, 3800, 7700, 992]

// Notes:
// Return the upvotes as an array.

// Sudo code: (first attempt)
// 1 - write a function
// 2 - pass an argument ()
// 3 - use split to separate the string and set to a var
// 4 - map over the new array to check for .endsWith(k)
// 5 - then multiple by 1000

// Sudo code: (sudo code working through it)
// 1 - write a function
// 2 - pass an argument ()
// 3 - use split to separate the string and set to a const newArr
// 4 - set s second const secondArr and .map through
// 5 - check if num.endsWith('k)
// 6 - if it's false, return the argument num turned into an integer and multiplied by 1000
// 7 - if true, set a const newNumber and .split() at 'k
// 8 - then return the const newNumber turned into a number and multiplied by 1000

// Work: 
// function transformUpvotes(str) {
//     const newArr = str.split(' ');

    // return newArr;

    // const secondArr = newArr.map((num) => {
        // return num.endsWith('k') ? Number(num) * 1000 : Number(num); // --> returns the number by itself 

        // if (num.endsWith('k')){
        //     const newNumber = num.split('k');
                
        //         return Number.parseFloat(newNumber) * 1000;
                // if(newNumber === ' '){
                //     return null
                // } else {
                //     return  Number(newNumber) * 1000;
                // }
    //     } else {
    //         return Number(num);
    //     }
    // })


    // newArr.map((num) => {
    //     if(num.endsWith('k') ){
    //         return true
    //     } else {
    //         return null
    //     }
    // })

//     return secondArr;
// }

// console.log(transformUpvotes("6.8k 13.5k"));
// console.log(transformUpvotes("5.5k 8.9k 32"));
// console.log(transformUpvotes("20.3k 3.8k 7.7k 992"));


// ------------------------------------------------------------------------------------------------------------------

// Date: 30 - April - 2020
// Source: 
// Title: Concatenating two integer arrays

// Instructions:
// Create a function to concatenate two integer arrays.

// Examples:
// concat([1, 3, 5], [2, 6, 8]) --> [1, 3, 5, 2, 6, 8]
// concat([7, 8], [10, 9, 1, 1, 2]) --> [7, 8, 10, 9, 1, 1, 2]
// concat([4, 5, 1], [3, 3, 3, 3, 3]) --> [4, 5, 1, 3, 3, 3, 3, 3]

// Work: 
// function concat(arr1, arr2) {
//     // option 1 "new way"
//     // return [...arr1, ...arr2]

//     // option 2 "old way"
//     var result = arr1.concat(arr2);
//     return result
// }

// console.log(concat([1, 3, 5], [2, 6, 8])) 
// console.log(concat([7, 8], [10, 9, 1, 1, 2])) 
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3])) 


// ------------------------------------------------------------------------------------------------------------------

// Date: 30 - April - 2020
// Source: 
// Title: Are the Numbers Equal?

// Instructions:
// Create a function that returns true when num1 is equal to num2; otherwise return false.

// Examples:
// isSameNum(4, 8) ➞ false
// isSameNum(2, 2) ➞  true
// isSameNum(2, "2") ➞ false

// Work: 

// function isSameNum(num1, num2) {
//     // if(num1 === num2 ){
//     //     return true
//     // } else {
//     //     return false
//     // }

//     return num1 === num2 ? true : false;
// }

// console.log(isSameNum(4, 8));
// console.log(isSameNum(2, 2));
// console.log(isSameNum(2, '2'));


// ------------------------------------------------------------------------------------------------------------------

// Date: 29 - April - 2020
// Source: https://edabit.com/challenge/6kdGMdd78jpZ45ujo
// Title: Name Greeting!

// Instructions:
// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function but use an "arrow function".

// Examples:
// helloName("Gerald") ➞ "Hello Gerald!"
// helloName("Tiffany") ➞ "Hello Tiffany!"
// helloName("Ed") ➞ "Hello Ed!"

// Notes:
// The input is always a name (as string).
// Don't forget the exclamation mark!
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// Sudo code:
// 1 - write an arrow function
// 2 - pass an argument 

// Work: 

// const helloName = (name) => {
//      return `Hello ${name}!`
// }

// console.log(helloName('Sean'));
// console.log(helloName('Tiffany'));

// ------------------------------------------------------------------------------------------------------------------

// Date: 29 - April - 2020
// Source: https://edabit.com/challenge/JfB9mWmbwYHbupxCB
// Title: Divides Evenly

// Instructions:
// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

// Examples:
// dividesEvenly(98, 7) ➞ true
// # 98/7 = 14
// dividesEvenly(85, 4) ➞ false
// # 85/4 = 21.25
// console.log(dividesEvenly(98,7))
// console.log(dividesEvenly(85,4))

// Notes:
// a will always be greater than or equal to b.

// Sudo code:
// 1 - write a function
// 2 - pass 2 arguments (a, b)
// 3 - setup validation if/else to check that a is greater than b
// 4 - check using Number.isInteger(a/b)


// Work: 
// function dividesEvenly(a, b) {
//     if(b > a) {
//         return 'try again, the first argument must be greater than the second argument'
//     } else if (Number.isInteger(a/b)){
//         return true
//     } else {
//         return false
//     }
// }

// ------------------------------------------------------------------------------------------------------------------

// Date: 29 - April - 2020
// Source: https://edabit.com/challenge/tYHkTdFrEmWfxpPKF
// Title: Matchstick Houses

// Instructions:
// This challenge will help you interpret mathematical relationships both algebraically and geometrically.
// Matchstick Houses, Steps 1, 2 and 3
// Create a function that takes a number (step) as an argument and returns the amount of matchsticks in that step. See step 1, 2 and 3 in the image above.

// Examples:
// matchHouses(1) ➞ 6
// matchHouses(4) ➞ 21
// matchHouses(87) ➞ 436

// Notes:
// Step 0 returns 0 matchsticks.
// The input (step) will always be a non-negative integer.

// Sudo code:
// 1 - write a function
// 2 - pass an argument (step)
// 3 - write out if/else statements for the 0 and non-negative requirements
// 4 - write out an algebra expression for 1 === n
// 5 - write out an algebra expression for 1 < n

// Work: 

// function matchHouses(step) {
//     if(step < 0) {
//         return 'Try again, the argument needs to be greater than 0'
//     } else if (step === 0) {
//         return 0
//     } else if (step === 1) {
//         return 6
//     } else {
//         return ((step -1) * 5) + 6
//     }
// }

// console.log(matchHouses(1))
// console.log(matchHouses(4))
// console.log(matchHouses(87))

// ------------------------------------------------------------------------------------------------------------------

// Date: 28 - April - 2020
// Source: https://edabit.com/challenge/EzbfiquDoAc2Zc9FL
// Title: Is the String Empty?

// Instructions:
// Create a function that returns true if a string is empty and false otherwise.

// Examples:
// isEmpty("") ➞ true
// isEmpty(" ") ➞ false
// isEmpty("a") ➞ false

// Notes:
// A string containing only whitespaces " " does not count as empty.
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// Work: 
// function isEmpty(s){
//     if(s === '' || "") {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isEmpty(''));
// console.log(isEmpty(""));
// console.log(isEmpty(' '));
// console.log(isEmpty(" "));
// console.log(isEmpty('a'));
// console.log(isEmpty("a"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 28 - April - 2020
// Source: https://edabit.com/challenge/8q54MKnRrm89pSLmW
// Title: Convert Minutes into Seconds

// Instructions:
// Write a function that takes an integer minutes and converts it to seconds.

// Examples:
// convert(5) ➞ 300
// convert(3) ➞ 180
// convert(2) ➞ 120

// Notes:
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// Work: 
// function convert(minutes){
//     return minutes * 60;
// }

// console.log(convert(5));
// console.log(convert(3));
// console.log(convert(2));


// ------------------------------------------------------------------------------------------------------------------

// Date: 28 - April - 2020
// Source: https://edabit.com/challenge/3CaszbdZYGN4otQD8
// Title: Area of a triangle

// Instructions:
// Write a function that takes the base and height of a triangle and return its area.

// Examples:
// triArea(3, 2) ➞ 3
// triArea(7, 4) ➞ 14
// triArea(10, 10) ➞ 50

// Notes:
// The area of a triangle is: (base * height) / 2
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// Work: 
// function triArea(base, height){
//    return (base * height) / 2;
// }

// ------------------------------------------------------------------------------------------------------------------

// Date: 27 - April - 2020
// Source: https://edabit.com/challenge/4gzDuDkompAqujpRi
// Title: Add up the Numbers from a Single Number

// Instructions:
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples:
// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300

// Notes:
// Expect any positive number between 1 and 1000.

// Sudo code:
// 1 - build a function &#10004;
// 2 - pass it an argument `num` (number between 1 - 1000) &#10004;
// 3 - write a loop that adds each number from 1 - `num`
// 4 - return the sum

// Work: 
// function addUp(num){
//    return num * (num + 1) / 2
// }

// console.log(addUp(4));
// console.log(addUp(13));
// console.log(addUp(600));

// Resources: https://betterexplained.com/articles/techniques-for-adding-the-numbers-1-to-100/