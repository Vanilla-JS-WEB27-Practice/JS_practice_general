// Template
// Date: - January - 2021
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