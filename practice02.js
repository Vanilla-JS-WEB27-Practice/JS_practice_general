// Template
// Date: - February - 2021
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

// Date: 13 - February - 2021
// Source: https://edabit.com/challenge/pbK3wzLDvdwfEKgMt
// Title: Broken Keyboard

// Instructions:
// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). 
// The function looks like:
// findBrokenKeys(correct phrase, what you actually typed)

// Examples:
// findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]
// findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]
// findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]

// Notes:
// Broken keys should be ordered by when they first appear in the sentence.
// Only one broken key per letter should be listed.
// Letters will all be in lower case.

// Work:
// modified solution from ripster on edabit
// const findBrokenKeys = (str1, str2) => [...new Set(str1.split("").filter((a,i) => a !== str2[i]))];

// my solution 
// const findBrokenKeys = (str1, str2) => {
//   const result = [];
//   const num1 = str1.split("");
//   const num2 = str2.split("");
//   num1.map((x,i) => {
//     if(num2[i] !== num1[i] && result.indexOf(x) < 0){
//       result.push(x)
//     }
//   })
//   return result
// }

// console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
// console.log(findBrokenKeys("starry night", "starrq light"));
// console.log(findBrokenKeys("beethoven", "affthoif5"));
// console.log(findBrokenKeys("mozart", "aiwgvx"));
// console.log(findBrokenKeys("!!??$$", "$$!!??"));

// ------------------------------------------------------------------------------------------------------------------

// Date: - February - 2021
// Source: https://edabit.com/challenge/CvPCBc9FtTLix9zov
// Title: Purge and Organize

// Instructions:
// Given an array of numbers, write a function that returns an array that...
// Has all duplicate elements removed.
// Is sorted from least to greatest value.

// Examples:
// uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]
// uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]
// uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]

// Work:

// solution from guilherme on edabit
// const uniqueSort = arr => [...new Set(arr)].sort((a, b) => a - b)

// first pass
// const uniqueSort = (arr) => {
//   const result = [];
//   arr.sort((a,b) => a-b).map(x => {
//     if (result.indexOf(x) < 0){
//       result.push(x);
//     }
//   })
//   return result
// }

// console.log(uniqueSort([1,2,4,3]));
// console.log(uniqueSort([1,4,4,4,4,4,3,2,1,2]));
// console.log(uniqueSort([6,7,3,2,1]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 10 - February - 2021
// Source: https://edabit.com/challenge/5sdtyMNdLw2FK4fHp
// Title: Inclusive Array Ranges

// Instructions:
// Write a function that, given the start startNum and end endNum values, return an array containing all the numbers inclusive to that range. See examples below.

// Examples:
// inclusiveArray(1, 5) ➞ [1, 2, 3, 4, 5]
// inclusiveArray(2, 8) ➞ [2, 3, 4, 5, 6, 7, 8]
// inclusiveArray(10, 20) ➞ [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// inclusiveArray(17, 5) ➞ [17]

// Notes:
// The numbers in the array are sorted in ascending order.
// If startNum is greater than endNum, return an array with the higher value. See example #4.
// A recursive version of this of challenge can be found via this link (https://edabit.com/challenge/v46dEzuJvHKawduxb).

// Work:

// s = startNumber
// e = endNumber
// const inclusiveArray = (s, e) => s > e ? [s] : Array(Math.ceil((e+1)-s)).fill(s).map((x,y) => x+y)

// other options to create an array in JS:
// from a static amount, but uses only the indexes.
// const inclusiveArray = (s, e) => Array.from({length:e}, (x,i) => i)
// const inclusiveArray = (s, e) => Array.from(new Array(e), (x,i) => i)

// again just pulling the index --> these examples need to add up
// const inclusiveArray = (s, e) => [...Array(e).keys()]

// console.log(inclusiveArray(1,5));
// console.log(inclusiveArray(2,8));
// console.log(inclusiveArray(10,20));
// console.log(inclusiveArray(17,5));

// ------------------------------------------------------------------------------------------------------------------

// Date: 09 - February - 2021
// Source: https://edabit.com/challenge/7pAcMPNur4JcXreHS
// Title: How Heavy Is It?
// Resource: https://www.conversionunites.com/converter-cubic-centimetre-to-cubic-decimetre, 
// https://www.varsitytutors.com/hotmath/hotmath_help/topics/volume-of-a-cylinder#:~:text=The%20formula%20for%20the%20volume,V%3D%CF%80r2h%20.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI 

// Instructions:
// Given radius r and height h (in cm), calculate the mass of a cylinder when it's filled with water and the cylinder itself doesn't weigh anything. 
// The desired output should be given in kg and rounded to two decimal places.
// How to solve:
// Calculate the volume of the cylinder.
// Convert cm³ into dm³.
// 1dm³ = 1L, 1L is 1Kg.

// Examples:
// weight(4, 10) ➞ 0.5
// weight(30, 60) ➞ 169.65
// weight(15, 10) ➞ 7.07

// Work:
// const weight = (r,h) => Number(((Math.PI*r**2*h)/1000).toFixed(2));

// console.log(weight(4,10));
// console.log(weight(30,60));
// console.log(weight(15,10));

// ------------------------------------------------------------------------------------------------------------------

// Date: 08 - February - 2021
// Source: https://edabit.com/challenge/wQGGp6Qce6phDCvW9
// Title: Do All Bigrams Exist?

// Instructions:
// You are given an input array of bigrams, and an array of words.
// Write a function that returns true if every single bigram from this array can be found at least once in an array of words.

// Examples:
// canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true
// canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
// # "cu" does not exist in any of the words.
// canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]) ➞ true
// canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) ➞ false

// Notes:
// A bigram is string of two consecutive characters in the same word.
// If the array of words is empty, return false.

// Work:
// condensed version of Olmo Leonardo's solution
// const canFind = (b, w) => b.every(x=> w.some(y=> y.includes(x)))


// solution from Edabit user Olmo Leonardo
// function canFind(bigrams, words) {
// 	return bigrams.every(x=> words.some(y=> y.includes(x)))
// }

// my first pass solution 
// const canFind = (b, w) => b.map(x => w.join("").indexOf(x) > -1).every(x => x === true)

// console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]));
// console.log(canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]));
// console.log(canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]));
// console.log(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 08 - February - 2021
// Source: https://edabit.com/challenge/94RHwrv6PfaqEGYtr
// Title: Calculate an Earned Run Average

// Instructions:
// Create a function that returns an Earned Run Average (ERA). An ERA is calculated by multiplying 9 by the quotient of Earned Runs Allowed er divided by ip Innings Pitched.
// In baseball statistics, innings are represented with a fractional part of .1 (1/3) or .2 (2/3) to represent the number of outs in an inning. 
// A whole number or a number with a fractional part of .0 represents a full inning with three outs. Check the Resources tab for a deeper explanation.

// Examples:
// era(22, 99) ➞ 2.00
// era(23, 99.1) ➞ 2.08
// era(24, 99.2) ➞ 2.17

// Notes:
// ERA is represented with a scale of 2: 2.08
// For 1/3 and 2/3, use a scale of 2.

// Work:
// const era = (er, ip) => Number(((er/(ip+1/3))*9).toFixed(2)) < 2.00 ? '2.00' : ((er/(ip+1/3))*9).toFixed(2);

// console.log(era(22, 99));
// console.log(era(23, 99.1));
// console.log(era(24, 99.2));

// ------------------------------------------------------------------------------------------------------------------

// Date: 08 - February - 2021
// Source: https://edabit.com/challenge/meoZZBsxboQojBzWC
// Title: Diagonal of a Cube
// Resources: https://byjus.com/diagonal-of-a-cube-formula/#:~:text=The%20main%20diagonal%20of%20a,the%20square%20root%20of%203.

// Instructions:
// Create a function that takes the volume of a cube and returns the length of the cube's main diagonal, rounded to two decimal places.

// Examples:
// cubeDiagonal(8) ➞ 3.46
// cubeDiagonal(343) ➞ 12.12
// cubeDiagonal(1157.625) ➞ 18.19

// Sudo code:
// 1 - find the side using the volume
// 2 - square root 3 and multiply by cube side
// 3 - round to two decimal places
// 4 - return result 

// Work:
// simplified solution from Aman Khan on edabit
// const cubeDiagonal = (v) => parseFloat(((3**(1/2))*(v**(1/3))).toFixed(2))

// solution from Aman Khan on edabit
// function cubeDiagonal(volume){
//   return parseFloat(((3**(1/2))*(volume**(1/3))).toFixed(2))
// }

// first pass --> my code
// const cubeDiagonal = (v) => typeof Number((Math.sqrt(3)*Math.cbrt(v)).toFixed(2))

// console.log(cubeDiagonal(8));
// console.log(cubeDiagonal(343));
// console.log(cubeDiagonal(1157.625));

// ------------------------------------------------------------------------------------------------------------------

// Date: 04 - February - 2021
// Source: https://edabit.com/challenge/JxdXoCGeWpk4ktevH
// Title: Matrix Padder

// Instructions:
// Create a function that takes a matrix of size (m, n) and returns a matrix of size (m+2, n+2) with a pad of 0s around the perimeter.

// Examples:
// padMatrix([[]]) ➞ [[0, 0], [0, 0], [0, 0]]
// padMatrix([[9]]) ➞ [
//   [0, 0, 0],
//   [0, 9, 0],
//   [0, 0, 0]
// ]
// padMatrix([["hi", True]]) ➞ [
//   [0, 0, 0, 0],
//   [0, "hi", True, 0],
//   [0, 0, 0, 0]
// ]
// padMatrix([
//   [1, 2, 5],
//   [8, 6, 7],
//   [3, 4, 9]
// ]) ➞ [
//   [0, 0, 0, 0, 0],
//   [0, 1, 2, 5, 0],
//   [0, 8, 6, 7, 0],
//   [0, 3, 4, 9, 0],
//   [0, 0, 0, 0, 0]
// ]

// Notes:
// All inputs will be arrays of arrays.
// Refer to the first example to handle an empty input.

// Work:

// second pass
// const padMatrix = (arr) => {
//   arr.map((x,i) => arr[i].unshift(0) && arr[i].push(0));
//   arr.unshift(new Array(arr[0].length).fill(0)) && arr.push(new Array(arr[0].length).fill(0))
//   return arr
// }

// first pass
// const padMatrix = (arr) => {
//   arr.map((x,i) => {
//     arr[i].unshift(0);
//     arr[i].push(0);
//   })
//   arr.unshift(new Array(arr[0].length).fill(0))
//   arr.push(new Array(arr[0].length).fill(0))
//   return arr
// }

// console.log(padMatrix([[]]));
// console.log(padMatrix([["hi", true]]));
// console.log(padMatrix([["hi"], ["downstairs"]]));
// console.log(padMatrix([[1,"beep",true], ["oink",99,1.1], [[1,1],'e',99]]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 03 - February - 2021
// Source: https://edabit.com/challenge/tWEsR6BY3qRFP3L8r
// Title: String Match by Two Letters

// Instructions:
// Create a function that takes two strings, a and b. Return the number of matching positions where they both contain the same exact two letters one after the other.
// For example, if a = "bboiizz" and b = "bbuiiz", your function should return 3, since the "bb", "ii", and "iz" appear at the same place in both strings.

// Examples:
// strMatchBy2char("yytaazz", "yyjaaz") ➞ 3
// strMatchBy2char("edabit", "ed") 1 ➞ 1
// strMatchBy2char("", "") ➞ 0

// Notes:
// Don't forget to return the result.

// Work:
// solution by Werdna
// function strMatchBy2char(a, b) {
//   let res = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a.slice(i, i + 2) === b.slice(i, i + 2) && a.slice(i, i + 2).length === 2)
//     res += 1;
//   }
//   return res;
// }


// my first pass
// const strMatchBy2char = (a,b) => {
//   const aResult = [];
//   const bResult = [];
//   const a2 = a.split("");
//   const b2 = b.split("");
//   for(let i = 0; i < a2.length; i++){
//     if(i < a2.length-1){
//       aResult.push(a2[i]+a2[i+1])
//     }
//   }
//   for(let i = 0; i < b2.length; i++){
//     if(i < b2.length-1){
//       bResult.push(b2[i]+b2[i+1])
//     }
//   }
//   let count = 0;
//   aResult.map((x,i) => {
//     if(bResult.indexOf(x) > -1){
//       aResult[i] === bResult[i] ? count++ : null
//     } 
//   });
//   return count;
// }

// console.log(strMatchBy2char("yytaazz", "yyjaaz"));
// console.log(strMatchBy2char("edabit", "ed"));
// console.log(strMatchBy2char("", ""));
// console.log(strMatchBy2char("AABBccDD", "ABBBjjD"));
// console.log(strMatchBy2char("AAjjAAjj", "iAjjAi"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 25 - January - 2021
// Source: https://edabit.com/challenge/yXSTvCNen2DQHyrh6
// Title: Length of a Nested Array
// Resource: https://gist.github.com/dgowrie/ed1b416d4927388915e5

// Instructions:
// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
// [1, [2, 3]]
// 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
// Write a function that returns the total number of non-nested items in a nested array.

// Examples:
// getLength([1, [2, 3]]) ➞ 3

// getLength([1, [2, [3, 4]]]) ➞ 4

// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6

// getLength([1, [2], 1, [2], 1]) ➞ 5

// Notes:
// An empty array should return 0.

// Work:

// another option from user(Peter Flynn) => easier, longer way to read a recursive example
// const getLength = a => {
//   let count = 0;
//   a.forEach(x => {
//     if(Array.isArray(x)){
//       count += getLength(x);
//     } else {
//       count++
//     }
//   })
//   return count
// }

// another option from another user(feathers) => way easier and MUCH MUCH shorter!! 
// const getLength = a => a.flat(Infinity).length

// solution modified form resource
// const getLength = (a) => {
//   const flat = [];
//   function flatten(nested){
//     for(let i = 0; i < nested.length; i++){
//       if(isArray(nested[i])){
//         console.log('nested', nested[i]);
//         flatten(nested[i])
//       } else {
//         flat.push(nested[i])
//       }
//     }
//     return flat.length;
//   }
//   function isArray(a){
//     return a instanceof Array
//   }
//   return flatten(a)
// }

// console.log(getLength([1, [2, 3]]));
// console.log(getLength([1, [2, [3, 4]]]));
// console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));
// console.log(getLength([1, [2], 1, [2], 1]));
// console.log(getLength([]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 24 - January - 2021
// Source: https://edabit.com/challenge/4s93F8ZiEdHjmMnMv
// Title: Reversing a Binary String

// Instructions:
// Write a function that takes an integer n, reverses the binary representation of that integer, and returns the new integer from the reversed binary.

// Examples:
// reversedBinaryInteger(10) ➞ 5
// 10 = 1010 -> 0101 = 5
// reversedBinaryInteger(12) ➞ 3
// 12 = 1100 -> 0011 = 3
// reversedBinaryInteger(25) ➞ 19
// 25 = 11001 -> 10011 = 19
// reversedBinaryInteger(45) ➞ 45
// 45 = 101101 -> 101101 = 45

// Notes:
// All values of n will be positive.

// Work:
// const reversedBinaryInteger = (n) => parseInt(n.toString(2).split("").reverse().join(""), 2);

// console.log(reversedBinaryInteger(10));
// console.log(reversedBinaryInteger(12));
// console.log(reversedBinaryInteger(25));
// console.log(reversedBinaryInteger(45));

// ------------------------------------------------------------------------------------------------------------------

// Date: 23 - January - 2021
// Source: https://edabit.com/challenge/257hD8dzvsyR4G839
// Title: Sum of Missing Numbers
// resources: https://stackoverflow.com/questions/7317993/arrays-find-missing-numbers-in-a-sequence, https://stackoverflow.com/questions/8069315/create-array-of-all-integers-between-two-numbers-inclusive-in-javascript-jquer/8069367

// Instructions:
// Create a function that returns the sum of missing numbers from the given array.

// Examples:
// sumMissingNumbers([4, 3, 8, 1, 2]) ➞ 18
// 5 + 6 + 7 = 18
// sumMissingNumbers([17, 16, 15, 10, 11, 12]) ➞ 27
// 13 + 14 = 27
// sumMissingNumbers([1, 2, 3, 4, 5]) ➞ 0
// No Missing Numbers (i.e. all numbers in [1, 5] are present in the list)

// Notes:
// The numerical range to consider when searching for the missing numbers in the array is the sequence of consecutive numbers between the minimum and maximum of the numbers (inclusive).

// Work:

// condensed into one line
// const sumMissingNumbers = (arr) => Array(Math.max(...arr) - Math.min(...arr) + 1).fill().map((_, idx) => Math.min(...arr) + idx).filter(i => !arr.includes(i)).reduce((a,b) => a+b, 0)

// first pass
// const sumMissingNumbers = (arr) => {
//   const range = Array(Math.max(...arr) - Math.min(...arr) + 1).fill().map((_, idx) => Math.min(...arr) + idx);
//   return  range.filter(i => !arr.includes(i)).reduce((a,b) => a+b, 0)
// }

// console.log(sumMissingNumbers([4, 3, 8, 1, 2]));
// console.log(sumMissingNumbers([17, 16, 15, 10, 11, 12]));
// console.log(sumMissingNumbers([1, 2, 3, 4, 5]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 23 - January - 2021
// Source: https://edabit.com/challenge/Ff2iFMu3exGJ4StTc
// Title: Three Arrays!

// Instructions:
// Given three arrays of integers: arr1, arr2, arr3, return the sum of integers which are common in all three arrays.

// Examples:
// sumCommon([1, 2, 3], [5, 3, 2], [7, 3, 2]) ➞ 5
// 2 & 3 are common in all 3 arrays.
// sumCommon([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]) ➞ 7
// 2, 2 & 3 are common in all 3 arrays.
// sumCommon([1], [1], [2]) ➞ 0

// Work:

// const sumCommon = (arr1, arr2, arr3) => {
//   let result = 0;
//   arr1.map(x => arr2.includes(x) && arr3.includes(x) ? result = result+x : null)
//   return result
// }

// first pass
// const sumCommon = (arr1, arr2, arr3) => {
//   let result = 0;
//   for(let i = 0; i < arr1.length; i++){
//     if(arr2.includes(arr1[i]) && arr3.includes(arr1[i])){
//       result = result+arr1[i]
//     }
//   }
//   return result
// }

// console.log(sumCommon([1, 2, 3], [5, 3, 2], [7, 3, 2]));
// console.log(sumCommon([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]));
// console.log(sumCommon([1], [1], [2]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 20 - January - 2021
// Source: https://edabit.com/challenge/u6iaymtE4eYXQ2ZWR
// Title: Find the Amount of Potatoes

// Instructions:
// Create a function to return the amount of potatoes there are in a string.

// Examples:
// potatoes("potato") ➞ 1
// potatoes("potatopotato") ➞ 2
// potatoes("potatoapple") ➞ 1

// Work:
// const potatoes = (str) => str.match(/potato/g).length

// console.log(potatoes("potato"));
// console.log(potatoes("potatopotato"));
// console.log(potatoes("potatoapple"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 20 - January - 2021
// Source: https://edabit.com/challenge/RiyXDZNZAD4fj9xfJ
// Title: Clone an Array

// Instructions:
// The Code tab has a code which attempts to add a clone of an array to itself. 
// There is no error message, but the results are not as expected. Can you fix the code?

// Examples:
// clone([1, 1]) ➞ [1, 1, [1, 1]]
// clone([1, 2, 3]) ➞ [1, 2, 3, [1, 2, 3]]
// clone(["x", "y"]) ➞ ["x", "y", ["x", "y"]]

// Work:
// edabit solution from another user
// const clone = (a) => [...a, a]

// submitted solution
// const clone = (a) => [...a,[...a]]

// first pass
// function clone(arr) {
// 	return [...arr,[...arr]]
// }

// console.log(clone([1,1]));
// console.log(clone([1,2,3]));
// console.log(clone(["x","y"]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 20 - January - 2021
// Source: https://edabit.com/challenge/CFswwYtpKgSvMuYcS
// Title: String Slice-athon

// Instructions:
// This challenge has five miniature exercises to help practice proficiency in string slicing. 
// Check the examples below for a visual indicator of how to slice the strings. Good luck!

// Examples:
// const s = "abcdefghijklmnopqrstuvwxyz"
// challenge1(s) ➞ "abcde"
// First 5 characters of the string.

// challenge2(s) ➞ "vwxyz"
// Last 5 characters of the string.

// challenge3(s) ➞ "zyxwvutsrqponmlkjihgfedcba"
// All characters in the string from back.

// challenge4(s) ➞ "fedcba"
// First 6 characters in the string (start with 6th character).

// challenge5(s) ➞ "tvxz"
// Take last 7 characters and only return odd positioned ones.

// Notes:
// Check the Tests tab for more examples.
// See the Resources tab for further information on learning string slicing.
// slice() is not the only method you will need to complete some of the challenges.
// All test cases follow the same slicing pattern as the above example.

// Work:
// const s = "abcdefghijklmnopqrstuvwxyz"
// const challenge1 = (s) => s.slice(0,5)
// console.log(challenge1(s));

// const challenge2 = (s) => s.slice(-5)
// console.log(challenge2(s));

// const challenge3 = (s) => Array.from(s).reverse().join("")
// console.log(challenge3(s));

// const challenge4 = (s) => Array.from(s).reverse().join("").slice(-6)
// console.log(challenge4(s));

// const challenge5 = (s) => Array.from(s.slice(-8)).map((x,i) => i%2 === 1 ? x : "").join("")
// console.log(challenge5(s));

// ------------------------------------------------------------------------------------------------------------------

// Date: 18 - January - 2021
// Source: https://edabit.com/challenge/9fpBX9AFizhDeFk8R
// Title: A Long Long Time

// Instructions:
// Create a function that takes three values:
// h hours
// m minutes
// s seconds
// Return the value that's the longest duration.

// Examples: 
// longestTime(1, 59, 3598) ➞ 1
// longestTime(2, 300, 15000) ➞ 300
// longestTime(15, 955, 59400) ➞ 59400

// Notes:
// No two durations will be the same.

// Work:
// const longestTime = (h,m,s) => Math.max(...[h*60*60, m*60, s])
// const longestTime = (h,m,s) => [h,m,s][[h*60*60, m*60, s].indexOf(Math.max(...[h*60*60, m*60, s]))]

// console.log(longestTime(1, 59, 3598));
// console.log(longestTime(1, 300, 15000));
// console.log(longestTime(15, 955, 59400));

// ------------------------------------------------------------------------------------------------------------------

// Date: 18 - January - 2021
// Source: https://edabit.com/challenge/ZN5cpGPNRS3nrjMo5
// Title: Capitalize the Names
// Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

// Instructions:
// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

// Examples:
// capMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]
// capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]
// capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]

// Notes:
// Don't change the order of the original array.
// Notice in the second example above, "MABELLE" is returned as "Mabelle".

// Work:
// const capMe = (a) => a.map(x => `${x.substring(0,1).toUpperCase()}${x.substring(1).toLowerCase()}`);

// first pass
// function capMe(arr){
//   return arr.map(x => `${x.substring(0,1).toUpperCase()}${x.substring(1).toLowerCase()}`);
// }

// console.log(capMe(["mavis", "senaida", "letty"]));
// console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"]));
// console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 15 - January - 2021
// Source: https://edabit.com/challenge/8NDcdD8QZiMKJJaYL
// Title: True Alphabetical Order

// Instructions:
// Create a function which takes every letter in every word, and puts it in alphabetical order. 
// Note how the original word lengths must stay the same.

// Examples:
// trueAlphabetic("hello world") ➞ "dehll loorw"
// trueAlphabetic("edabit is awesome") ➞ "aabdee ei imosstw"
// trueAlphabetic("have a nice day") ➞ "aaac d eehi nvy"

// Notes:
// All sentences will be in lowercase.
// No punctuation or numbers will be included in the Tests.

// Work:
// function trueAlphabetic(str){
//   const wordLength = str.split(" ").map(x => x.length)
//   const sortedStr = Array.from(str.split(" ").map(x => Array.from(x)).flat()).sort()
//   return wordLength.map(x => sortedStr.splice(0,x).join("")).join(" ")
// }

// console.log(trueAlphabetic("hello world"));
// console.log(trueAlphabetic("edabit is awesome"));
// console.log(trueAlphabetic("have a nice day"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 14 - January - 2021
// Source: https://edabit.com/challenge/rgdT9sZ4QhsKhaSw9
// Title: Find the Missing Number
// Resources: https://www.codegrepper.com/code-examples/javascript/javascript+fill+array+with+range, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

// Instructions:
// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

// Examples:
// missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

// Notes:
// The array of numbers will be unsorted (not in order).
// Only one number will be missing.

// Work:
// solution from adam.bg on edabit 
// function missingNum(arr) {
//   var sum = arr.reduce((a, b) => a + b, 0);
//   return 55 - sum;
// }

// my solution 
// function missingNum(arr){
//   const range = (start, end) => Array(end-start+1).fill().map((_, i) => start + i)
//   const full = range(1,10)
//   return full.filter(x => arr.indexOf(x) === -1)[0]
  
// }

// console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));
// console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
// console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 12 - January - 2021
// Source: https://edabit.com/challenge/uScx6aGXmNu27NYWz
// Title: Frequency Distribution

// Instructions:
// Create a function that returns the frequency distribution of an array. 
// This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.

// Examples:
// getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }
// getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }
// getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }
// getFrequencies([]) ➞ {}

// Notes:
// If given an empty array, return an empty object (see example #4).
// The object should be in the same order as in the input array.

// Work:
// function getFrequencies(arr) {
//   const result = {};
//   arr.map(x => {
//     if(!result[x]){
//       result[x] = 1
//     } else {
//       result[x] = result[x]+1
//     }
//   })
//   return result
// }

// console.log(getFrequencies(["A", "B", "A", "A", "A"]));
// console.log(getFrequencies([1, 2, 3, 3, 2]));
// console.log(getFrequencies([true, false, true, false, false]));
// console.log(getFrequencies([]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 11 - January - 2021
// Source: https://edabit.com/challenge/gdtY2MiMS5Syb7Wqw
// Title: A Simple Dance

// Instructions:
// You will be given an array of dancing couples, with the woman first and man second, as well as a parameter "men" or "women".
// If the parameter is "men", the men reverse their positions (first moves to last, last moves to first, etc), while women keep their positions.
// If the parameter is "women", the women reverse their positions, while men keep their positions.

// Examples:
// dance([
//   [Ana, Bob],
//   [Amy, Josh],
//   [Lisa, Tim]
// ], men) ➞ [
//   [Ana, Tim],
//   [Amy, Josh],
//   [Lisa, Bob]
// ]

// dance([
//   [Ana, Bob],
//   [Amy, Josh],
//   [Lisa, Tim]
// ], women) ➞ [
//   [Lisa, Bob],
//   [Amy, Josh],
//   [Ana, Tim]
// ]

// Notes:
// Input arrays will always be the same length.

// Work:
// function dance(arr, parameter) {
  // solution for arr.length > 3
  // const women = [];
  // const men = [];
  // const newArr = [];
  // if(parameter === "women"){
  //   arr.map(x => women.push(x[0]) && men.push(x[1])) && women.reverse();
  //   women.map((x,i) => newArr.push([x,men[i]]));
  //   return newArr
  // } 
  // else {
  //   arr.map(x => women.push(x[0]) && men.push(x[1])) && men.reverse();
  //   men.map((x,i) => newArr.push([women[i],x]));
  //   return newArr
  // }
  
  // works well for arr.length === 3, but not greater
  // if(parameter === "women"){
  //   const first = arr[0][0];
  //   const last = arr[arr.length-1][0]
  //   arr[0].shift() && arr[arr.length-1].shift() && arr[0].push(last) && arr[arr.length-1].push(first);
  //   arr[0].reverse() && arr[arr.length-1].reverse();
  //   return arr
  // } else {
  //   const first = arr[0][1];
  //   const last = arr[arr.length-1][1]
  //   arr[0].pop() && arr[arr.length-1].pop() && arr[0].push(last) && arr[arr.length-1].push(first);
  //   return arr
  // }
// }

// console.log(dance([
//     ["Ana", "Bob"],
//     ["Amy", "Josh"],
//     ["Lisa", "Tim"]
//   ], "women"));
  
// console.log(dance([
//   ["w1", "m1"], 
//   ["w2", "m2"], 
//   ["w3", "m3"], 
//   ["w4", "m4"], 
//   ["w5", "m5"], 
//   ["w6", "m6"]], "women"));

// console.log(dance([
//   ["Ana", "Bob"],
//   ["Amy", "Josh"],
//   ["Lisa", "Tim"]
// ], "men"));

// console.log(dance([
//   ["w1", "m1"], 
//   ["w2", "m2"], 
//   ["w3", "m3"], 
//   ["w4", "m4"], 
//   ["w5", "m5"], 
//   ["w6", "m6"]], "men"));  


// ------------------------------------------------------------------------------------------------------------------

// Date: 10 - January - 2021
// Source: https://edabit.com/challenge/QtcPzxgcZJQdsfdMS
// Title: Is Johnny Making Progress?

// Instructions:
// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. 
// He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. 
// This is called a progress day.
// Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

// Examples:
// progressDays([3, 4, 1, 2]) ➞ 2
// There are two progress days, (3->4) and (1->2)
// progressDays([10, 11, 12, 9, 10]) ➞ 3
// progressDays([6, 5, 4, 3, 2, 9]) ➞ 1
// progressDays([9, 9])  ➞ 0

// Notes:
// Running the same number of miles as last week does not count as a progress day.

// Work:

// function progressDays (runs) {
//     let count = 0;
//     runs.map((x,i) => {
//         if (runs[i+1] > x){
//             count++
//         };
//     })
//     return count;
// }

// console.log(progressDays([3, 4, 1, 2]));
// console.log(progressDays([10, 11, 12, 9, 10]));
// console.log(progressDays([6, 5, 4, 3, 2, 9]));
// console.log(progressDays([9, 9]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 07 - January - 2021
// Source: https://edabit.com/challenge/jbR9NupEL8zAZkbKx
// Title: Match the Last Item

// Instructions:
// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

// Examples:
// matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
// The last item is the rest joined.
// matchLastItem([1, 1, 1, "11"]) ➞ false
// The last item should be "111".
// matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true

// Notes:
// The array is always filled with items.

// Work:
// shorter version from edabit
// const matchLastItem = (arr) => arr.pop() === arr.join("");

// shorter version 
// const matchLastItem = (arr) => arr.pop() === arr.map(x => String(x)).join("");

// first attempt
// function matchLastItem(arr){
//     let result = ''
//     for (let i = 0; i < arr.length-1; i++){
//         result = result+arr[i]
//     }
//     return result === arr[arr.length-1]
// }

// console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));
// console.log(matchLastItem([1, 1, 1, "11"]));
// console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 06 - January - 2021
// Source: https://edabit.com/challenge/ttiutYw6NyphfxuCG
// Title: Check if All Values Are True

// Instructions:
// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples:
// allTruthy(true, true, true) ➞ true
// allTruthy(true, false, true) ➞ false
// allTruthy(5, 4, 3, 2, 1, 0) ➞ false

// Notes:
// Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is truthy.
// You will always be supplied with at least one parameter.

// Work:
// const allTruthy = (...args) => [...args].every(x => Boolean(x))

// console.log(allTruthy(true, true, true));
// console.log(allTruthy(true, false, true));
// console.log(allTruthy(5, 4, 3, 2, 1, 0));

// ------------------------------------------------------------------------------------------------------------------

// Date: 03 - January - 2021
// Source: https://edabit.com/challenge/8khL2WEhZ6M9onHL4
// Title: Layers in a Rug

// Instructions:
// Write a function that counts how many concentric layers a rug.

// Examples:
// countLayers([
//   "AAAA",
//   "ABBA",
//   "AAAA"
// ]) ➞ 2

// countLayers([
//   "AAAAAAAAA",
//   "ABBBBBBBA",
//   "ABBAAABBA",
//   "ABBBBBBBA",
//   "AAAAAAAAA"
// ]) ➞ 3

// countLayers([
//   "AAAAAAAAAAA",
//   "AABBBBBBBAA",
//   "AABCCCCCBAA",
//   "AABCAAACBAA",
//   "AABCADACBAA",
//   "AABCAAACBAA",
//   "AABCCCCCBAA",
//   "AABBBBBBBAA",
//   "AAAAAAAAAAA"
// ]) ➞ 5

// Notes:
// Multiple layers can share the same component so count them separately (example #2).
// Layers will be horizontally and vertically symmetric.
// There will be at least one layer for each rug.

// Work:
// a shorter solution from Pavel Srom
// const countLayers = rug => new Set(rug).size;

// my solution
// const countLayers = (rug) => {
//   let mySet = new Set();
//   rug.map((x) => mySet.add(x));
//   return mySet.size;
// };

// console.log(countLayers(["AAAA", "ABBA", "AAAA"]));
// console.log(
//   countLayers(["AAAAAAAAA", "ABBBBBBBA", "ABBAAABBA", "ABBBBBBBA", "AAAAAAAAA"])
// );
// console.log(
//   countLayers([
//     "AAAAAAAAAAA",
//     "AABBBBBBBAA",
//     "AABCCCCCBAA",
//     "AABCAAACBAA",
//     "AABCADACBAA",
//     "AABCAAACBAA",
//     "AABCCCCCBAA",
//     "AABBBBBBBAA",
//     "AAAAAAAAAAA",
//   ])
// );

// ------------------------------------------------------------------------------------------------------------------

// Date: 02 - January - 2021
// Source: https://edabit.com/challenge/zptHytXMgKcAjr4TH
// Title: East or West
// Resource: https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call/16577007
// example help code:
// var chars = {'a':'x','b':'y','c':'z'};
// var s = '234abc567bbbbac';
// s = s.replace(/[abc]/g, m => chars[m]);
// console.log(s);

// Instructions:
// You will be given an array of string "east" formatted differently every time.
// Create a function that returns "west" wherever there is "east".
// Format the string according to the input. Check the examples below to better understand the question.

// Examples:
// direction(["east", "EAST", "eastEAST"]) ➞ ["west", "WEST", "westWEST"]
// direction(["eAsT EaSt", "EaSt eAsT"]) ➞ ["wEsT WeSt", "WeSt wEsT"]
// direction(["east EAST", "e a s t", "E A S T"]) ➞ ["west WEST", "w e s t", "W E S T"]

// Notes:
// The input will only be "east" in different formats.

// Work:
// const direction = (arr) => {
//     const chars = {'e': 'w', 'a': 'e', 'E': 'W', 'A': 'E'}
//     return arr.map(word => word.replace(/[eaEA]/g, m => chars[m]));
// }

// console.log(direction(["east", "EAST", "eastEAST"]));
// console.log(direction(["eAsT EaSt", "EaSt eAsT"]));
// console.log(direction(["east EAST", "e a s t", "E A S T"]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 01 - January - 2021
// Source: https://edabit.com/challenge/fi5kQFrS2v758x3kJ
// Title: Temperature Converter

// Instructions:
// Create a function that takes an array with temperature type, temperature, and a second temperature type.
// The temperature types can be Celsius, Fahrenheit, or Kelvin.
// Return the temperature type (in the array) converted into the second temperature type.

// Examples:
// converter(["fahrenheit", 3] , "kelvin") ➞ 257.0
// converter(["celsius", 10] , "fahrenheit") ➞ 50.0
// converter(["celsius", 20] , "kelvin") ➞ 293.1

// Notes:
// Round to one decimal place.

// Work:

// cvs solution on edabit
// function converter([a, d], b) {
// 	return +(function() {
// 		switch (a) {
// 			case "celsius":
// 				return b === "kelvin" ? d + 273.15 : 9/5 * d + 32;
// 			case "kelvin":
// 				return b === "celsius" ? d - 273.15 : 9/5 * d - 459.67;
// 			default:
// 				return b === "celsius" ? 5/9 * (d - 32) : 5/9 * (d + 459.67);
// 		}
// 	})().toFixed(1);
// }

// my solution
// const converter = (a, b) => {
//     if (a[0] === "fahrenheit" && b === "kelvin"){
//         return Number(((a[1] + 459.67) * (5/9)).toFixed(1))
//     } else if (a[0] === "fahrenheit" && b === "celsius"){
//         return Number(((a[1] - 32) / 1.8).toFixed(1))
//     } else if (a[0] === "celsius" && b === "kelvin"){
//         return  Number((a[1] + 273.15).toFixed(1))
//     } else if (a[0] === "celsius" && b === "fahrenheit"){
//         return Number(((a[1] * 1.8) + 32).toFixed(1))
//     } else if (a[0] === "kelvin" && b === "fahrenheit"){
//         return Number(((a[1] * 1.8) - 459.67).toFixed(1))
//     } else if (a[0] === "kelvin" && b === "celsius"){
//         return Number((a[1] - 273.15).toFixed(1))
//     }
// }

// console.log(converter(["fahrenheit", 3] , "kelvin"));
// console.log(converter(["celsius", 10] , "fahrenheit"));
// console.log(converter(["celsius", 20] , "kelvin"));