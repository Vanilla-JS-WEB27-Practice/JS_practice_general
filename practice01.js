
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

// Date: 13 - May - 2020
// Source: https://edabit.com/challenge/kuzB5CMXiKDEYKXAP
// Title: Is the Number Even or Odd?

// Instructions:
// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

// Examples:
// isEvenOrOdd(3) ➞ "odd"
// isEvenOrOdd(146) ➞ "even"
// isEvenOrOdd(19) ➞ "odd"

// Notes:
// Dont forget to return the result.
// Input will always be a valid integer.
// Expect negative integers (whole numbers).
// Tests are case sensitive (return "even" or "odd" in lowercase).

// Work: 
// function isEvenOrOdd(num) {
    // option 2
    // return num % 2 ? 'odd' : 'even';
    
    
    // option 1
    // const check = num % 2;
    // return check ? "odd" : "even";
// };

// console.log(isEvenOrOdd(3));
// console.log(isEvenOrOdd(146));
// console.log(isEvenOrOdd(19));

// ------------------------------------------------------------------------------------------------------------------

// Date: 13 - May - 2020
// Source: https://edabit.com/challenge/HT2dHkbzmLDZgsS7G
// Title: Promises IV: The Reject Callback

// Instructions:
// Async operations don't always go as planned. When errors creep up we need to know how to handle them. We can pass the reject callback to our executor function to pass errors to our promise.

// Examples:
// let promise = new Promise( (resolve, reject) => {
//   setTimeout(( ) => {
//     /* something went wrong */
//      reject('oops!')
//   }, 1000)
// })

// Notes:
// You can pass Error objects as well. Here we pass a simple string "oops!".
// Reject the promise with the simple string "It's not a dog!".
// Check the Resources tab for more info on promises.

// Work: 
// let promise = new Promise( (resolve) => {
// 	let animal = "cat"
//   setTimeout(() => {
// 		if(animal === "dog") {
// 			resolve("It's a dog!")
// 		} 
// 	  if(animal !== "dog") {
// 			reject( "It's not a dog!")
// 		}
//   }, 1000)
// })

// ------------------------------------------------------------------------------------------------------------------

// Date: 12 - May - 2020
// Source: https://edabit.com/challenge/kbFhwaDyrd79JrgeB
// Title: Count Instances of a Character in a String

// Instructions:
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// Examples:
// charCount("a", "edabit") ➞ 1
// charCount("c", "Chamber of secrets") ➞ 1
// charCount("b", "big fat bubble") ➞ 4

// Notes:
// Your output must be case-sensitive (see second example).

// Work: 
// function charCount(myChar, str) {
//     const arr = str.split('');
//     const newArr = arr.filter(char => {
//         if(char === myChar){
//             return char
//         } else {
//             return null
//         }
//     })
//     return newArr.length;
// }

// console.log(charCount('a', 'edabit'));
// console.log(charCount('c', 'Chamber of secrets'));
// console.log(charCount('b', 'big fat bubble'));

// ------------------------------------------------------------------------------------------------------------------

// Date: 11 - May - 2020
// Source: https://edabit.com/challenge/3kcrnpHk7krNZdnKK
// Title: Convert a Number to Base 2

// Instructions:
// Create a function that returns a base 2 (binary) representation of a base 10 (decimal) string number. To convert is simple: ((2) means base 2 and (10) means base 10) 010101001(2) = 1 + 8 + 32 + 128.
// Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

// Examples:
// binary(1) ➞ "1"
// 1*1 = 1
// binary(5) ➞ "101"
// 1*1 + 1*4 = 5
// binary(10) ➞ "1010"
// 1*2 + 1*8 = 10

// Notes:
// Numbers will always be below 1024 (not including 1024).
// The && operator could be useful.
// The strings will always go to the length at which the most left bit's value gets bigger than the number in decimal.

// Additional notes: parseInt() is the function that does this already. Takes two arguments and returns an integer in the specified radix (second argument, basically which base you want between 2 - 36). Binary is base 2, decimal is base 10. octal is base 8, hexadecimal is base 16 (hex codes)

// Work: 
// function binary(decimal){
//     return parseInt(decimal, 10).toString(2);
// }

// console.log(binary(1));
// console.log(binary(5));
// console.log(binary(10));

// ------------------------------------------------------------------------------------------------------------------

// Date: 10 - May - 2020
// Source: https://edabit.com/challenge/ms3q5GYSpFpwxeFWX
// Title: Volume of a Box

// Instructions:
// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

// Examples:
// volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30

// Notes:
// Don't forget to return the result.
// Remember that the values are in an object.
// Volume is length * width * height.

// Work: 

// function volumeOfBox(sizes){
//     const nums = Object.values(sizes);
//     return nums[0] * nums[1] * nums[2];
// }

// console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));
// console.log(volumeOfBox({ width: 4, length: 2, height: 2 }));
// console.log(volumeOfBox({ width: 2, length: 3, height: 5 }));

// ------------------------------------------------------------------------------------------------------------------

// Date: 10 - May - 2020
// Source: https://edabit.com/challenge/z6Pxiw289JtaE2ndL
// Title: Find the Index (Part 2)

// Instructions:
// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

// Examples:
// search([1, 2, 3, 4], 3) ➞ 2
// search([2, 4, 6, 8, 10], 8) ➞ 3
// search([1, 3, 5, 7, 9], 11) ➞ -1

// Notes:
// If the item is not present, return -1.
// The given array is ordered.

// Work: 
// function search(arr, item){
//     return arr.indexOf(item);
// }

// console.log(search([1,2,3,4], 3));
// console.log(search([2,4,6,8,10], 8));
// console.log(search([1,3,5,7,9], 11));

// ------------------------------------------------------------------------------------------------------------------

// Date: 10 - May - 2020
// Source: https://edabit.com/challenge/H25aG5aAdmFcMpBsg
// Title: To the Power of _____

// Instructions:
// Create a function that takes a base number and an exponent number and returns the calculation.

// Examples:
// calculateExponent(5, 5) ➞ 3125
// calculateExponent(10, 10) ➞ 10000000000
// calculateExponent(3, 3) ➞ 27

// Notes:
// All test inputs will be positive integers.
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// Work: 
// function calculateExponent(num, exp) {
//     return Math.pow(num, exp);
// }

// console.log(calculateExponent(5, 5));
// console.log(calculateExponent(10, 10));
// console.log(calculateExponent(3, 3));

// ------------------------------------------------------------------------------------------------------------------

// Date: 09 - May - 2020
// Source: https://edabit.com/challenge/d9suvbchE2bnHNQuK
// Title: Frames Per Second

// Instructions:
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// Examples:
// frames(1, 1) ➞ 60
// frames(10, 1) ➞ 600
// frames(10, 25) ➞ 15000

// Notes:
// FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.
// Assume the screen produces 60 frames every second.

// Work: 
// function frames(minutes, fps){
//     return (minutes * 60) * fps;
// }

// console.log(frames(1, 1));
// console.log(frames(10, 1));
// console.log(frames(10, 25));

// ------------------------------------------------------------------------------------------------------------------

// Date: 08 - May - 2020
// Source: https://edabit.com/challenge/hD3euqPHM82Cbr7R8
// Title: Largest Swap

// Instructions:
// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

// Examples:
// largestSwap(27) ➞ false
// largestSwap(43) ➞ true
// largestSwap(14) ➞ false
// largestSwap(53) ➞ true
// largestSwap(99) ➞ true

// Notes:
// Numbers with two identical digits (third example) should yield true (you can't do better). 

// Work: 
// function largestSwap(num){
//     const sep = num.toString();
//     const sep2 = sep.split('');
//     const reverse = sep2.reverse();
//     const join = reverse.join('');
    
//     if (num > Number(join)){
//         return true;
//     } else if (num === Number(join)){
//         return true
//     } else {
//         return false
//     }

    // return join;
// }

// console.log(largestSwap(99));

// ------------------------------------------------------------------------------------------------------------------

// Date: 07 - May - 2020
// Source: https://edabit.com/challenge/cePrimGCGmaRrFHWv
// Title: Burrrrrrrp

// Instructions:
// Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.

// Examples:
// longBurp(3) ➞ "Burrrp"
// longBurp(5) ➞ "Burrrrrp"
// longBurp(9) ➞ "Burrrrrrrrrp"

// Notes:
// Expect num to always be >= 1.
// Remember to use a capital "B".
// Don't forget to return the result.

// Work: 

// function longBurp(num) {
//     const r = "r"; 
//     const burp = `Bu${r.repeat(num)}p`;
//     return burp;
// }

// console.log(longBurp(3));
// console.log(longBurp(5));
// console.log(longBurp(7));

// ------------------------------------------------------------------------------------------------------------------


// Date: 07 - May - 2020
// Source: https://edabit.com/challenge/hPWnaSckJke5FXNEH
// Title: Is it Time for Milk and Cookies?

// Instructions:
// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

// Examples:
// timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true
// timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false
// timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true

// Notes:
// Dates are zero zero based (see resources).
// All test cases contain valid dates.

// Work: 
// function timeForMilkAndCookies(date) {
    
//     const month = date.getMonth();
//     const varDate = date.getDate();
  
//     // console.log(month, day);
//     if(month === 11 && varDate === 24){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(timeForMilkAndCookies(new Date(3000, 11, 24)));

// ------------------------------------------------------------------------------------------------------------------

// Date: 05 - May - 2020
// Source: https://edabit.com/challenge/QifJBFwg32GNdiWQa
// Title: Stack the Boxes

// Instructions:
// Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on...
// Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.

// Examples:
// stackBoxes(1) ➞ 1
// stackBoxes(2) ➞ 4
// stackBoxes(0) ➞ 0

// Notes:
// Step n is a positive integer.

// Work: 

// function stackBoxes(n) {
    // option 1
    // if(n > 0){
    //     return Math.pow(n, 2);
    // } else {
    //     return 0;
    // }
    
    // option 2
    // if(n > 0){
    //     return n*n;
    // } else {
    //     return 0;
    // }
// }

// console.log(stackBoxes(0));
// console.log(stackBoxes(1));
// console.log(stackBoxes(2));
// console.log(stackBoxes(3));
// console.log(stackBoxes(4));
// console.log(stackBoxes(5));


// ------------------------------------------------------------------------------------------------------------------

// Date: 05 - May - 2020
// Source: https://edabit.com/challenge/7JBTN4TbaxJQMdX9W
// Title: Return the Last Element in an Array

// Instructions:
// Create a function that accepts an array and returns the last item in the array.

// Examples:
// getLastItem([1, 2, 3]) ➞ 3
// getLastItem(["cat", "dog", "duck"]) ➞ "duck"
// getLastItem([true, false, true]) ➞ true

// Notes:
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.


// Work: 
// function getLastItem(arr) {
//     return arr.pop();
// }

// console.log(getLastItem([1, 2, 3]));
// console.log(getLastItem(['cat', 'dog', 'duck']));
// console.log(getLastItem([true, false, true]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 05 - May - 2020
// Source: Check if an Array Contains a Given Number
// Title: https://edabit.com/challenge/SwyjHvkqwwQ2iJsoS

// Instructions:
// Write a function to check if an array contains a particular number.

// Examples:
// check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false

// Notes:
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.


// Work: 

// function check(arr, el){
//     if(arr.includes(el)){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(check([1, 2, 3, 4, 5], 3));
// console.log(check([1, 1, 2, 1, 1], 3));
// console.log(check([5, 5, 5, 6], 5));
// console.log(check([], 5));

// ------------------------------------------------------------------------------------------------------------------

// Date: 05 - May - 2020
// Source: https://edabit.com/challenge/nhXofMMyrowMyr9Nv
// Title: Maximum Edge of a triangle

// Instructions:
// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

// Examples:
// nextEdge(8, 10) ➞ 17
// nextEdge(5, 7) ➞ 11
// nextEdge(9, 2) ➞ 10

// Notes:
// (side1 + side2) - 1 = maximum range of third edge.
// The side lengths of the triangle are positive integers.
// Don't forget to return the result.

// Work: 
// function nextEdge( side1, side2) {
//     return (side1 + side2) - 1;
// }

// console.log(nextEdge(8, 10))
// console.log(nextEdge(5, 7))
// console.log(nextEdge(9, 2))

// ------------------------------------------------------------------------------------------------------------------

// Date: 04 - May - 2020
// Source: https://edabit.com/challenge/o7TwicAHWuMkjbDqQ
// Title: Which Function Returns the Larger Number?

// Instructions:
// Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.
// If f returns the larger number, return the string f.
// If g returns the larger number, return the string g.
// If the functions return the same number, return the string neither.

// Examples:
// whichIsLarger(() => 5, () => 10) ➞ "g"
// whichIsLarger(() => 25,  () => 25) ➞ "neither"
// whichIsLarger(() => 505050, () => 5050) ➞ "f"

// Notes:
// This exercise is designed as an introduction to higher order functions (functions which use other functions to do their work).

// Work: 

// function whichIsLarger(f, g) {
//     
    // Option 2:
    // if(f() > g()){
	// 	return "f";
	// } else if(f() === g()){
	// 	return "neither"
	// } else if(f() < g()){
	// 	return "g"
	// } else {
	// 	return null
	// }

//  Option 1:
//      const newF = f();
//      const newG = g();
    
//     if(newF > newG) {
//         return "f";
//     } else if(newF === newG) {
//         return "neither";
//     } else if(newF < newG) {
//         return "g";
//     } else {
//         return null;
//     }
// }

// console.log(whichIsLarger(() => 5, () => 10));
// console.log(whichIsLarger(() => 10, () => 5));
// console.log(whichIsLarger(() => 25, () => 25));
// console.log(whichIsLarger(() => 220, () => 25));

// ------------------------------------------------------------------------------------------------------------------

// Date: 03 - May - 2020
// Source: https://edabit.com/challenge/Q3n42rEWanZSTmsJm
// Title: Find the Smallest and Biggest Numbers

// Instructions:
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples:
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]

// Notes:
// All test arrays will have at least one element and are valid.

// Work: 

// function minMax(arr) {
//     return [Math.min(...arr), Math.max(...arr)];
// }

// console.log(minMax([1, 2, 3, 4, 5]));
// console.log(minMax([2334454, 5]));
// console.log(minMax([1]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 02 - May - 2020
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