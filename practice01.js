// Template
// Date: - October - 2020
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

// Date: 25 - October - 2020
// Source: https://edabit.com/challenge/bADsAhtb5g6pu5WYM
// Title: Reverse Coding Challenge #3

// Instructions:
// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function.
// Here, you must generate your own function to satisfy the relationship between the inputs and outputs.
// Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.

// Examples:
// [5, 7, 8, 2, 1], 2 ➞ [1, 1, 0, 0, 1]
// [9, 8, 16, 47], 4 ➞ [1, 0, 0, 3]
// [17, 11, 99, 55, 23, 1], 5 ➞ [2, 1, 4, 0, 3, 1]
// [6, 1], 7 ➞ [6, 1]
// [3, 2, 9], 3 ➞ [0, 2, 0]
// [48, 22, 0, 19, 33, 100], 10 ➞ [8, 2, 0, 9, 3, 0]

// Work:
// function mysteryFunc(arr, num) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] % num);
//   }
//   return result;
// }

// console.log(mysteryFunc([5, 7, 8, 2, 1], 2));
// console.log(mysteryFunc([9, 8, 16, 47], 4));
// console.log(mysteryFunc([17, 11, 99, 55, 23, 1], 5));
// console.log(mysteryFunc([6, 1], 7));
// console.log(mysteryFunc([3, 2, 9], 3));
// console.log(mysteryFunc([48, 22, 0, 19, 33, 100], 10));

// ------------------------------------------------------------------------------------------------------------------

// Date: 25 - October - 2020
// Source: https://edabit.com/challenge/TDpT9tvwJK5uLn98h
// Title: Check if the Same Case

// Instructions:
// Create a function that returns true if an input string contains only uppercase or only lowercase letters.

// Examples:
// sameCase("hello") ➞ true
// sameCase("HELLO") ➞ true
// sameCase("Hello") ➞ false
// sameCase("ketcHUp") ➞ false

// Work:
// function sameCase(str) {
//   return str === str.toLowerCase() || str === str.toUpperCase() ? true : false;
// }

// const sameCase = (str) =>
//   str === str.toLowerCase() || str === str.toUpperCase() ? true : false;
// console.log(sameCase("hello"));
// console.log(sameCase("HELLO"));
// console.log(sameCase("Hello"));
// console.log(sameCase("ketcHUp"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 25 - October - 2020
// Source: https://edabit.com/challenge/WBdjg7zgiqi6L5zsL
// Title: Strange Pair

// Instructions:
// A pair of strings form a strange pair if both of the following are true:
// The 1st string's first letter = 2nd string's last letter.
// The 1st string's last letter = 2nd string's first letter.
// Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.

// Examples:
// isStrangePair("ratio", "orator") ➞ true
// "ratio" ends with "o" and "orator" starts with "o".
// "ratio" starts with "r" and "orator" ends with "r".
// isStrangePair("sparkling", "groups") ➞ true
// isStrangePair("bush", "hubris") ➞ false
// isStrangePair("", "") ➞ true

// Notes:
// It should work on a pair of empty strings (they trivially share nothing).

// Work:
// function isStrangePair(str1, str2) {
//     if(str1.length === "" && str2.length === ""){
//         return true;
//     } else if(str1[0] === str2[str2.length-1] && str2[0] === str1[str1.length-1]){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isStrangePair("ratio", "orator"));
// console.log(isStrangePair("sparkling", "groups"));
// console.log(isStrangePair("bush", "hubris"));
// console.log(isStrangePair("", ""));

// ------------------------------------------------------------------------------------------------------------------

// Date: 25 - October - 2020
// Source: https://edabit.com/challenge/3Efavz8YmSBia4p8s
// Title: Index Multiplier

// Instructions:
// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

// Examples:
// indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)
// indexMultiplier([-3, 0, 8, -6]) ➞ -2
// (-3*0 + 0*1 + 8*2 + -6*3)

// Notes:
// All items in the array will be integers.

// Work:
// function indexMultiplier(arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     result += i * arr[i];
//   }
//   return result;
// }

// console.log(indexMultiplier([1, 2, 3, 4, 5]));
// console.log(indexMultiplier([-3, 0, 8, -6]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 22 - October - 2020
// Source: https://edabit.com/challenge/t6HFLEYD2e7ePxAu5
// Title: What's the Missing Letter?

// Instructions:
// Given a string of letters in the English alphabet, return the letter that's missing from the string.
// The missing letter will make the string be in alphabetical order (from A to Z).
// If there are no missing letters in the string, return "No Missing Letter".

// Examples:
// missingLetter("abdefg") ➞ "c"
// missingLetter("mnopqs") ➞ "r"
// missingLetter("tuvxyz") ➞ "w"
// missingLetter("ghijklmno") ➞ "No Missing Letter"

// Notes:
// The given string will never have more than one missing letter.

// Work:
// function missingLetter(str) {
//   const alpha = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   const strArr = str.split("");
//   const start = strArr[0];
//   const end = strArr[strArr.length - 1];
//   const range = alpha.slice(alpha.indexOf(start), alpha.indexOf(end) + 1);
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr.length === range.length) {
//       return `No Missing Letter`;
//     } else if (strArr[i] !== range[i]) {
//       return range[i];
//     }
//   }
// }

// console.log(missingLetter("abdefg"));
// console.log(missingLetter("mnopqs"));
// console.log(missingLetter("tuvxyz"));
// console.log(missingLetter("ghijklmno"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 22 - October - 2020
// Source: https://edabit.com/challenge/AS2NGeGLnwWbMr5SP
// Title: RegEx: Character Classes IX ⁠- \w
// Resource: REGEX character classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes

// Instructions:
// You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
// Here is a list of the character classes in JavaScript:
// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]

// Examples:
// There is a hidden word in this string:
// const str = "**^&$Regular#$%Expressions$%$$%^**"
// Write the regular expression that reveals the hidden word. You have to remove all of the special characters to reveal the word.
// Use the character class \w in your expression.

// Work:
// const str = "**^&$Regular#$%Expressions$%$$%^**";
// const REGEXP = /\w/g;
// console.log(str.match(REGEXP).join(""));

// ------------------------------------------------------------------------------------------------------------------

// Date: 22 - October - 2020
// Source: https://edabit.com/challenge/fbaLZPNjTvYtY444B
// Title: Find the Characters Counterpart Char Code

// Instructions:
// Create a function that takes a single character as an argument and returns the char code of its lowercased / uppercased counterpart.

// Examples:
// Given that:
//   - "A" char code is: 65
//   - "a" char code is: 97
// counterpartCharCode("A") ➞ 97
// counterpartCharCode("a") ➞ 65

// Notes:
// The argument will always be a single character.
// Not all inputs will have a counterpart (e.g. numbers), in which case return the inputs char code.

// Work:
// function counterpartCharCode(char) {
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase().charCodeAt(0);
//   } else {
//     return char.toUpperCase().charCodeAt(0);
//   }
// }

// console.log(counterpartCharCode("A"));
// console.log(counterpartCharCode("a"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 19 - October - 2020
// Source: https://edabit.com/challenge/5232asan2yFuMGnHq
// Title: Unlucky 13

// Instructions:
// Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

// Examples:
// unlucky13([53, 182, 435, 591, 637]) ➞ [53, 435, 591]
// 182 and 637 are divisible by 13.
// unlucky13([24, 316, 393, 458, 1279]) ➞ [24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13.
// unlucky13([104, 351, 455, 806, 871]) ➞ []
// All numbers in the array are divisible by 13.

// Work:
// function unlucky13(arr) {
//   const result = [];
//   arr.map((x) => (x % 13 !== 0 ? result.push(x) : undefined));
//   return result;
// }

// console.log(unlucky13([53, 182, 435, 591, 637]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 19 - October - 2020
// Source: https://edabit.com/challenge/SrCTGbhwPRyHZSAGu
// Title: Video Streaming Plans

// Instructions:
// Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:

// BasicPlan	StandardPlan	PremiumPlan
// ✓	        ✓	            ✓	          canStream
// ✓	        ✓	            ✓	          canDownload
// ✓	        ✓	            ✓	          hasSD
//            ✓	            ✓	          hasHD
//                          ✓	          hasUHD
// 1	        2	            4	          numOfDevices
// $8.99	    $12.99	      $15.99	    price

// Examples:
// BasicPlan.hasSD ➞ true
// PremiumPlan.hasSD ➞ true
// BasicPlan.hasUHD ➞ false
// BasicPlan.price ➞ '$8.99'
// PremiumPlan.numOfDevices ➞ 4

// Notes:
// Try to extend the classes to complete the challenge!
// If you're unsure what that means, try checking out the JavaScript class tutorials in the Resources tab.

// Work:
// class BasicPlan {
//   static canStream = true;
//   static canDownload = true;
//   static numOfDevices = 1;
//   static hasSD = true;
//   static hasHD = false;
//   static hasUHD = false;
//   static price = "$8.99";
// }

// class StandardPlan extends BasicPlan {
//   static hasHD = true;
//   static numOfDevices = 2;
//   static price = "$12.99";
// }

// class PremiumPlan extends StandardPlan {
//   static hasUHD = true;
//   static numOfDevices = 4;
//   static price = "$15.99";
// }

// console.log(PremiumPlan.price);

// ------------------------------------------------------------------------------------------------------------------

// Date: 19 - October - 2020
// Source: https://edabit.com/challenge/bcM99TYJmRv5JnZaA
// Title: Find the Bug: Checking Even Numbers

// Instructions:
// Create a function that takes in an array and returns true if all its values are even, and false otherwise.
// Not a big deal, your friend says. He writes the following code:
// function checkAllEven(arr) {
//   return arr.every(x % 2 === 0)
// }
// The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:

// Examples:
// checkAllEven([1, 2, 3, 4]) ➞ false
// checkAllEven([2, 4, 6]) ➞ true
// checkAllEven([5, 6, 8, 10]) ➞ false
// checkAllEven([-2, 2, -2, 2]) ➞ true

// Notes:
// For help, check Resources or ask a question in the Comments.

// Work:
// function checkAllEven(arr) {
//   return arr.every((x) => x % 2 === 0);
// }

// console.log(checkAllEven([1, 2, 3, 4]));
// console.log(checkAllEven([2, 4, 6]));
// console.log(checkAllEven([5, 6, 8, 10]));
// console.log(checkAllEven([-2, 2, -2, 2]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 19 - October - 2020
// Source: https://edabit.com/challenge/moK78CirzYbqk6g3z
// Title: ReverseAndNot

// Instructions:
// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.
// To illustrate:
// 123
// We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.

// Examples:
// reverseAndNot(123) ➞ 321123
// reverseAndNot(152) ➞ 251152
// reverseAndNot(123456789) ➞ 987654321123456789

// Notes:
// i is a non-negative integer.

// Work:
// function reverseAndNot(i) {
//   const reversedStr = `${i}`;
//   return Number(reversedStr.split("").reverse().join("") + i);
// }

// console.log(reverseAndNot(123));
// console.log(reverseAndNot(152));
// console.log(reverseAndNot(123456789));

// ------------------------------------------------------------------------------------------------------------------

// Date: 18 - October - 2020
// Source: https://edabit.com/challenge/ypgJXTXaaSwrFyoTk
// Title: Return First and Last Parameter
// Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

// Instructions:
// Write two functions:
// firstArg() should return the first parameter passed in.
// lastArg() should return the last parameter passed in.

// Examples:
// firstArg(1, 2, 3) ➞ 1
// lastArg(1, 2, 3) ➞ 3
// firstArg(8) ➞ 8
// lastArg(8) ➞ 8

// Notes:
// Return undefined if the function takes no parameters.
// If the function only takes in one parameter, the firstArg and lastArg functions should return the same value.
// JavaScript has an arguments object which keeps track of the parameters being passed in. Check the Resources tab to learn more.

// Work:
// firstArg = (...args) =>
//   args.length > 1 ? args[0] : args.length === 1 ? args[0] : undefined;

// lastArg = (...args) =>
//   args.length > 1
//     ? args[args.length - 1]
//     : args.length === 1
//     ? args[0]
//     : undefined;

// console.log(firstArg(1, 2));
// console.log(firstArg(3, 4, 5, 10));
// console.log(lastArg());
// console.log(lastArg());
// console.log(lastArg(4, 5));
// console.log(lastArg(10, 4, 6, 4, 5, 15));

// ------------------------------------------------------------------------------------------------------------------

// Date: 18 - October - 2020
// Source: https://edabit.com/challenge/4vvFr9ZTK2AdyswXH
// Title: Maximum Difference
// Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max (spread the nums in)

// Instructions:
// Given an array of integers, return the difference between the largest and smallest integers in the array.

// Examples:
// difference([10, 15, 20, 2, 10, 6]) ➞ 18
// 20 - 2 = 18
// difference([-3, 4, -9, -1, -2, 15]) ➞ 24
// 15 - (-9) = 24
// difference([4, 17, 12, 2, 10, 2]) ➞ 15

// Work:
// difference = (nums) => Math.max(...nums) - Math.min(...nums);

// console.log(difference([10, 15, 20, 2, 10, 6]));
// console.log(difference([-3, 4, -9, -1, -2, 15]));
// console.log(difference([4, 17, 12, 2, 10, 2]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 18 - October - 2020
// Source: https://edabit.com/challenge/L4Hevck84exPwe4wo
// Title: Find the Discount
// Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

// Instructions:
// Create a function that takes two arguments: the final price and the discount percentage as integers and returns the final price after the discount.

// Examples:
// dis(1500, 50) ➞ 750
// dis(89, 20) ➞ 71.2
// dis(100, 75) ➞ 25

// Notes:
// Your answer should be rounded to two decimal places.

// Work:
// function dis(price, discount) {
//   const percent = discount / 100;
//   const discountTotal = price * percent;
//   return Number((price - discountTotal).toFixed(2));
// }

// console.log(dis(1500, 50));
// console.log(dis(89, 20));
// console.log(dis(100, 75));

// ------------------------------------------------------------------------------------------------------------------

// Date: 13 - October - 2020
// Source: https://edabit.com/challenge/dWNPtNeQgyn6mS8FA
// Title: Odd Up, Even Down

// Instructions:
// Create a function that goes through the array, incrementing (+1) for each odd-valued number and decrementing (-1) for each even-valued number.

// Examples:
// transform([1, 2, 3, 4, 5]) ➞ [2, 1, 4, 3, 6]
// transform([3, 3, 4, 3]) ➞ [4, 4, 3, 4]
// transform([2, 2, 0, 8, 10]) ➞ [1, 1, -1, 7, 9]

// Work:
// function transform(arr) {
//   const result = [];
//   arr.map((x) => {
//     x % 2 === 0 ? result.push(x - 1) : result.push(x + 1);
//   });
//   return result;
// }

// console.log(transform([1, 2, 3, 4, 5]));
// console.log(transform([3, 3, 4, 3]));
// console.log(transform([2, 2, 0, 8, 10]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 13 - October - 2020
// Source: https://edabit.com/challenge/j63YSGGK9xoLiXCKF
// Title: Between Words
// Resource: https://javascript.info/comparison

// Instructions:
// Write a function that takes three string arguments
// (first, last, and word) and returns true if word is found between first and last in the dictionary, otherwise false.

// Examples:
// isBetween("apple", "banana", "azure") ➞ true
// isBetween("monk", "monument", "monkey") ➞ true
// isBetween("bookend", "boolean", "boost") ➞ false

// Notes:
// All letters will be in lowercase.
// All three words will be different.
// Remember that the string word is in the middle.

// Work:
// function isBetween(first, last, word) {
//   return first < word && word < last ? true : false;
// }

// console.log(isBetween("apple", "banana", "azure"));
// console.log(isBetween("monk", "monument", "monkey"));
// console.log(isBetween("bookend", "boolean", "boost"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 13 - October - 2020
// Source: https://edabit.com/challenge/8n9RyHThC3dNEPCng
// Title: Move Capital Letters to the Front

// Instructions:
// Create a function that moves all capital letters to the front of a word.

// Examples:
// capToFront("hApPy") ➞ "APhpy"
// capToFront("moveMENT") ➞ "MENTmove"
// capToFront("shOrtCAKE") ➞ "OCAKEshrt"

// Notes:
// Keep the original relative order of the upper and lower case letters the same.

// Work:
// function capToFront(s) {
// my solution
// const str = s.split("");
// let strCapResult = "";
// let strSmallResult = "";
// const regex = /[A-Z]/g;
// str.map((x) => {
//   if (x.match(regex)) {
//     strCapResult += x;
//   } else {
//     strSmallResult += x;
//   }
// });
// return strCapResult.concat(strSmallResult);

// shorter solution
// return s.match(/[A-Z]/g).join("") + s.match(/[a-z]/g).join("");
// }

// console.log(capToFront("hApPy"));
// console.log(capToFront("moveMENT"));
// console.log(capToFront("shOrtCAKE"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 11 - October - 2020
// Source: https://edabit.com/challenge/ERmrS3QrK7sEt4PAt
// Title: LCM of Two Numbers
// Resource: https://www.tutorialspoint.com/write-a-program-to-calculate-the-least-common-multiple-of-two-numbers-javascript

// Instructions:
// Write a function that returns the least common multiple (LCM) of two integers.

// Examples:
// lcm(9, 18) ➞ 18
// lcm(8, 5) ➞ 40
// lcm(17, 11) ➞ 187

// Notes:
// Both values will be positive.
// The LCM is the smallest integer that is divisible by both numbers such that the remainder is zero.

// Work:
// function lcm(n1, n2) {
//   let min = Math.min(n1, n2);
//   while (min >= 2) {
//     if (n1 % min === 0 && n2 % min === 0) {
//       return (n1 * n2) / min;
//     }
//     min--;
//   }
//   return n1 * n2;
// }

// console.log(lcm(9, 18));
// console.log(lcm(8, 5));
// console.log(lcm(17, 11));

// ------------------------------------------------------------------------------------------------------------------

// Date: 11 - October - 2020
// Source: https://edabit.com/challenge/447bDYjW8ZBTtFG5M
// Title: Both Zero, Negative or Positive

// Instructions:
// Write a function that returns true if both numbers are:
// Smaller than 0, OR ...
// Greater than 0, OR ...
// Exactly 0
// Otherwise, return false.

// Examples:
// both(6, 2) ➞ true
// both(0, 0) ➞ true
// both(-1, 2) ➞ false
// both(0, 2) ➞ false

// Notes:
// Inputs will always be two numbers.

// Work:
// function both(n1, n2) {
//   if (n1 < 0 && n2 < 0) {
//     return true;
//   } else if (n1 > 0 && n2 > 0) {
//     return true;
//   } else if (n1 === 0 && n2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(both(6, 2));
// console.log(both(0, 0));
// console.log(both(-1, 2));
// console.log(both(0, 2));

// ------------------------------------------------------------------------------------------------------------------

// Date: 11 - October - 2020
// Source: https://edabit.com/challenge/3hdXjfJozQySRC3gE
// Title: How Many Days Between Two Dates

// Instructions:
// Create a function that takes two dates and returns the number of days between the first and second date.

// Examples:
// getDays(
//   new Date("June 14, 2019"),
//   new Date("June 20, 2019")
// ) ➞ 6
// getDays(
//   new Date("December 29, 2018"),
//   new Date("January 1, 2019")
// ) ➞ 3
// Dates may not all be in the same month/year.
// getDays(
//   new Date("July 20, 2019"),
//   new Date("July 30, 2019")
// ) ➞ 10

// Work:
// function getDays(date1, date2) {
//   const date1_unixtime = parseInt(date1.getTime() / 1000);
//   const date2_unixtime = parseInt(date2.getTime() / 1000);
//   const timeDifference = date2_unixtime - date1_unixtime;
//   const timeDifferenceInHours = timeDifference / 60 / 60;
//   const timeDifferenceInDays = timeDifferenceInHours / 24;
//   return timeDifferenceInDays;
// }

// console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")));
// console.log(
//   getDays(new Date("December 29, 2018"), new Date("January 1, 2019"))
// );
// console.log(getDays(new Date("July 20, 2019"), new Date("July 30, 2019")));

// ------------------------------------------------------------------------------------------------------------------

// Date: 10 - October - 2020
// Source: https://edabit.com/challenge/cWHToCQaAbnzNJzQw
// Title: The Full Length of a Google

// Instructions:
// Let's say we wanted to change the number of pages that Google could skip to.
// Create a function where given a number of pages n, return the word "Google" but with the correct number of "o"s.

// Examples:
// googlify(10) ➞ "Goooooooooogle"
// googlify(23) ➞ "Gooooooooooooooooooooooooogle"
// googlify(2) ➞ "Google"
// googlify(-2) ➞ "invalid"

// Notes:
// If n is equal to or less than 1, return invalid.

// Work:
// function googlify(n) {
//   return n >= 2 ? `G${"o".repeat(n)}gle` : "invalid";
// }

// console.log(googlify(10));
// console.log(googlify(23));
// console.log(googlify(2));
// console.log(googlify(-1));

// ------------------------------------------------------------------------------------------------------------------

// Date: 10 - October - 2020
// Source: https://edabit.com/challenge/qrDWy9xS8BrfhLS6o
// Title: Reverse the Number

// Instructions:
// Create a function that takes an integer n and reverses it.

// Examples:
// rev(5121) ➞ "1215"
// rev(69) ➞ "96"
// rev(-122157) ➞ "751221"

// Notes:
// This challenge is about using two operators that are related to division.
// If the number is negative, treat it like it's positive.

// Work:
// function rev(n) {
//   return JSON.stringify(Math.abs(n)).split("").reverse().join("");
// }

// console.log(rev(5121));
// console.log(rev(69));
// console.log(rev(-122157));

// ------------------------------------------------------------------------------------------------------------------

// Date: 10 - October - 2020
// Source: https://edabit.com/challenge/DvwY43tNMdEpW4kKu
// Title: 25-Mile Marathon
// Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce,
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

// Instructions:
// Mary wants to run a 25-mile marathon.
// When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length.
// Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.
// Return true if the marathon is 25 miles long, otherwise, return false.

// Examples:
// marathonDistance([1, 2, 3, 4]) ➞ false
// marathonDistance([1, 9, 5, 8, 2]) ➞ true
// marathonDistance([-6, 15, 4]) ➞ true

// Notes:
// Items in the array will always be integers.
// Items in the array may be negative or positive, but since negative distance isn't possible,
// find a way to convert negative integers into positive integers.
// Return false if the arguments are empty or not provided.

// Work:
// function marathonDistance(d) {
//   const result = d.reduce((a, b) => a + Math.abs(b), 0);
//   return result === 25 ? true : false;
// }
// console.log(marathonDistance([1, 2, 3, 4]));
// console.log(marathonDistance([1, 9, 5, 8, 2]));
// console.log(marathonDistance([-6, 15, 4]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 09 - October - 2020
// Source: https://edabit.com/challenge/noqGmqk6StwApSGwa
// Title: Flip the Boolean

// Instructions:
// Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.

// Examples:
// reverse(true) ➞ false
// reverse(false) ➞ true
// reverse(0) ➞ "boolean expected"
// reverse(null) ➞ "boolean expected"

// Notes:
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// Work:
// function reverse(bool) {
//   if (bool === true) {
//     return false;
//   } else if (bool === false) {
//     return true;
//   } else {
//     return "boolean expected";
//   }
// }

// console.log(reverse(true));
// console.log(reverse(false));
// console.log(reverse(0));
// console.log(reverse(null));

// ------------------------------------------------------------------------------------------------------------------

// Date: 09 - October - 2020
// Source: https://edabit.com/challenge/P6XbTvWyHkrpPfhvu
// Title: Volume of a Cone

// Instructions:
// Create a function that takes the height and radius of a cone as arguments and returns the volume of the cone rounded to the nearest hundredth.

// Examples:
// coneVolume(3, 2) ➞ 12.57
// coneVolume(15, 6) ➞ 565.49
// coneVolume(18, 0) ➞ 0

// Notes:
// See the resources tab for the formula.
// Return approximate answer by rounding the answer to the nearest hundredth.
// Use JavaScript's PI property, don't fall for 3.14 ;-)
// If the cone has no volume, return 0.

// Work:
// function coneVolume(h, r) {
//   const value = ((Math.PI * Math.pow(r, 2) * h) / 3).toFixed(2);
//   return value < 1 ? 0 : Number(value);
// }

// console.log(coneVolume(3, 2));
// console.log(coneVolume(15, 6));
// console.log(coneVolume(18, 0));

// ------------------------------------------------------------------------------------------------------------------

// Date: 08 - October - 2020
// Source: https://edabit.com/challenge/H7cs3TS87sFX72mjF
// Title: Capture the Rook

// Instructions:
// Write a function that returns true if two rooks can attack each other, and false otherwise.

// Examples:
// canCapture(["A8", "E8"]) ➞ true
// canCapture(["A1", "B2"]) ➞ false
// canCapture(["H4", "H3"]) ➞ true
// canCapture(["F5", "C8"]) ➞ false

// Notes:
// Assume no blocking pieces.
// Two rooks can attack each other if they share the same row (letter) or column (number).

// Sudo code:
// 1 - split arr[0] and arr[1] into rook1 and rook2
// 2 - compare letters and numbers
// 3 - return based on if they match

// Work:
// function canCapture([yourRook, opponentsRook]) {
//   const rook1 = yourRook.split("");
//   const rook2 = opponentsRook.split("");
//   // if (rook1[0] === rook2[0] || rook1[1] === rook2[1]) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   return rook1[0] === rook2[0] || rook1[1] === rook2[1] ? true : false;
// }

// console.log(canCapture(["A8", "E8"]));
// console.log(canCapture(["A1", "B2"]));
// console.log(canCapture(["H4", "H3"]));
// console.log(canCapture(["F5", "C8"]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 08 - October - 2020
// Source: https://edabit.com/challenge/Aofd78q72sAtgCyEY
// Title: War of Numbers

// Instructions:
// There's a great war between the even and odd numbers. Many numbers already lost their life in this war and it's your task to end this.
// You have to determine which group is larger: the even, or the odd. The larger group wins.
// Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the larger of the sums minus the smaller.

// Examples:
// warOfNumbers([2, 8, 7, 5]) ➞ 2
// 2 + 8 = 10
// 7 + 5 = 12
// 12 is larger than 10
// So we return 12 - 10 = 2
// warOfNumbers([12, 90, 75]) ➞ 27
// warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]) ➞ 168

// Sudo code:
// 1 - loop through
// 2 - remainder to determine odds vs evens
// 3 - push into corresponding arrays
// 4 - .reduce to all them all up
// 5 - subtract smaller value from the larger value

// Work:
// function warOfNumbers(arr) {
//   const evens = [];
//   const odds = [];

//   arr.map((x) => (x % 2 === 0 ? evens.push(x) : odds.push(x)));

//   const evensSum = evens.reduce((a, b) => a + b, 0);
//   const oddsSum = odds.reduce((a, b) => a + b, 0);

//   return evensSum > oddsSum ? evensSum - oddsSum : oddsSum - evensSum;
// }

// console.log(warOfNumbers([2, 8, 7, 5]));
// console.log(warOfNumbers([12, 90, 75]));
// console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 07 - October - 2020
// Source: https://edabit.com/challenge/BEHiM4RTmhcLX7Cq6
// Title: Repeat the Same Item Multiple Times

// Instructions:
// Create a function that takes two arguments (item, times).
// The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated.
// Return the result in an array.

// Examples:
// repeat("edabit", 3) ➞ ["edabit", "edabit", "edabit"]
// repeat(13, 5) ➞ [13, 13, 13, 13, 13]
// repeat("7", 2) ➞ ["7", "7"]
// repeat(0, 0) ➞ []

// Notes:
// item can be either a string or a number.
// times will always be a number.

// Work:
// function repeat(item, times) {
//   const result = [];
//   while (result.length < times) {
//     result.push(item);
//   }
//   return result;
// }

// console.log(repeat("edabit", 3));
// console.log(repeat(13, 5));
// console.log(repeat("7", 2));
// console.log(repeat(0, 0));

// ------------------------------------------------------------------------------------------------------------------

// Date: 07 - October - 2020
// Source: https://edabit.com/challenge/eitMRpuJR3Ls4zQsn
// Title: Shuffle the Name

// Instructions:
// Create a function that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.

// Examples:
// nameShuffle("Donald Trump") ➞ "Trump Donald"
// nameShuffle("Rosie O'Donnell") ➞ "O'Donnell Rosie"
// nameShuffle("Seymour Butts") ➞ "Butts Seymour"

// Notes:
// There will be exactly one space between the first and last name.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// Work:
// function nameShuffle(str) {
//   return str.split(" ").reverse().join(" ");
// }

// console.log(nameShuffle("Donald Trump"));
// console.log(nameShuffle("Rosie O'Donnell"));
// console.log(nameShuffle("Seymour Butts"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 07 - October - 2020
// Source: https://edabit.com/challenge/RXNybvGHLuvFiWKvq
// Title: Filter by Digit Length

// Instructions:
// Create a function that filters out an array to include numbers who only have a certain number of digits.

// Examples
// filterDigitLength([88, 232, 4, 9721, 555], 3) ➞ [232, 555]
// Include only numbers with 3 digits.

// filterDigitLength([2, 7, 8, 9, 1012], 1) ➞ [2, 7, 8, 9]
// Include only numbers with 1 digit.

// filterDigitLength([32, 88, 74, 91, 300, 4050], 1) ➞ []
// No numbers with only 1 digit exist => return empty array.

// filterDigitLength([5, 6, 8, 9], 1) ➞ [5, 6, 8, 9]
// All numbers in the array have 1 digit only => return original array.

// Notes:
// If no numbers of the specified digit length exist, return an empty array.
// If all numbers in the array have the specified digit length, return original array.
// The sub-array returned should have the same relative order as the original array.

// Work:
// function filterDigitLength(arr, num) {
//   const result = [];
//   arr.filter((x) => {
//     if (JSON.stringify(x).length === num) {
//       result.push(x);
//     }
//   });
//   return result;
// }

// console.log(filterDigitLength([2, 7, 8, 9, 1012], 1));
// console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1));
// console.log(filterDigitLength([5, 6, 8, 9], 1));

// ------------------------------------------------------------------------------------------------------------------

// Date: 07 - October - 2020
// Source: https://edabit.com/challenge/LEPFNs6sgeAnJ7qqo
// Title: Sum of Evenly Divisible Numbers from a Range
// Resource: https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp

// Instructions:
// Create a function that takes three arguments a, b, c and returns the sum of the numbers that are evenly divided by c from the range a, b inclusive.

// Examples:
// evenlyDivisible(1, 10, 20) ➞ 0
// No number between 1 and 10 can be evenly divided by 20.
// evenlyDivisible(1, 10, 2) ➞ 30
// 2 + 4 + 6 + 8 + 10 = 30
// evenlyDivisible(1, 10, 3) ➞ 18
// 3 + 6 + 9 = 18

// Notes:
// Return 0 if there is no number between a and b that can be evenly divided by c.

// Work:
// function evenlyDivisible(a, b, c) {
//   let arr = [a];
//   let count = a;
//   while (count < b) {
//     arr.push((count += 1));
//   }
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % c === 0) {
//       result.push(arr[i]);
//     }
//   }

//   return result.reduce((a, b) => a + b, 0);
// }

// console.log(evenlyDivisible(1, 10, 20));
// console.log(evenlyDivisible(1, 10, 2));
// console.log(evenlyDivisible(1, 10, 3));

// ------------------------------------------------------------------------------------------------------------------

// Date: 02 - October - 2020
// Source: https://edabit.com/challenge/oS3wCwLWsDqvs7XKd
// Title: Reverse the Order of a String

// Instructions:
// Create a function that takes a string as its argument and returns the string in reversed order.

// Examples:
// reverse("Hello World") ➞ "dlroW olleH"
// reverse("The quick brown fox.") ➞ ".xof nworb kciuq ehT"
// reverse("Edabit is really helpful!") ➞ "!lufpleh yllaer si tibadE"

// Notes:
// You can expect a valid string for all test cases.

// Work:
// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// console.log(reverse("Hello world!"));
// console.log(reverse("The quick brown fox."));

// ------------------------------------------------------------------------------------------------------------------

// Date: 04 - October - 2020
// Source: https://edabit.com/challenge/BA8Pom669icAdkdgj
// Title: Negate the Array of Numbers

// Instructions:
// Given an array of numbers, negate all elements contained within.
// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.

// Examples:
// negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]
// negate([-1, 2, -3, 4]) ➞ [1, -2, 3, -4]
// negate([]) ➞ []

// Notes:
// If you get an empty array, return an empty array: []

// Work:
// function negate(arr) {
//   result = [];
//   if (arr.length === 0) {
//     return result;
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       result.push(arr[i] * -1);
//     }
//     return result;
//   }
// }

// console.log(negate([1, 2, 3, 4]));
// console.log(negate([-1, 2, -3, 4]));
// console.log(negate([]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 04 - October - 2020
// Source: https://edabit.com/challenge/BA8Pom669icAdkdgj
// Title: Negate the Array of Numbers

// Instructions:
// Given an array of numbers, negate all elements contained within.
// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.

// Examples:
// negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]
// negate([-1, 2, -3, 4]) ➞ [1, -2, 3, -4]
// negate([]) ➞ []

// Notes:
//

// Sudo code:
// 1 -

// Work:

// ------------------------------------------------------------------------------------------------------------------

// Date: 04 - October - 2020
// Source: https://edabit.com/challenge/2Jh8PyLgPeYA2iRNu
// Title: Cube the Square Root
// Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt

// Instructions:
// Create a function that takes a number as an argument and returns the square root of that number cubed.

// Examples:
// cubeSquareRoot(81) ➞ 729
// cubeSquareRoot(1646089) ➞ 2111932187
// cubeSquareRoot(695556) ➞ 580093704

// Notes:
// All numbers will evenly square root, so don't worry about decimal numbers.

// Work:
// function cubeSquareRoot(num) {
//   return Math.sqrt(num ** 3);
// }

// console.log(cubeSquareRoot(81));
// console.log(cubeSquareRoot(1646089));
// console.log(cubeSquareRoot(695556));

// ------------------------------------------------------------------------------------------------------------------

// Date: 04 - October - 2020
// Source: https://edabit.com/challenge/b7iHQDw72zzkmgCun
// Title: Number of Boomerangs

// Instructions:
// A boomerang is a V-shaped sequence that is either upright or upside down.
// Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

// Some boomerang examples:

// [3, 7, 3], [1, -1, 1], [5, 6, 5]
// Create a function that returns the total number of boomerangs in an array.

// To illustrate:

// [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
// Be aware that boomerangs can overlap, like so:

// [1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]

// Examples:
// countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2
// countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1
// countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0

// Notes:
// [5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.

// Work:
// function countBoomerangs(arr) {
//   const boomerangs = [];
//   for (let i = 0; i < arr.length; i++) {
//     boomerangs.push(arr.slice(i, i + 3));
//   }

//   let result = 0;

//   for (let i = 0; i < boomerangs.length; i++) {
//     if (boomerangs[i].length === 3) {
//       if (
//         boomerangs[i][0] === boomerangs[i][2] &&
//         boomerangs[i][0] != boomerangs[i][1]
//       ) {
//         result += 1;
//       }
//     }
//   }
//   return result;
// }

// console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));
// console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));
// console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 01 - October - 2020
// Source: https://edabit.com/challenge/uRJKbFSkfa6sXeHZi
// Title: Convert Yen to USD

// Instructions:
// Create a function that can turn Yen (Japanese dollar) to USD (American dollar).

// Examples:
// yenToUsd(1) ➞ 0.01
// yenToUsd(500) ➞ 4.65
// yenToUsd(649) ➞ 6.04

// Notes:
// Each Yen to USD conversion is Yen / 107.5
// Round the result to two decimal places.

// Work:
// function yenToUsd(yen) {
//   const conversion = yen / 107.5;
//   return Number(conversion.toFixed(2));
// }

// console.log(yenToUsd(1));
// console.log(yenToUsd(500));
// console.log(yenToUsd(649));

// ------------------------------------------------------------------------------------------------------------------

// Date: 01 - October - 2020
// Source: https://edabit.com/challenge/vsoQiYJXRANcYrX3Z
// Title: Let's Sort This Array!
// Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort,
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

// Instructions:
// Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:
// "Asc" returns a sorted array in ascending order.
// "Des" returns a sorted array in descending order.
// "None" returns an array without any modification.

// Examples:
// ascDesNone([4, 3, 2, 1], "Asc" ) ➞ [1, 2, 3, 4]
// ascDesNone([7, 8, 11, 66], "Des") ➞ [66, 11, 8, 7]
// ascDesNone([1, 2, 3, 4], "None") ➞ [1, 2, 3, 4]

// Work:
// function ascDesNone(arr, str) {
//   switch (str) {
//     case "Asc":
//       return arr.sort((a, b) => a - b);
//     case "Des":
//       const desc = arr.sort((a, b) => a - b);
//       return desc.reverse();
//     case "None":
//       return arr;
//     default:
//       return arr;
//   }
// }

// console.log(ascDesNone([4, 3, 2, 1], "Asc"));
// console.log(ascDesNone([7, 8, 11, 66], "Des"));
// console.log(ascDesNone([1, 2, 3, 4], "None"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 30 - September - 2020
// Source: https://edabit.com/challenge/Wd7WKqm95jhcAGATG
// Title: Remove Duplicates from an Array

// Instructions:
// Create a function that takes an array of items,
// removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

// Examples:
// removeDups([1, 0, 1, 0]) ➞ [1, 0]
// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]

// Notes:
// Tests contain arrays with both strings and numbers.
// Tests are case sensitive.

// Work:
// function removeDups(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (result.indexOf(arr[i]) === -1) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(removeDups([1, 0, 1, 0]));
// console.log(removeDups(["The", "big", "cat"]));
// console.log(removeDups(["John", "Taylor", "John"]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 29 - September - 2020
// Source: https://edabit.com/challenge/MT5SbF9Xg5Dku6bqL
// Title: Return Last Index

// Instructions:
// Create a function that returns the last value of the last item in an array or string.

// Examples:
// lastItem([0, 4, 19, 34, 50, -9, 2]) ➞ 2
// lastItem("The quick brown fox jumped over the lazy dog") ➞ "g"
// lastItem([]) ➞ undefined

// Notes:
// Arrays/strings will be of varying size.
// Return undefined if array/string is emtpy.

// Work:
// function lastItem(input) {
//   const emptyStr = "";
//   const emptyArr = [];
//   if (input === emptyArr || input === emptyStr) {
//     return undefined;
//   } else if (typeof input === typeof emptyStr) {
//     return input.split("")[input.length - 1];
//   } else {
//     return input[input.length - 1];
//   }
// }

// console.log(lastItem([0, 4, 19, 34, 50, -9, 2]));
// console.log(lastItem("The quick brown fox jumped over the lazy dog"));
// console.log(lastItem([]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 29 - September - 2020
// Source: https://edabit.com/challenge/czEAQio8zr9HjZsQn
// Title: Truthy or Falsy?

// Instructions:
// A value is said to be "truthy" if it evaluates to true in a Boolean context.
// All values are truthy in JavaScript unless they're one of the following:
// false
// null
// undefined
// 0
// NaN
// ""
// In JavaScript, an empty object and an empty array are both considered "truthy,"
// but an empty string is considered false when evaluated as a Boolean (this behavior is what we call "falsey").
// Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsy.

// Examples:
// isTruthy(0) ➞ 0
// isTruthy(false) ➞ 0
// isTruthy("") ➞ 0
// isTruthy("false") ➞ 1

// Notes:
// You may have to take into account NaN's unique behavior in JavaScript.
// While other falsey values are equal to themselves, NaN != NaN
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// Work:
// function isTruthy(input) {
//   return !!input ? 1 : 0;
// }

// console.log(isTruthy(0));
// console.log(isTruthy(false));
// console.log(isTruthy(""));
// console.log(isTruthy("false"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 29 - September - 2020
// Source: https://edabit.com/challenge/humnHvXGXnBnStg5F
// Title: Trace That Matrix

// Instructions:
// Given a square matrix (i.e. same number of rows as columns),
// its trace is the sum of the entries in the main diagonal
// (i.e. the diagonal line from the top left to the bottom right).
// As an example, for:
// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ]
//   ... the trace is 1 + 5 + 9 = 15.
//   Write a function that takes a square matrix and computes its trace.

// Examples:
// trace([
//   [1, 4],
//   [4, 1]
// ]) ➞ 2

// // 1 + 1 = 2

// trace([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]) ➞ 15

// // 1 + 5 + 9 = 15

// trace([
//   [1, 0, 1, 0],
//   [0, 2, 0, 2],
//   [3, 0, 3, 0],
//   [0, 4, 0, 4]
// ]) ➞ 10

// 1 + 2 + 3 + 4 = 10

// Notes:
// As in the examples, the size of the matrices will vary (but they will always be square).

// Work:
// function trace(arr) {
//   let arrCount = -1;
//   let itemCount = -1;
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrCount += 1;
//     itemCount += 1;
//     result.push(arr[arrCount][itemCount]);
//   }

//   return result.reduce((a, b) => a + b);
// }

// console.log(
//   trace([
//     [1, 4],
//     [4, 1],
//   ])
// );

// console.log(
//   trace([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// console.log(
//   trace([
//     [1, 0, 1, 0],
//     [0, 2, 0, 2],
//     [3, 0, 3, 0],
//     [0, 4, 0, 4],
//   ])
// );

// ------------------------------------------------------------------------------------------------------------------

// Date: 28 - September - 2020
// Source: https://edabit.com/challenge/PWqkt9HiLcJSr6QEY
// Title: Sum of Number Elements in an Array

// Instructions:
// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array.
// Create a function that takes an array and returns the sum of all numbers in the array.

// Examples:
// numbersSum([1, 2, "13", "4", "645"]) ➞ 3
// numbersSum([true, false, "123", "75"]) ➞ 0
// numbersSum([1, 2, 3, 4, 5, true]) ➞ 15

// Work:
// function numbersSum(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Number.isInteger(arr[i]) === true) {
//       result.push(arr[i]);
//     }
//   }

//   if (result.length <= 0) {
//     return 0;
//   } else {
//     return result.reduce((a, b) => a + b);
//   }
// }

// console.log(numbersSum([1, 2, "13", "4", "645"]));
// console.log(numbersSum([true, false, "123", "75"]));
// console.log(numbersSum([1, 2, 3, 4, 5, true]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 27 - September - 2020
// Source: https://edabit.com/challenge/zvFri3sia4iNPTeqC
// Title: Is the String a Palindrome?

// Instructions:
// A palindrome is a word that is identical forward and backwards.
// mom
// racecar
// kayak
// Given a word, create a function that checks whether it is a palindrome.

// Examples:
// checkPalindrome("mom") ➞ true
// checkPalindrome("scary") ➞ false
// checkPalindrome("reviver") ➞ true
// checkPalindrome("stressed") ➞ false

// Notes:
// All test input is lower cased.

// Work:
// function checkPalindrome(str) {
//   const result = str.split("");
//   const reversed = result.reverse();
//   if (str === reversed.join("")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkPalindrome("mom"));
// console.log(checkPalindrome("scary"));
// console.log(checkPalindrome("reviver"));
// console.log(checkPalindrome("stressed"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 27 - September - 2020
// Source: https://edabit.com/challenge/3cBe8af7yG2rzLEA2
// Title: Convert Number to String of Dashes

// Instructions:
// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

// Examples:
// Go(1) ➞ "-"
// Go(5) ➞ "-----"
// Go(3) ➞ "---"

// Notes:
// You will be provided integers ranging from 1 to 60.
// Don't forget to return your result as a string.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// Work:
// function Go(num) {
//   const result = "-";
//   return result.repeat(num);
// }

// console.log(Go(1));
// console.log(Go(5));
// console.log(Go(3));

// ------------------------------------------------------------------------------------------------------------------

// Date: 27 - September - 2020
// Source: https://edabit.com/challenge/EMuszDzF66k9J73HG
// Title: Instant JAZZ

// Instructions:
// Create a function which concantenates the number 7 to the end of every chord in an array.
// Ignore all chords which already end with 7.

// Examples:
// jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]
// jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]
// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
// jazzify([]) ➞ []

// Notes:
// Return an empty array if the given array is empty.
// You can expect all the tests to have valid chords.

// Work:
// function jazzify(arr) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].endsWith("7")) {
//       result.push(arr[i]);
//     } else {
//       newItem = arr[i].concat("7");
//       result.push(newItem);
//     }
//   }
//   return result;
// }

// console.log(jazzify(["G", "F", "C"]));
// console.log(jazzify(["Dm", "G", "E", "A"]));
// console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));

// ------------------------------------------------------------------------------------------------------------------

// REDO
// Date: 24 - September - 2020
// Source: https://edabit.com/challenge/y4K6Mi7XfaauvoT3u
// Title: Burglary Series (08): Remove an Entry

// Instructions:
// Your spouse tells you that one of the items on the list wasn't stolen, it is in your castle in Transilvania.
// Given an object of the stolen items and an item name, return a copy without that item on the list.

// Examples:
// { piano: 300, tv: 100, skate:50 } ➞ { piano: 300, tv: 100 }
// { mirror: 500, painting: 1 } ➞ { painting: 1 }

// Notes:
// The object will contain at least two items.
// Preferably, mutate the copy, not the original.

// Work:
// function removeEntry(obj, itemName) {
//   // const step1 = Array.from(Object.keys(obj));
//   const arr = Array.from(Object.keys(itemName));
//   const remove = arr[0];
//   delete obj[remove];
//   return obj;
// }

// console.log(removeEntry({ piano: 300, tv: 100, skate: 50 }, { skate: 50 }));
// console.log(removeEntry({ mirror: 500, painting: 1 }, { mirror: 500 }));

// ------------------------------------------------------------------------------------------------------------------

// Date: 23 - September - 2020
// Source: https://edabit.com/challenge/L76DRaqDXkBJJ7tBr
// Title: Where is Bob!?!

// Instructions:
// Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array.
// If Bob is not in the array, return -1.

// Examples:
// findBob(["Jimmy", "Layla", "Bob"]) ➞ 2
// findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]) ➞ 0
// findBob(["Jimmy", "Layla", "James"]) ➞ -1

// Notes:
// Assume all names start with a capital letter and are lowercase thereafter (i.e. don't worry about finding "BOB" or "bob").

// Work:
// function findBob(names) {
//   return names.indexOf("Bob");
// }

// console.log(findBob(["Jimmy", "Layla", "Bob"]));
// console.log(findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]));
// console.log(findBob(["Jimmy", "Layla", "James"]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 23 - September - 2020
// Source: https://edabit.com/challenge/QQxJqZnfFN6mPcBCr
// Title: Dashed Vowels

// Instructions:
// Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

// Examples:
// dashed("Edabit") ➞ "-E-d-a-b-i-t"
// dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"
// dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"

// Notes:
// A string can contain uppercase and lowercase vowels.
// Y is not considered a vowel.

// Work:
// my solution
// function dashed(str) {
//   const alpha = str.split("");
//   const result = [];
//   for (let i = 0; i < alpha.length; i++) {
//     switch (alpha[i]) {
//       case "a":
//         result.push("-a-");
//         break;
//       case "e":
//         result.push("-e-");
//         break;
//       case "i":
//         result.push("-i-");
//         break;
//       case "o":
//         result.push("-o-");
//         break;
//       case "u":
//         result.push("-u-");
//         break;
//       case "A":
//         result.push("-A-");
//         break;
//       case "E":
//         result.push("-E-");
//         break;
//       case "I":
//         result.push("-I-");
//         break;
//       case "O":
//         result.push("-O-");
//         break;
//       case "U":
//         result.push("-U-");
//         break;
//       default:
//         result.push(alpha[i]);
//     }
//   }
//   return result.join("");
// }

// using regex solution
// const dashed = (str) => str.replace(/([aeiou])/gi, "-$1-");

// console.log(dashed("Edabit"));
// console.log(dashed("Carpe Diem"));

// ------------------------------------------------------------------------------------------------------------------

// Template
// Date: 17 - September - 2020
// Source: https://edabit.com/challenge/MwLp6s75F6S5wRrEJ
// Title: Calculate Determinant of a 2x2 Matrix

// Instructions:
// Create a function to calculate the determinant of a 2 * 2 matrix.
// The determinant of the following matrix is: ad - bc:
// [[a, b], [c, d]]

// Examples:
// calcDeterminant([
//   [1, 2],
//   [3, 4]
// ]) ➞ -2

// calcDeterminant([
//   [5, 3],
//   [3, 1]
// ]) ➞ -4

// calcDeterminant([
//   [1, 1],
//   [1, 1]
// ]) ➞ 0

// Notes:
// Matrix will be in 2 * 2 form only.

// Sudo code:
// 1 - separate the two arrays inside the param array
// 2 - set values to a, b, c, d
// 3 - do the arithmetic and return the result

// Work:
// function calcDeterminant(matrix) {
//   const arr1 = matrix[0];
//   const arr2 = matrix[1];
//   return arr1[0] * arr2[1] - arr1[1] * arr2[0];
// }

// console.log(
//   calcDeterminant([
//     [1, 2],
//     [3, 4],
//   ])
// );

// console.log(
//   calcDeterminant([
//     [1, 1],
//     [1, 1],
//   ])
// );

// console.log(
//   calcDeterminant([
//     [5, 3],
//     [3, 1],
//   ])
// );

// ------------------------------------------------------------------------------------------------------------------

// Date: 17 - September - 2020
// Source: https://edabit.com/challenge/c23dFfNiKbnguSQtq
// Title: Finding Nemo
// Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

// Instructions:
// You're given a string of words. You need to find the word "Nemo", and return a string like this:
// "I found Nemo at [the order of the word you find nemo]!".
// If you can't find Nemo, return "I can't find Nemo :(".

// Examples:
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
// findNemo("Nemo is me") ➞ "I found Nemo at 1!"
// findNemo("I Nemo am") ➞ "I found Nemo at 2!"

// Notes:
// ! , ? . are always separated from the last word.
// Nemo will always look like Nemo, and not NeMo or other capital variations.
// Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
// If there are multiple Nemo's in the sentence, only return for the first one.

// Sudo code:
// 1 - split on the spaces
// 2 - run conditional statement to find Nemo

// Work:
// function findNemo(sentence) {
//   const arr = sentence.split(" ");
//   const result = `I found Nemo at ${arr.indexOf("Nemo") + 1}!`;
//   const noNemo = `I can't find Nemo :(`;
//   return arr.indexOf("Nemo") > -1 ? result : noNemo;
// }

// console.log(findNemo("I am finding Nemo !"));
// console.log(findNemo("Nemo is me !"));
// console.log(findNemo("I Nemo am !"));
// console.log(findNemo("I am Sam !"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 05 - August - 2020
// Source: https://edabit.com/challenge/vCtepsfrE7Nts2a9j
// Title: Hamming Distance

// Instructions:
// Hamming distance is the number of characters that differ between two strings.

// To illustrate:

// String1: "abcbba"
// String2: "abcbda"

// Hamming Distance: 1 - "b" vs. "d" is the only difference.
// Create a function that computes the hamming distance between two strings.

// Examples:
// Examples
// hammingDistance("abcde", "bcdef") ➞ 5
// hammingDistance("abcde", "abcde") ➞ 0
// hammingDistance("strong", "strung") ➞ 1

// Notes:
// Both strings will have the same length.

// Sudo code:
// 1 - split both strings into arrays
// 2 - iterate through them
// 3 - compare elements
// 4 - if they are the same, move on to the next one
// 5 - else, increase the count
// 6 - return the count

// Work:
// function hammingDistance(str1, str2) {
//     arr1 = str1.split('');
//     arr2 = str2.split('');
//     count = 0;
//     for (let i = 0; i < arr1.length; i++){
//         if (arr1[i] !== arr2[i]){
//             count+=1
//         }
//     }
//     return count
// }

// console.log(hammingDistance("strong", "strung"))
// console.log(hammingDistance("abcde", "abcde"))
// console.log(hammingDistance("abcde", "bcdef"))

// ------------------------------------------------------------------------------------------------------------------

// Date: 04 - August - 2020
// Source: https://edabit.com/challenge/HzxTqSHLmRC3zEfXb
// Title: Neutralisation

// Instructions:
// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.

// Examples:
// neutralise("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.

// neutralise("--++--", "++--++") ➞ "000000"
// neutralise("-+-+-+", "-+-+-+") ➞ "-+-+-+"
// neutralise("-++-", "-+-+") ➞ "-+00"

// Notes:
// The two strings will be the same length.

// Sudo code:
// 1 - split the strings into an array of substrings
// 2 - shift the zeroeth element form each and place into a new array
// 3 - run through if else conditional checks
// 4 - return a result
// 5 - push into a new array and join, return new array

// Work:

// function neutralise(s1, s2) {
//     s1Split = s1.split('')
//     s2Split = s2.split('')
//     newArr = []
//     for(let i = 0; i < s1Split.length; i++){
//         if (s1Split[i] === s2Split[i]){
//             newArr.push(s1Split[i])
//         } else {
//             newArr.push('0')
//         }
//     }
//     return newArr.join('')
// }

// neutralise("-++-", "-+-+")

// ------------------------------------------------------------------------------------------------------------------

// Date: 04 - July - 2020
// Source: https://edabit.com/challenge/3EQGHyiYTNc9LPmhF
// Title: How Many Vowels?

// Instructions:
// Create a function that takes a string and returns the number (count) of vowels contained within it.

// Examples:
// countVowels("Celebration") ➞ 5
// countVowels("Palm") ➞ 1
// countVowels("Prediction") ➞ 4

// Notes:
// a, e, i, o, u are considered vowels (not y).
// All test cases are one word and only contain letters.

// Work:
// function countVowels(str){
//     const lower = str.toLowerCase();
//     const splitStr = lower.split('');
//     const vowels = []
//     const stringLength = splitStr.map(letter => {
//         if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
//             return vowels.push(letter);
//         }
//     });

//     return vowels.length;
// }

// console.log(countVowels('less'));
// console.log(countVowels('Celebration'));
// console.log(countVowels('Palm'));
// console.log(countVowels('Prediction'));
// console.log(countVowels('Ant'));

// ------------------------------------------------------------------------------------------------------------------

// Date: 03 - July - 2020
// Source: https://edabit.com/challenge/3jzycf6fcgwZbvpcf
// Title: Remove Trailing and Leading Zeros

// Instructions:
// Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.
// Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
// Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).

// Examples:
// removeLeadingTrailing("230.000") ➞ "230"
// removeLeadingTrailing("00402") ➞ "402"
// removeLeadingTrailing("03.1400") ➞ "3.14"
// removeLeadingTrailing("30") ➞ "30"

// Notes:
// Return a string.
// If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0").
// If the number is 0, 0.0, 000, 00.00, etc... return "0".

// Work:
// function removeLeadingTrailing(n){
//     return Math.abs(Number(n)).toString();
// }

// console.log(removeLeadingTrailing('230.000'));
// console.log(removeLeadingTrailing('00402'));
// console.log(removeLeadingTrailing("03.1400"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 02 - July - 2020
// Source: https://edabit.com/challenge/YJuhHKSmNCaKNHcD3
// Title: Highest Digit
// Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

// Instructions:
// Create a function that takes a number as an argument and returns the highest digit in that number.

// Examples:
// highestDigit(379) ➞ 9
// highestDigit(2) ➞ 2
// highestDigit(377401) ➞ 7

// Work:
// function highestDigit(str){
//     const arr = str.toString().split('');
//     return Math.max(...arr);
// }

// console.log(highestDigit(379));

// ------------------------------------------------------------------------------------------------------------------

// Date: 29 - June - 2020
// Source: https://edabit.com/challenge/xuRjEej9F9ZG3vg7M
// Title: Replace Vowel with Another Character

// Instructions:
// Create a function that takes a string and replaces the vowels with another character.
// a = 1
// e = 2
// i = 3
// o = 4
// u = 5

// Examples:
// replaceVowel("karachi") ➞ "k1r1ch3"
// replaceVowel("chembur") ➞ "ch2mb5r"
// replaceVowel("khandbari") ➞ "kh1ndb1ri"

// Notes:
// The input will always be in lowercase.

// Work:
// function replaceVowel(string){
// from ediabit soultions
// match the vowel and change the index by adding one
// return string.replace(/[aeiou]/g,v=> "aeiou".indexOf(v)+1)

// another way to solve the problem
// var s = string.split('');
// const newMap = s.map((letter, i) => {
//     if (s[i] === 'a'){
//         return 1
//     } else if (s[i] === 'e'){
//         return 2
//     } else if(s[i] === 'i'){
//         return 3
//     } else if(s[i] === 'o'){
//         return 4
//     } else if(s[i] === 'u'){
//         return 5
//     } else {
//         return letter
//     }
// })

// return newMap.join('');

// below works, but isn't the most efficient
// return string.replace(/a/gi, 1).replace(/e/gi, 2).replace(/i/gi, 3).replace(/o/gi, 5).replace(/u/gi, 5)
// }

// console.log(replaceVowel('karachi'));
// console.log(replaceVowel('chembur'));
// console.log(replaceVowel('khandbari'));

// ------------------------------------------------------------------------------------------------------------------

// Date: 28 - June - 2020
// Source: https://edabit.com/challenge/fkzJMioMcnP4p4BFG
// Title: Return the Time Saved by Speeding

// Instructions:
// One cause for speeding is the desire to shorten the time spent traveling. While in long distance trips speeding does save an appreciable amount of time, the same cannot be said about short distance trips.

// Create a function that calculates the amount of time saved (in minutes) were you traveling with an average speed that is above the speed-limit as compared to traveling with an average speed exactly at the speed-limit.

// Examples:
// The paramater's format is as follows:
// (speed limit, avg speed, distance traveled at avg speed)

// timeSaved(80, 90, 40) ➞ 3.3

// timeSaved(80, 90, 4000) ➞ 333.3

// timeSaved(80, 100, 40 ) ➞ 6.0

// timeSaved(80, 100, 10) ➞ 1.5

// Work:
// function timeSaved(limit, avg, distance){
//     const speedLimit = distance/limit*60;
//     const fullLimit = speedLimit.split
//     const avgSpeed = distance/avg*60;
//     return speedLimit - avgSpeed;
// }

// console.log(timeSaved(80, 90, 40));
// console.log(timeSaved(80, 90, 4000));
// console.log(timeSaved(80, 100, 40));
// console.log(timeSaved(80, 100, 10));

// ------------------------------------------------------------------------------------------------------------------

// Date: 19 - June - 2020
// Source: https://edabit.com/challenge/KffCqRz23XL5ewbgH
// Title: Reverse Words Starting With a Particular Letter

// Instructions:
// Write a function that reverses all the words in a sentence that start with a particular letter.

// Examples:
// specialReverse("word searches are super fun", "s")
// ➞ "word sehcraes are repus fun"
// specialReverse("first man to walk on the moon", "m")
// ➞ "first nam to walk on the noom"
// specialReverse("peter piper picked pickled peppers", "p")
// ➞ "retep repip dekcip delkcip sreppep"

// Notes:
// Reverse the words themselves, not the entire sentence.
// All characters in the sentence will be in lower case.

// Work:
// function specialReverse(s, c) {
//     const sent = s.split(' ');
//     const reverse = sent.map(word => {
//         const wordCheck = word.split('');

//         if (word[0] === c){
//             return wordCheck.reverse().join('')
//         } else {
//             return wordCheck.join('');
//         }

//     })
//     return reverse.join(' ');
// }

// console.log(specialReverse('word searches are super fun', 's'));

// ------------------------------------------------------------------------------------------------------------------

// Date: 18 - June - 2020
// Source: https://edabit.com/challenge/KgNMGbXXst7ZdWchR
// Title: Fix the Error: Vowel Edition

// Instructions:
// Your friend is trying to write a function that removes all vowels from a string. They write:
// function removeVowels(str) {
//     return str.replace(/[aeiou]/, "")
//   }
//   However, it seems that it doesn't work? Fix your friend's code so that it actually does remove all vowels.

// Examples:
// removeVowels("candy") ➞ "cndy"
// removeVowels("hello") ➞ "hllo"
// The "e" is removed, but the "o" is still there!
// removeVowels("apple") ➞ "pple"

// Work:
// Fix this incorrect code, so that all tests pass!
// function removeVowels(str) {
//     return str.replace(/[aeiou]/gi, '')
// };

// console.log(removeVowels('candy'));
// console.log(removeVowels('hello'));
// console.log(removeVowels('apple'));

// ------------------------------------------------------------------------------------------------------------------

// Date: 18 - June - 2020
// Source: https://edabit.com/challenge/Qbi3GuXjwW5fsoKRn
// Title: Additive Inverse

// Instructions:
// A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

// Examples:
// additiveInverse([5, -7, 8, 3]) ➞ [-5, 7, -8, -3]
// additiveInverse([1, 1, 1, 1, 1]) ➞ [-1, -1, -1, -1, -1]
// additiveInverse([-5, -25, 35]) ➞ [5, 25, -35]

// Work:
// function additiveInverse(arr){
//     return arr.map(num => +-num);
// }

// console.log(additiveInverse([5, -7, 8, 3]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 18 - June - 2020
// Source: https://edabit.com/challenge/xtDkfWxEh2hbmAHvn
// Title: Ageing the Population...
// Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in,https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

// Instructions:
// Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.

// Examples:
// afterNYears({
//   "Joel" : 32,
//   "Fred" : 44,
//   "Reginald" : 65,
//   "Susan" : 33,
//   "Julian" : 13
// }, 1) ➞ {
//   "Joel" : 33,
//   "Fred" : 45,
//   "Reginald" : 66,
//   "Susan" : 34,
//   "Julian" : 14
// }

// afterNYears({
//   "Baby" : 2,
//   "Child" : 8,
//   "Teenager" : 15,
//   "Adult" : 25,
//   "Elderly" : 71
// }, 19) ➞ {
//   "Baby" : 21,
//   "Child" : 27,
//   "Teenager" : 34,
//   "Adult" : 44,
//   "Elderly" : 90
// }

// afterNYears({
//   "Genie" : 1000,
//   "Joe" : 40
// }, 5) ➞ {
//   "Genie" : 1005,
//   "Joe" : 45
// }

// Notes:
// Assume that everyone is immortal (it would be a bit grim if I told you to remove names once they reached 75).
// n should be a positive number because last time I checked, people don't tend to age backwards. Therefore, use the absolute value of n.

// Sudo code:
// 1 - write function
// 2 - pass args ({an object of names: ages}, years)
// 3 - use a for...in loop to iterate over an object
// 4 - define the args
// 5 - define what I want back

// Work:
// function afterNYears(names, n){

//     for(const prop in names){
// 		names[prop] += Math.abs(n);
// 	}
// 	return names;
// }

// console.log(afterNYears({"Baby" : 2, "Child" : 8, "Teenager" : 15, "Adult" : 25, "Elderly" : 71}, 5))

// ------------------------------------------------------------------------------------------------------------------

// Date: 18 - June - 2020
// Source: https://edabit.com/challenge/fxvceQdv7RHQzrx2J
// Title: Filter Repeating Character Strings
// Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// Instructions:
// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

// Examples:
// identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"])
// ➞ ["aaaaaa", "d", "eeee"]
// identicalFilter(["88", "999", "22", "545", "133"])
// ➞ ["88", "999", "22"]
// identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"])
// ➞ []

// Notes:
// A string with a single character is trivially counted as a string with repeating identical characters.
// If there are no strings with repeating identical characters, return an empty array (see example #3).

// Work:
// function identicalFilter(arr){
//     return arr.filter(str => new Set(str).size === 1)
// }

// console.log(identicalFilter(['aaaaaa', 'bc', 'd', 'eeeeee', 'xyz']));
// console.log(identicalFilter(['88', '999', '22', '545', '133']));
// console.log(identicalFilter(['xxxxo', 'oxo', 'ooxxoo', '545', '133']));

// ------------------------------------------------------------------------------------------------------------------

// Date: 17 - June - 2020
// Source: https://edabit.com/challenge/j3EoCMaD3LrEYtx78
// Title: Fix the Error: Mutating Arrays

// Instructions:
// Suppose I want to define a function that removes the last element of an array each time I call it, but does not mutate the original array. Fix the code so that the results are no longer mutating the array.

// Examples:
// x = [1, 2, 3, 4, 5]
// minusOne(x) ➞ [1, 2, 3, 4]  // 1st time function is called.
// minusOne(x) ➞ [1, 2, 3]  // 2nd time function is called.
// minusOne(x) ➞ [1, 2]  // 3rd time function is called.
// minusOne(x) ➞ [1]  // 4th time function is called.

// // What I want instead:
// minusOne(x) ➞ [1, 2, 3, 4]  // 1st time function is called.
// minusOne(x) ➞ [1, 2, 3, 4]  // 2nd time function is called.
// minusOne(x) ➞ [1, 2, 3, 4]  // 3rd time function is called.
// minusOne(x) ➞ [1, 2, 3, 4]  // 4th time function is called.

// Work:
// x = [1, 2, 3, 4, 5]

// function minusOne(arr){
//     return arr.filter(a => a !== arr.length);
// }

// console.log(minusOne(x));
// console.log(minusOne(x));
// console.log(minusOne(x));
// console.log(minusOne(x));
// console.log(minusOne(x));

// ------------------------------------------------------------------------------------------------------------------

// Date: 17 - June - 2020
// Source: https://edabit.com/challenge/27Toh4rACcmRvRLrb
// Title: Sum of the Items in an Array

// Instructions:
// Create a function that takes an array and returns the sum of all items in the array.

// Examples:
// sumArray([1, 2, 3]) ➞ 6
// 1 + 2 + 3 = 6
// sumArray([1, [2, [1]], 3]) ➞ 7
// // 1 + 2 + 1 + 3 = 7

// Notes:
// The item in an array can be another array.

// Work:
// function sumArray(arr){
//     const flatArr = arr.flat();
//     const newFlat = flatArr.flat();
//     const sum = newFlat.reduce((a, b) => a+b);

//     return sum;
// }

// console.log(sumArray([1, 2, 3]));
// console.log(sumArray([1, [2, [1]], 3]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 16 - June - 2020
// Source: https://edabit.com/challenge/xDNkweBBNXBMyQRdG
// Title: Create a Phone Number

// Instructions:
// Write a function that takes an array of 10 integers (between 0 and 9) and returns a string in form of a phone number.

// Examples:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
// createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) ➞ "(111) 111-1111"
// createPhoneNumber([8, 7, 4, 1, 2, 5, 6, 5, 8, 2]) ➞ "(874) 125-6582"

// Work:
// function createPhoneNumber(numbers){
//         const three = numbers.slice(0,3).join('');
//         const threeTwo = numbers.slice(3,6).join('');
//         const four = numbers.slice(6,10).join('');
//         return `(${three}) ${threeTwo}-${four}`;

// return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
// }

// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 16 - June - 2020
// Source: https://edabit.com/challenge/v9DwaeR6NQoapEvHh
// Title: Difference of Max and Min Numbers in Array

// Instructions:
// Create a function that takes an array and returns the difference between the biggest and smallest numbers.

// Examples:
// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

// diffMaxMin([44, 32, 86, 19]) ➞ 67
// Smallest number is 19, biggest is 86.

// Work:
// function diffMaxMin(arr){
//     return Math.max(...arr) - Math.min(...arr);
// }

// console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));
// console.log(diffMaxMin([44, 32, 86, 19]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 16 - June - 2020
// Source: https://edabit.com/challenge/havnWL4BimvoaXNMn
// Title: Return the Four Letter Strings

// Instructions:
// Create a function that takes an array of strings and returns the words that are exactly four letters.

// Examples:
// isFourLetters(["Tomato", "Potato", "Pair"]) ➞ ["Pair"]
// isFourLetters(["Kangaroo", "Bear", "Fox"]) ➞ ["Bear"]
// isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) ➞ ["Ryan", "Matt"]

// Notes:
// You can expect valid strings for all test cases.

// Work:
// function isFourLetters(arr){
//     return arr.filter(item => item.length === 4);
// }

// console.log(isFourLetters(["Tomato", "Potato", "Pair"]));
// console.log(isFourLetters(["Kangaroo", "Bear", "Fox"]));
// console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 16 - June - 2020
// Source: https://edabit.com/challenge/JcRKAzSnnPdSPBKMK
// Title: Semantic Versioning

// Instructions:
// In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.
// The first number is the major version.
// The second number is the minor version.
// The third number is the patch (bug fixes).
// Write three separate functions, one to retrieve each element in the semantic versioning specification.

// Examples:
// // 6.1.9
// retrieveMajor("6.1.9") ➞ "6"
// retrieveMinor("6.1.9") ➞ "1"
// retrievePatch("6.1.9") ➞ "9"

// 2.1.0
// retrieveMajor("2.1.0") ➞ "2"
// retrieveMinor("2.1.0") ➞ "1"
// retrievePatch("2.1.0") ➞ "0"

// Work:
// function retrieveMajor(semver) {
// 	return String(semver.split('.')[0]);
// }
// console.log(retrieveMajor('6.1.9'));

// function retrieveMinor(semver) {
// 	return String(semver.split('.')[1]);
// }
// console.log(retrieveMinor('6.1.9'));

// function retrievePatch(semver) {
//     return String(semver.split('.')[2]);
// }
// console.log(retrievePatch('6.1.9'));

// ------------------------------------------------------------------------------------------------------------------

// Date: 15 - June - 2020
// Source: https://edabit.com/challenge/AtoWYYC9THAH5HbS2
// Title: Basic Calculator

// Instructions:
// Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

// Examples:
// calculator(2, "+", 2) ➞ 4
// calculator(2, "*", 2) ➞ 4
// calculator(4, "/", 2) ➞ 2

// Notes:
// If the input tries to divide by 0, return: "Can't divide by 0!"

// Work:
// function calculator(num1, operator, num2){
//     return operator === '/' && num2 === 0 ? "Can't divide by 0!" : eval(`${num1} ${operator} ${num2}`);
// }

// console.log(calculator(2, '+', 2));
// console.log(calculator(2, '*', 2));
// console.log(calculator(4, '/', 2));
// console.log(calculator(4, '/', 0));

// ------------------------------------------------------------------------------------------------------------------

// Date: 15 - June - 2020
// Source: https://edabit.com/challenge/Tnjbf6pdFsCjmaF8p
// Title: Square Every Digit

// Instructions:
// Create a function that squares every digit of a number.

// Examples:
// squareDigits(9119) ➞ 811181
// squareDigits(2483) ➞ 416649
// squareDigits(3212) ➞ 9414

// Notes:
// The function receives an integer and must return an integer.

// Work:
// function squareDigits(n){
//     const splitNum = String(n).split('');
//     const square = splitNum.map(item => {
//         return Number(item * item)
//     })

//     return Number(square.join(''));
// }

// console.log(squareDigits(9119));
// console.log(squareDigits(2483));

// ------------------------------------------------------------------------------------------------------------------

// Date: 14 - June - 2020
// Source: https://edabit.com/challenge/AP4hnF97anRc2mAZ6
// Title: Return the Objects Keys and Values

// Instructions:
// Create a function that takes an object and returns the keys and values as separate arrays.

// Examples:
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

// Notes:
// Remember to sort the keys.

// Work:
// function keysAndValues(obj){
//     return [Object.keys(obj).sort(), Object.values(obj)];
// }

// console.log(keysAndValues({ a: 1, b: 2, c: 3}));

// ------------------------------------------------------------------------------------------------------------------

// Date: 13 - June - 2020
// Source: https://edabit.com/challenge/4aaBNPnFMc3bzR7JR
// Title: Convert Key, Values in an Object to Array

// Instructions:
// Write a function that converts an object into an array of keys and values.

// Examples:
// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) ➞ [["D", 1], ["B", 2], ["C", 3]]

// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

// Work:
// function objectToArray(obj){
//     const entries = Object.entries(obj);
//     return entries;
// }

// console.log(objectToArray({
//     D: 1,
//     B: 2,
//     C: 3
// }));

// ------------------------------------------------------------------------------------------------------------------

// Date: 13 - June - 2020
// Source: https://edabit.com/challenge/uJ9K3HtbjHoDGXKhg
// Title: Eliminate Odd Numbers within an Array

// Instructions:
// Create a function that takes an array of numbers and returns only the even values.

// Examples:
// noOdds([1, 2, 3, 4, 5, 6, 7, 8]) ➞ [2, 4, 6, 8]
// noOdds([43, 65, 23, 89, 53, 9, 6]) ➞ [6]
// noOdds([718, 991, 449, 644, 380, 440]) ➞ [718, 644, 380, 440]

// Notes:
// Return all even numbers in the order they were given.
// All test cases contain valid numbers ranging from 1 to 3000.

// Work:
// function noOdds(arr){
//     const newArr = arr.filter(item => item % 2 === 0)

//     return newArr;
// }

// console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(noOdds([43, 65, 23, 89, 53, 9, 6]));
// console.log(noOdds([718, 991, 449, 644, 380, 440]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 13 - June - 2020
// Source: https://edabit.com/challenge/tmnCStcrkdWbreKP5
// Title: Get Sum of People's Budget

// Instructions:
// Create the function that takes an array with objects and returns the sum of people's budgets.

// Examples:
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600

// Work:
// function getBudget(arr){
//     const budget = []

//     for(let i = 0; i < arr.length; i++){
//         budget.push(arr[i].budget);
//     }

//     const budgetSum = budget.reduce((a, b) => a+b, 0);

//     return budgetSum
// }

// console.log(getBudget([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve",  age: 32, budget: 40000 },
//     { name: "Martin",  age: 16, budget: 2700 }
//     ]))

// console.log(getBudget([
//       { name: "John",  age: 21, budget: 29000 },
//       { name: "Steve",  age: 32, budget: 32000 },
//       { name: "Martin",  age: 16, budget: 1600 }
//     ]))

// ------------------------------------------------------------------------------------------------------------------

// Date: 12 - June - 2020
// Source: https://edabit.com/challenge/H9ohpGMyqJ9bAkqE5
// Title: Check if String Ending Matches Second String

// Instructions:
// Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.

// Examples:
// checkEnding("abc", "bc") ➞ true
// checkEnding("abc", "d") ➞ false
// checkEnding("samurai", "zi") ➞ false
// checkEnding("feminine", "nine") ➞ true
// checkEnding("convention", "tio") ➞ false

// Notes:
// All test cases are valid one word strings.

// Work:
// function checkEnding(str1, str2){
//     if (str1.endsWith(str2)){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(checkEnding('abc', 'bc'));
// console.log(checkEnding('adc', 'd'));

// ------------------------------------------------------------------------------------------------------------------

// Date: 12 - June - 2020
// Source: https://edabit.com/challenge/Hs4TpDHX57Rqegmgg
// Title: Concatenate Variable Number of Input Arrays

// Instructions:
// Create a function that concatenates n input arrays, where n is variable.

// Examples:
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]

// Notes:
// Arrays should be concatenated in order of the arguments.

// Work:
// function concat(...args){
//     return args.flat();
// }

// console.log(concat([1, 2, 3], [4, 5], [6, 7]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 10 - June - 2020
// Source: https://edabit.com/challenge/RGQXN4TG2CQoBAReQ
// Title: Number of Squares in a n * n Grid

// Instructions:
// Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.

// Examples:
// numberSquares(2) ➞ 5
// numberSquares(4) ➞ 30
// numberSquares(5) ➞ 55

// Notes:
// Input is a positive integer.
// Square pyramidal number.

// Work:
// function numberSquares(n){
//     return (((n+1)*(2*n +1)) *n) / 6
// }

// console.log(numberSquares(2));
// console.log(numberSquares(4));
// console.log(numberSquares(5));

// ------------------------------------------------------------------------------------------------------------------

// Date: 10 - June - 2020
// Source: https://edabit.com/challenge/FydPqxRiosP7EBiQh
// Title: Get Word Count

// Instructions:
// Create a function that takes a string and returns the word count. The string will be a sentence.

// Examples:
// countWords("Just an example here move along") ➞ 6
// countWords("This is a test") ➞ 4
// countWords("What an easy task, right") ➞ 5

// Work:
// function countWords(str){
//     const newStr = str.split(' ');

//     return newStr.length;
// }

// console.log(countWords("Just an example here move along"));
// console.log(countWords("This is a test"));
// console.log(countWords("What an easy task, right"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 09 - June - 2020
// Source: https://edabit.com/challenge/uGKSYufSxtBErTrhd
// Title: Even or Odd Number of Factors

// Instructions:
// Create a function that returns "even" if a number has an even number of factors and "odd" if a number has an odd number of factors.

// Examples:
// factorGroup(33) ➞ "even"
// factorGroup(36) ➞ "odd"
// factorGroup(7) ➞ "even"

// Notes:
// You don't need to actually calculate the factors to solve this problem.
// Think about why a number would have an odd number of factors.

// // Work:
// function factorGroup(num){
//     const newNum = Math.sqrt(num);

//     if(Number.isInteger(newNum)){
//         return "odd"
//     } else {
//         return "even"
//     }
// }

// console.log(factorGroup(33));
// console.log(factorGroup(36));
// console.log(factorGroup(7));
// console.log(factorGroup(25));
// console.log(factorGroup(1176));

// ------------------------------------------------------------------------------------------------------------------

// Date: 09 - June - 2020
// Source: https://edabit.com/challenge/YT2kXSMEtACPPk35R
// Title: Integer in Range?

// Instructions:
// Create a function which validates whether a number n is exclusively within the bounds of lower and upper. Return false if n is not an integer.

// Examples:
// intWithinBounds(3, 1, 9) ➞ true
// intWithinBounds(6, 1, 6) ➞ false
// intWithinBounds(4.5, 3, 8) ➞ false

// Notes:
// Exclusively means that a number is considered not within the bounds if it is equal to the upper bound (see example #2).
// Bounds will be always given as integers.

// Work:
// function intWithinBounds(n, lower, upper){
//     if (Number.isInteger(n) === true){
//         if (n >= lower && n < upper){
//             return true
//         } else {
//             return false
//         }
//     } else if (Number.isInteger(n) === false){
//         return false
//     }
// }

// console.log(intWithinBounds(3, 1, 9));
// console.log(intWithinBounds(6, 1, 6));
// console.log(intWithinBounds(4.5, 3, 8));
// console.log(Number.isInteger(4.5));
// console.log(Number.isNaN(4.5));

// ------------------------------------------------------------------------------------------------------------------

// Date: 08 - June - 2020
// Source: https://edabit.com/challenge/g66EJsbdnSDayyEcK
// Title: Find the Smallest Number in an Array

// Instructions:
// Create a function that takes an array of numbers and returns the smallest number in the set.

// Examples:
// findSmallestNum([34, 15, 88, 2]) ➞ 2
// findSmallestNum([34, -345, -1, 100]) ➞ -345
// findSmallestNum([-76, 1.345, 1, 0]) ➞ -76
// findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]) ➞ -0.9999
// findSmallestNum([7, 7, 7]) ➞

// Notes:
// Test cases contain decimals.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// Work:
// function findSmallestNum(arr){
//     return Math.min(...arr);
// }

// console.log(findSmallestNum([34, 15, 88, 2]));
// console.log(findSmallestNum([34, -345, -1, 100]));
// console.log(findSmallestNum([-76, 1.345, 1, 0]));
// console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]));
// console.log(findSmallestNum([7, 7, 7]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 07 - June - 2020
// Source: https://edabit.com/challenge/NKknKNfeaJxLDfJuZ
// Title: Convert Number to Corresponding Month Name

// Instructions:
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

// Examples:
//
// Number	Month Name
// 1	January
// 2	February
// 3	March
// 4	April
// 5	May
// 6	June
// 7	July
// 8	August
// 9	September
// 10	October
// 11	November
// 12	December
// monthName(3) ➞ "March"
// monthName(12) ➞ "December"
// monthName(6) ➞ "June"

// Notes:
// You can expect only integers ranging from 1 to 12 as test input.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// Work:
// function monthName(num){

// option 2
// const months = {
//     1: 'January',
//     2: 'February',
//     3: 'March',
//     4: 'April',
//     5: 'May',
//     6: 'June',
//     7: 'July',
//     8: 'August',
//     9: 'September',
//     10: 'October',
//     11: 'November',
//     12: 'December',
// }

// return months[num];

// option 1
// if (num === 1){
//     return 'January'
// } else if (num === 2){
//     return 'February'
// } else if (num === 3){
//     return 'March'
// } else if (num === 4){
//     return 'April'
// } else if (num === 5){
//     return 'May'
// } else if (num === 6){
//     return 'June'
// } else if (num === 7){
//     return 'July'
// } else if (num === 8){
//     return 'August'
// } else if (num === 9){
//     return 'September'
// } else if (num === 10){
//     return 'October'
// } else if (num === 11){
//     return 'November'
// } else if (num === 12){
//     return 'December'
// }
// }

// console.log(monthName(3));
// console.log(monthName(12));
// console.log(monthName(6));

// ------------------------------------------------------------------------------------------------------------------

// Date: 07 - June - 2020
// Source: https://edabit.com/challenge/RPBqWjEa7iyo9p54F
// Title: Count Syllables

// Instructions:
// Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.

// Examples:
// numberSyllables("buf-fet") ➞ 2
// numberSyllables("beau-ti-ful") ➞ 3
// numberSyllables("mon-u-men-tal") ➞ 4
// numberSyllables("on-o-mat-o-poe-ia") ➞ 6

// Work:
// function numberSyllables(word){
//     const newWord = word.split('-');

//     return newWord.length;
// }

// console.log(numberSyllables('buf-fet'));
// console.log(numberSyllables('beau-ti-ful'));
// console.log(numberSyllables('mon-u-men-tal'));
// console.log(numberSyllables('on-o-mat-o-poe-ia'));

// ------------------------------------------------------------------------------------------------------------------

// Date: 07- June - 2020
// Source: https://edabit.com/challenge/hzxN9bAebBPNqdQto
// Title: A Redundant Function

// Instructions:
// Write a function redundant that takes in a string str and returns a function that returns str.

// Examples:
// const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""

// Notes:
// Your function should return a function, not a string.

// Work:
// function redundant(str){
//     const variable = str

//     function newFunc(){
//         return variable
//     }

//     // edabit test checks for newFunc uninvoked
//     return newFunc()
// }

// console.log(redundant("apple"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 03 - June - 2020
// Source: https://edabit.com/challenge/pPNAs5PvB3WvnDwDM
// Title: Converting Objects to Arrays
// Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

// Instructions:
// Write a function that converts an object into an array, where each element represents a key-value pair.

// Examples:
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
// toArray({}) ➞ []

// Notes:
// Return an empty array if the object is empty.

// Work:
// function toArray(obj) {
//     return Object.entries(obj);
// }

// console.log({ a: 1, b: 2});

// ------------------------------------------------------------------------------------------------------------------

// Date: 02 - June - 2020
// Source: https://edabit.com/challenge/ebcd4Xu8TLizaj6dm
// Title: Array of Multiples
// Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

// Instructions:
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

// Examples:
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

// Notes:
// Notice that num is also included in the returned array.

// Work:
// function arrayOfMultiples(num, length) {
//     const multiples = [];

//     for(let i = 1; i <= length; i++){
//         multiples.push(num * i);
//     };

//     return multiples;
// }

// console.log(arrayOfMultiples(7, 5));
// console.log(arrayOfMultiples(12, 10));
// console.log(arrayOfMultiples(17, 6));

// ------------------------------------------------------------------------------------------------------------------

// Date: - May - 2020
// Source: https://edabit.com/challenge/rGsgEswWuW339yNxY
// Title: Return a String as an Integer

// Instructions:
// Create a function that takes a string and returns it as an integer.

// Examples:
// stringInt("6") ➞ 6
// stringInt("1000") ➞ 1000
// stringInt("12") ➞ 12

// Work:
// function stringInt(str) {
// 	return Number(str)
// }

// ------------------------------------------------------------------------------------------------------------------

// Date: 29 - May - 2020
// Source:
// Title: Web Sprint Challenge

// const artists = [
//     {
//       "id": 0,
//       "name": "Amedeo Modigliani",
//       "years": "1884 - 1920",
//       "genre": "Expressionism",
//       "nationality": "Italian",
//       "bio": "Amedeo Clemente Modigliani (Italian pronunciation: [ameˈdɛːo modiʎˈʎaːni]; 12 July 1884 – 24 January 1920) was an Italian Jewish painter and sculptor who worked mainly in France. He is known for portraits and nudes in a modern style characterized by elongation of faces, necks, and figures that were not received well during his lifetime but later found acceptance. Modigliani spent his youth in Italy, where he studied the art of antiquity and the Renaissance. In 1906 he moved to Paris, where he came into contact with such artists as Pablo Picasso and Constantin Brâncuși. By 1912 Modigliani was exhibiting highly stylized sculptures with Cubists of the Section d'Or group at the Salon d'Automne.",
//       "wikipedia": "http://en.wikipedia.org/wiki/Amedeo_Modigliani",
//       "paintings": 193
//     },
//     {
//       "id": 1,
//       "name": "Vasiliy Kandinskiy",
//       "years": "1866 - 1944",
//       "genre": "Expressionism,Abstractionism",
//       "nationality": "Russian",
//       "bio": "Wassily Wassilyevich Kandinsky (Russian: Васи́лий Васи́льевич Канди́нский, tr. Vasíliy Vasílʹevich Kandínskiy) (16 December [O.S. 4 December] 1866 – 13 December 1944) was a Russian painter and art theorist.",
//       "wikipedia": "http://en.wikipedia.org/wiki/Wassily_Kandinsky",
//       "paintings": 88
//     },
//     {
//       "id": 2,
//       "name": "Diego Rivera",
//       "years": "1886 - 1957",
//       "genre": "Social Realism,Muralism",
//       "nationality": "Mexican",
//       "bio": "Diego María de la Concepción Juan Nepomuceno Estanislao de la Rivera y Barrientos Acosta y Rodríguez, known as Diego Rivera (Spanish pronunciation: [ˈdjeɣo riˈβeɾa]; December 8, 1886 – November 24, 1957) was a prominent Mexican painter. His large frescoes helped establish the Mexican mural movement in Mexican art. Between 1922 and 1953, Rivera painted murals in, among other places, Mexico City, Chapingo, Cuernavaca, San Francisco, Detroit, and New York City. In 1931, a retrospective exhibition of his works was held at the Museum of Modern Art in New York. Rivera had a volatile marriage with fellow Mexican artist Frida Kahlo.",
//       "wikipedia": "http://en.wikipedia.org/wiki/Diego_Rivera",
//       "paintings": 70
//     },
//     {
//       "id": 3,
//       "name": "Claude Monet",
//       "years": "1840 - 1926",
//       "genre": "Impressionism",
//       "nationality": "French",
//       "bio": "Oscar-Claude Monet (; French: [klod mɔnɛ]; 14 November 1840 – 5 December 1926) was a French painter, a founder of French Impressionist painting and the most consistent and prolific practitioner of the movement's philosophy of expressing one's perceptions before nature, especially as applied to plein air landscape painting. The term \"Impressionism\" is derived from the title of his painting Impression, soleil levant (Impression, Sunrise), which was exhibited in 1874 in the first of the independent exhibitions mounted by Monet and his associates as an alternative to the Salon de Paris.Monet's ambition of documenting the French countryside led him to adopt a method of painting the same scene many times in order to capture the changing of light and the passing of the seasons. From 1883, Monet lived in Giverny, where he purchased a house and property and began a vast landscaping project which included lily ponds that would become the subjects of his best-known works. In 1899, he began painting the water lilies, first in vertical views with a Japanese bridge as a central feature and later in the series of large-scale paintings that was to occupy him continuously for the next 20 years of his life.",
//       "wikipedia": "http://en.wikipedia.org/wiki/Claude_Monet",
//       "paintings": 73
//     },
//     {
//       "id": 4,
//       "name": "Rene Magritte",
//       "years": "1898 - 1967",
//       "genre": "Surrealism,Impressionism",
//       "nationality": "Belgian",
//       "bio": "René François Ghislain Magritte (French: [ʁəne fʁɑ̃swa ɡilɛ̃ maɡʁit]; 21 November 1898 – 15 August 1967) was a Belgian Surrealist artist. He became well known for creating a number of witty and thought-provoking images. Often depicting ordinary objects in an unusual context, his work is known for challenging observers' preconditioned perceptions of reality. His imagery has influenced Pop art, minimalist and conceptual art.",
//       "wikipedia": "http://en.wikipedia.org/wiki/René_Magritte",
//       "paintings": 194
//     },
//     {
//       "id": 5,
//       "name": "Salvador Dali",
//       "years": "1904 - 1989",
//       "genre": "Surrealism",
//       "nationality": "Spanish",
//       "bio": "Salvador Domingo Felipe Jacinto Dalí i Domènech, 1st Marquis of Dalí de Púbol (11 May 1904 – 23 January 1989), known professionally as Salvador Dalí (; Catalan: [səlβəˈðo ðəˈli]; Spanish: [salβaˈðoɾ ðaˈli]), was a prominent Spanish surrealist born in Figueres, Catalonia, Spain.",
//       "wikipedia": "http://en.wikipedia.org/wiki/Salvador_Dalí",
//       "paintings": 139
//     },
//     {
//       "id": 6,
//       "name": "Edouard Manet",
//       "years": "1832 - 1883",
//       "genre": "Realism,Impressionism",
//       "nationality": "French",
//       "bio": "Édouard Manet (US: ; UK: ; French: [edwaʁ manɛ]; 23 January 1832 – 30 April 1883) was a French modernist painter. He was one of the first 19th-century artists to paint modern life, and a pivotal figure in the transition from Realism to Impressionism.",
//       "wikipedia": "http://en.wikipedia.org/wiki/Édouard_Manet",
//       "paintings": 90
//     },
//     {
//       "id": 7,
//       "name": "Andrei Rublev",
//       "years": "1360 - 1430",
//       "genre": "Byzantine Art",
//       "nationality": "Russian",
//       "bio": "Andrei Rublev (Russian: Андре́й Рублёв, IPA: [ɐnˈdrʲej rʊˈblʲɵf], also transliterated as Andrey Rublyov; born in the 1360s, died 29 January 1427 or 1430, or 17 October 1428 in Moscow) is considered to be one of the greatest medieval Russian painters of Orthodox icons and frescos.",
//       "wikipedia": "http://en.wikipedia.org/wiki/Andrei_Rublev",
//       "paintings": 99
//     },
//     {
//       "id": 8,
//       "name": "Vincent van Dough",
//       "years": "1853 – 1890",
//       "genre": "Post-Impressionism",
//       "nationality": "Dutch",
//       "bio": "Vincent Willem van Gogh (Dutch: [ˈvɪnsɛnt ˈʋɪləm vɑŋ ˈɣɔx] (listen); 30 March 1853 – 29 July 1890) was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade he created about 2,100 artworks, including around 860 oil paintings, most of them in the last two years of his life. They include landscapes, still lifes, portraits and self-portraits, and are characterised by bold colours and dramatic, impulsive and expressive brushwork that contributed to the foundations of modern art. However, he was not commercially successful, and his suicide at 37 followed years of mental illness and poverty.",
//       "wikipedia": "http://en.wikipedia.org/wiki/Vincent_van_Gogh",
//       "paintings": 877
//     },
//     {
//       "id": 9,
//       "name": "Gustav Klimt",
//       "years": "1862 - 1918",
//       "genre": "Symbolism,Art Nouveau",
//       "nationality": "Austrian",
//       "bio": "Gustav Klimt (July 14, 1862 – February 6, 1918) was an Austrian symbolist painter and one of the most prominent members of the Vienna Secession movement. Klimt is noted for his paintings, murals, sketches, and other objets d'art. Klimt's primary subject was the female body, and his works are marked by a frank eroticism. In addition to his figurative works, which include allegories and portraits, he painted landscapes. Among the artists of the Vienna Secession, Klimt was the most influenced by Japanese art and its methods.",
//       "wikipedia": "http://en.wikipedia.org/wiki/Gustav_Klimt",
//       "paintings": 117
//     },
//     {
//       "id": 10,
//       "name": "Hieronymus Bosch",
//       "years": "1450 - 1516",
//       "genre": "Northern Renaissance",
//       "nationality": "Dutch",
//       "bio": "Hieronymus Bosch ( (listen); Dutch: [ɦijeːˈroːnimʏz ˈbɔs] (listen); born Jheronimus van Aken [jeːˈroːnimʏs fɑn ˈaːkə(n)]; c. 1450 – 9 August 1516) was a Dutch/Netherlandish draughtsman and painter from Brabant. He is one of the most notable representatives of the Early Netherlandish painting school. His work contains fantastic illustrations of religious concepts and narratives. Within his lifetime his work was collected in the Netherlands, Austria, and Spain, and widely copied, especially his macabre and nightmarish depictions of hell.",
//       "wikipedia": "http://en.wikipedia.org/wiki/Hieronymus_Bosch",
//       "paintings": 137
//     },
//     {
//       "id": 11,
//       "name": "Kazimir Malevich",
//       "years": "1879 - 1935",
//       "genre": "Suprematism",
//       "nationality": "Russian",
//       "bio": "Kazimir Severinovich Malevich (February 23 [O.S. 11] 1879 – May 15, 1935) was a Russian avant-garde artist and art theorist, whose pioneering work and writing had a profound influence on the development of non-objective, or abstract art, in the 20th century. Born in Kiev to an ethnic Polish family, his concept of Suprematism sought to develop a form of expression that moved as far as possible from the world of natural forms (objectivity) and subject matter in order to access \"the supremacy of pure feeling\" and spirituality.Early on, Malevich worked in a variety of styles, quickly assimilating the movements of Impressionism, Symbolism and Fauvism, and after visiting Paris in 1912, Cubism. Gradually simplifying his style, he developed an approach with key works consisting of pure geometric forms and their relationships to one another, set against minimal grounds. His Black Square (1915), a black square on white, represented the most radically abstract painting known to have been created so far and drew \"an uncrossable line (…) between old art and new art\"; Suprematist Composition: White on White (1918), a barely differentiated off-white square superimposed on an off-white ground, would take his ideal of pure abstraction to its logical conclusion. In addition to his paintings, Malevich laid down his theories in writing, such as \"From Cubism and Futurism to Suprematism\" (1915) and The Non-Objective World: The Manifesto of Suprematism (1926).Malevich's trajectory in many ways mirrored the tumult of the decades surrounding the October Revolution (O.S.) in 1917. In its immediate aftermath, vanguard movements such as Suprematism and Vladimir Tatlin's Constructivism were encouraged by Trotskyite factions in the government. Malevich held several prominent teaching positions and received a solo show at the Sixteenth State Exhibition in Moscow in 1919. His recognition spread to the West with solo exhibitions in Warsaw and Berlin in 1927. Upon his return, modern art was falling out of favor with the new government of Joseph Stalin. Malevich soon lost his teaching position, artworks and manuscripts were confiscated, and he was banned from making art. In 1930, he was imprisoned for two months due to suspicions raised by his trip to Poland and Germany. Forced to abandon abstraction, he painted in a representational style in the years before his death from cancer in 1935, at the age of 56.",
//       "wikipedia": "http://en.wikipedia.org/wiki/Kazimir_Malevich",
//       "paintings": 126
//     },
//     {
//       "id": 12,
//       "name": "Mikhail Vrubel",
//       "years": "1856 - 1910",
//       "genre": "Symbolism",
//       "nationality": "Russian",
//       "bio": "Mikhail Aleksandrovich Vrubel (Russian: Михаи́л Алекса́ндрович Вру́бель; March 17, 1856 – April 14, 1910, all n.s.) is usually regarded amongst the Russian painters of the Symbolist movement and of Art Nouveau. In reality, he deliberately stood aloof from contemporary art trends, so that the origin of his unusual manner should be sought in Late Byzantine and Early Renaissance painting.",
//       "wikipedia": "http://en.wikipedia.org/wiki/Mikhail_Vrubel",
//       "paintings": 171
//     },
//     {
//       "id": 13,
//       "name": "Pablo Picasso",
//       "years": "1881 - 1973",
//       "genre": "Cubism",
//       "nationality": "Spanish",
//       "bio": "Pablo Ruiz Picasso (; Spanish: [ˈpaβlo piˈkaso]; 25 October 1881 – 8 April 1973) was a Spanish painter, sculptor, printmaker, ceramicist, stage designer, poet and playwright who spent most of his adult life in France. Regarded as one of the most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore. Among his most famous works are the proto-Cubist Les Demoiselles d'Avignon (1907), and Guernica (1937), a dramatic portrayal of the bombing of Guernica by the German and Italian airforces during the Spanish Civil War.",
//       "wikipedia": "http://en.wikipedia.org/wiki/Pablo_Picasso",
//       "paintings": 439
//     },
//     {
//       "id": 14,
//       "name": "Peter Paul Rubens",
//       "years": "1577 - 1640",
//       "genre": "Baroque",
//       "nationality": "Flemish",
//       "bio": "Sir Peter Paul Rubens (; Dutch: [ˈrybə(n)s]; 28 June 1577 – 30 May 1640) was a Flemish artist. He is considered the most influential artist of Flemish Baroque tradition. Rubens's highly charged compositions reference erudite aspects of classical and Christian history. His unique and immensely popular Baroque style emphasized movement, color, and sensuality, which followed the immediate, dramatic artistic style promoted in the Counter-Reformation. Rubens specialized in making altarpieces, portraits, landscapes, and history paintings of mythological and allegorical subjects.",
//       "wikipedia": "http://en.wikipedia.org/wiki/Peter_Paul_Rubens",
//       "paintings": 141
//     },
//     {
//       "id": 15,
//       "name": "Pierre-Auguste Renoir",
//       "years": "1841 - 1919",
//       "genre": "Impressionism",
//       "nationality": "French",
//       "bio": "Pierre-Auguste Renoir, commonly known as Auguste Renoir (; French: [pjɛʁ oɡyst ʁənwaʁ]; 25 February 1841 – 3 December 1919), was a French artist who was a leading painter in the development of the Impressionist style. As a celebrator of beauty and especially feminine sensuality, it has been said that \"Renoir is the final representative of a tradition which runs directly from Rubens to Watteau.",
//       "wikipedia": "http://en.wikipedia.org/wiki/Pierre-Auguste_Renoir",
//       "paintings": 336
//     },
//     {
//       "id": 16,
//       "name": "Francisco Goya",
//       "years": "1746 - 1828",
//       "genre": "Romanticism",
//       "nationality": "Spanish",
//       "bio": "Francisco José de Goya y Lucientes (; Spanish: [fɾanˈθisko xoˈse ðe ˈɣoʝa i luˈθjentes]; 30 March 1746 – 16 April 1828) was a Spanish romantic painter and printmaker. He is considered the most important Spanish artist of the late 18th and early 19th centuries and throughout his long career was a commentator and chronicler of his era. Immensely successful in his lifetime, Goya is often referred to as both the last of the Old Masters and the first of the moderns.  He was also one of the great contemporary portraitists.He was born to a modest family in 1746 in the village of Fuendetodos in Aragon. He studied painting from age 14 under José Luzán y Martinez and moved to Madrid to study with Anton Raphael Mengs. He married Josefa Bayeu in 1773; their life was characterised by an almost constant series of pregnancies and miscarriages, and only one child, a son, survived into adulthood. Goya became a court painter to the Spanish Crown in 1786 and this early portion of his career is marked by portraits of the Spanish aristocracy and royalty, and Rococo style tapestry cartoons designed for the royal palace.",
//       "wikipedia": "http://en.wikipedia.org/wiki/Francisco_Goya",
//       "paintings": 291
//     },
//     {
//       "id": 17,
//       "name": "Frida Kahlo",
//       "years": "1907 - 1954",
//       "genre": "Primitivism,Surrealism",
//       "nationality": "Mexican",
//       "bio": "Frida Kahlo de Rivera (Spanish pronunciation: [ˈfɾiða ˈkalo]; born Magdalena Carmen Frida Kahlo y Calderón; 6 July 1907 – 13 July 1954) was a Mexican artist who painted many portraits, self-portraits and works inspired by the nature and artifacts of Mexico. Inspired by the country's popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class and race in Mexican society. Her paintings often had strong autobiographical elements and mixed realism with fantasy. In addition to belonging to the post-revolutionary Mexicayotl movement, which sought to define a Mexican identity, Kahlo has been described as a surrealist or magical realist.Born to a German father and a mestiza mother, Kahlo spent most of her childhood and adult life at her family home in Coyoacán, La Casa Azul, now known and publicly accessible as the Frida Kahlo Museum. She was disabled by polio as a child. Until a traffic accident at age eighteen caused lifelong pain and medical problems, she had been a promising student headed for medical school. During her recovery, she returned to her childhood hobby of art with the idea of becoming an artist.",
//       "wikipedia": "http://en.wikipedia.org/wiki/Frida_Kahlo",
//       "paintings": 120
//     },
//     {
//       "id": 18,
//       "name": "El Greco",
//       "years": "1541 - 1614",
//       "genre": "Mannerism",
//       "nationality": "Spanish,Greek",
//       "bio": "Doménikos Theotokópoulos (Greek: Δομήνικος Θεοτοκόπουλος [ðoˈminikos θeotoˈkopulos]; October 1541 –  7 April 1614), most widely known as El Greco (\"The Greek\"), was a painter, sculptor and architect of the Spanish Renaissance. \"El Greco\" was a nickname, a reference to his Greek origin, and the artist normally signed his paintings with his full birth name in Greek letters, Δομήνικος Θεοτοκόπουλος, Doménikos Theotokópoulos, often adding the word Κρής Krēs, Cretan.",
//       "wikipedia": "http://en.wikipedia.org/wiki/El_Greco",
//       "paintings": 87
//     },
//     {
//       "id": 19,
//       "name": "Albrecht Dürer",
//       "years": "1471 - 1528",
//       "genre": "Northern Renaissance",
//       "nationality": "German",
//       "bio": "Albrecht Dürer (; German: [ˈʔalbʁɛçt ˈdyːʁɐ]; 21 May 1471 – 6 April 1528) sometimes spelt in English as Durer or Duerer, without umlaut, was a painter, printmaker, and theorist of the German Renaissance. Born in Nuremberg, Dürer established his reputation and influence across Europe when he was still in his twenties due to his high-quality woodcut prints.",
//       "wikipedia": "http://en.wikipedia.org/wiki/Albrecht_Dürer",
//       "paintings": 328
//     }
// ]

// Work:
/* Task 1: Practice accessing data above by console.log-ing following items:

(1) Name of the first artist (0th index) in the array
(2) Bio of the third artist (2nd index) in the array */
// console.log(artists[0].name);
// console.log(artists[2].bio);

/* Task 2: There is a typo in your dataset 😱 The 9th artist, Vincent Van Gogh is currently Vincent Van Dough. Use an array method to fix this issue and console.log() to check your work. */
// function newName(num){
//     const targetArtist = artists[num].name;
//     const splitName = targetArtist.split(' ');
//     const cutName = splitName.slice(0, 2);
//     cutName.push('Gogh');
//     const stringName = cutName.join(' ');
//     return stringName;
//   }

//   console.log(newName(8));

/* Task 3: Create a function called `getArtistByIndex` that takes two arguments:
 *     (1) artists array
 *     (2) a number which is the desired index in the array.
 * getArtistByIndex returns a string in the format `The artist at index {id} is {name}.`
 *
 * For example, if getArtistByIndex is invoked with the artists dataset and the number 0,
 * it will return `The artist at index 0 is Amedeo Modigliani`.
 */
// function getArtistByIndex(arr, id) {
//     return `The artist at index ${id} is ${arr[id].name}`
// }

// console.log(getArtistByIndex(artists, 3));
// console.log(getArtistByIndex(artists, 4));

/* Task 4: Create a function called get20s() that takes data as an argument and returns an array with names of artists who were born the 20th century (1900-2000) */

// function get20s(data1, data2){
//     const names = [];

//     for(let i = 0; i < artists.length; i++){
//       const splitYears = (artists[i].years.split(' ')[0])
//       const newYears = Number(splitYears);
//       if(data1 < newYears && newYears < data2){
//         names.push(artists[i].name);
//       }
//     }
//     return names;
//   }

//   console.log(get20s(1900,2000))

/* Task 5: Create a function called `removeArtist` that takes two arguments:
 *     (1) artists array
 *     (2) a number which is the desired index in the array.
 * removeArtist removes an artist from the array at the index and console.logs the length of the remaining dataset.
 *
 * For example, if removeArtist is invoked with the data and the number 0,
 * it will remove Amedeo Modigliani from our dataset and log the number 19.
 *
 * Note that sucessfully invoking this function multiple times without refreshing your browser will continuously remove artists from the array until there are none left. If you refresh your browser, the data will reset.
 */
// function removeArtist(arr, id) {
//     arr.splice(id,1);
//     return arr.length;
// }

// console.log(removeArtist(artists, 0))
// console.log(removeArtist(artists, 1))

/* Task 6: Create a function called `addArtist` that can accept an array of information and add it to the artists array. Then, add a 21st artist to the array (you) with custom information!👩‍🎨👨‍🎨

For example, you could add the following information: 
id: 21
name: Your Name Here, 
years: Your Birth Year - current day,
genre: Web Design, 
nationality: Your Nationality Here
bio: Add 1-2 sentences (or use lorem ipsum) 

At the end, this function should console.log() the new array with information added"*/

// const lastArtist = [{
//     "id": 21,
//     "name": "Jean-Michel Basquiat",
//     "years": "1960-1988",
//     "genre": "Painter",
//     "nationality": "American",
//     "bio": "An American artist of Haitian and Puerto Rican descent. Basquiat first achieved fame as part of SAMO, an informal graffiti duo who wrote enigmatic epigrams in the cultural hotbed of the Lower East Side of Manhattan during the late 1970s, where rap, punk, and street art coalesced into early hip-hop music culture. By the 1980s, his neo-expressionist paintings were being exhibited in galleries and museums internationally. The Whitney Museum of American Art held a retrospective of his art in 1992."
//   }]

//   function addArtist(arr){
//     arr.push(lastArtist[0]);
//     return arr;
//   }

//   console.log(addArtist(artists));

/* Task 7: Create a function called lotsOfArt() that takes one argument: 

    (1) artists array 

and returns an array with names of artists who painted more than 100 paintings.

For example lotsOfArt(artists); will return ["Amedeo Modigliani", "Rene Magritte", ..."Albrecht Dürer"]*/

// function lotsOfArt(arr){
//     const names = [];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i].paintings > 100){
//     names.push(arr[i].name);
//     }
// }
// return names;
// }

// console.log(lotsOfArt(artists));

// ------------------------------------------------------------------------------------------------------------------

// Date: 28 - May - 2020
// Source: https://edabit.com/challenge/ygF4FR7ah2Bn9CNoz
// Title: Missing Third Angle

// Instructions:
// You are given 2 out of 3 angles in a triangle, in degrees.
// Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.
// An acute angle is less than 90 degrees.
// A right angle is exactly 90 degrees.
// An obtuse angle is greater than 90 degrees (but less than 180 degrees).
// For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.

// Examples:
// missingAngle(27, 59) ➞ "obtuse"
// missingAngle(135, 11) ➞ "acute"
// missingAngle(45, 45) ➞ "right"

// Notes:
// The sum of angles of any triangle is always 180 degrees.

// Work:
// function missingAngle(angle1, angle2) {
// option 2
// const sum = 180 - (angle1 + angle2);
// return (sum) < 90 ? "acute" : sum === 90 ? "right" : "obtuse"

// option 1
// const sum = 180 - (angle1 + angle2);
// if(sum < 90){
//     return `acute`
// } else if (sum === 90){
//     return `right`
// } else {
//     return `obtuse`
// }
// }

// console.log(missingAngle(27, 59));
// console.log(missingAngle(135, 11));
// console.log(missingAngle(45, 45));

// ------------------------------------------------------------------------------------------------------------------

// Date: 27 - May - 2020
// Source: https://edabit.com/challenge/LMhRTq3hccz2D9Lax
// Title: Multiply by Length
// Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map,https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length

// Instructions:
// Create a function to multiply all of the values in an array by the amount of values in the given array.

// Examples:
// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
// multiplyByLength([4, 1, 1]) ➞ ([12, 3, 3])
// multiplyByLength([1, 0, 3, 3, 7, 2, 1]) ➞  [7, 0, 21, 21, 49, 14, 7]
// multiplyByLength([0]) ➞ ([0])

// Notes:
// All of the values given are numbers.
// All arrays will have at least one element.
// Don't forget to return the result.

// Work:
// function multiplyByLength(arr){
//     return arr.map(item => item * arr.length);
// }

// console.log(multiplyByLength([2, 3, 1, 0]));
// console.log(multiplyByLength([4, 1, 1]));
// console.log(multiplyByLength([1, 0, 3, 3, 7, 2, 1]));
// console.log(multiplyByLength([0]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 27 - May - 2020
// Source: https://edabit.com/challenge/HTbRYCmPwfZGnBcxW
// Title: Find the Largest Number in an Array
// Resource:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort,https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

// Instructions:
// Create a function that takes an array of numbers. Return the largest number in the array.

// Examples:
// findLargestNum([4, 5, 1, 3]) ➞ 5
// findLargestNum([300, 200, 600, 150]) ➞ 600
// findLargestNum([1000, 1001, 857, 1]) ➞ 1001

// Notes:
// Expect either a positive number or zero (there are no negative numbers).
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// Work:
// function findLargestNum(arr){
// option 2
// return Math.max(...arr);

// option 1
// return arr.sort((a,b) => a - b).pop()
// }

// console.log(findLargestNum([4, 5, 1, 3]));
// console.log(findLargestNum([300, 200, 600, 150]));
// console.log(findLargestNum([1000, 1001, 857, 1]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 26 - May - 2020
// Source: https://edabit.com/challenge/Wg3pBiH8HQggcfaTg
// Title: Maximum Possible Total
// Resouces: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort,https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array/slice,https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// Instructions:
// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

// Examples:
// maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) ➞ 43
// maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) ➞ 100
// maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 40

// Work:
// function maxTotal(nums){
// option 2
// const sorted = nums.sort((a,b) => a - b).slice(5).reduce((a,b) => a+b);
// return sorted;

// option 1
// const sorted = nums.sort((a,b) => a - b);
// const cut = sorted.slice(5).reduce((a,b) => a+b)
// return cut;
// }

// console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]));
// console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]));
// console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 25 - May - 2020
// Source: https://edabit.com/challenge/R3AYf3eTdATXTQTdZ
// Title: Return the First and Last Elements in an Array
// Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop,https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

// Instructions:
// Create a function that takes an array of numbers and return the first and last elements as a new array.

// Examples:
// firstLast([5, 10, 15, 20, 25]) ➞ [5, 25]
// firstLast(["edabit", 13, null, false, true]) ➞ ["edabit", true]
// firstLast([undefined, 4, "6", "hello", null]) ➞ [undefined, null]

// Notes:
// Test input will always contain a minimum of two elements within the array.
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// Work:
// function firstLast(arr){
//     return [arr.shift(), arr.pop()];
// }

// console.log(firstLast([5, 10, 15, 20, 25]));
// console.log(firstLast(["edabit", 13, null, false, true]));
// console.log(firstLast([undefined, 4, "6", 'hello', null]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 25 - May - 2020
// Source: https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH
// Title: Oddish vs Evenish
// Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map,https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce,https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators,https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// Instructions:
// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

// Examples:
// oddishOrEvenish(43) ➞ "Oddish"
// oddishOrEvenish(373) ➞ "Oddish"
// oddishOrEvenish(4433) ➞ "Evenish"

// Work:
// function oddishOrEvenish(num){

// option 2 - concise
// return [...String(num)].map(Number).reduce((a,v) => a+v) % 2 ? 'Oddish' : 'Evenish'

// option 1 - easier to read, step by step
// const str = num.toString();
// const arr = [...str].map((item) => {
//     return Number(item);
// });
// const sum = (a, b) => a + b;
// const evenOrOdd = arr.reduce((sum), 0);
// const remainder = evenOrOdd % 2;

// return remainder === 0 ? 'Evenish' : 'Oddish';
// }

// console.log(oddishOrEvenish(43));
// console.log(oddishOrEvenish(373));
// console.log(oddishOrEvenish(4433));

// ------------------------------------------------------------------------------------------------------------------

// Date: 24 - May - 2020
// Source: https://edabit.com/challenge/6R6gReGTGwzpwuffD
// Title: Seven Boom!
// Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join,https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

// Instructions:
// Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

// Examples:
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"

// Work:
// function sevenBoom(arr){

// option 2
// return arr.join().includes(7) ? "Boom!" : "there is no 7 in the array";

// option 1 - easier to read
// const newArr = arr.join();
// return newArr.includes(7) ? "Boom!" : "there is no 7 in the array";
// }

// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
// console.log(sevenBoom([8, 6, 33, 100]));
// console.log(sevenBoom([2, 55, 60, 97, 86]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 24 - May - 2020
// Source: https://edabit.com/challenge/FzDAgSR84zeyRa278
// Title: Extract City Facts

// Instructions:
// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

// Examples:
// cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

// cityFacts({
//   name: "Tokyo",
//   population: "13,929,286",
//   continent: "Asia"
// }) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"

// Work:
// function cityFacts(city){
//     return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
// }

// console.log(cityFacts({
//         name: "Tokyo",
//         population: "13,929,286",
//         continent: "Asia"
// }));

// console.log(cityFacts({
//     name: "Paris",
//     population: "2,140,526",
//     continent: "Europe"
// }));

// ------------------------------------------------------------------------------------------------------------------

// Date: 24 - May - 2020
// Source: https://edabit.com/challenge/GwvwXHWCThHZrR7xu
// Title: Football Points

// Instructions:
// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far. A win receives 3 points, a draw 1 point and a loss 0 points.

// Examples:
// footballPoints(3, 4, 2) ➞ 13
// footballPoints(5, 0, 2) ➞ 15
// footballPoints(0, 0, 1) ➞ 0

// Notes:
// Inputs will be numbers greater than or equal to 0.

// Work:
// function footballPoints(wins, draws, losses){

// option 3 - easiest and shortest
// return wins*3+draws;

// option 2 - broken down, easier to read
// const newWins = (wins >= 0 ? wins * 3 : wins * 0);
// const newDraws = (draws >= 0 ? draws * 1 : draws * 0);
// const newLosses = (losses * 0);
// return newWins + newDraws + newLosses;

// option 1 - concise
// return (wins >= 0 ? wins * 3 : wins * 0) + (draws >= 0 ? draws * 1 : draws * 0) + (losses * 0);
// }

// console.log(footballPoints(3, 4, 2));
// console.log(footballPoints(5, 0, 2));
// console.log(footballPoints(0, 0, 1));

// ------------------------------------------------------------------------------------------------------------------

// Date: 24 - May - 2020
// Source: https://edabit.com/challenge/r7YJgZgGXJjSyuFxX
// Title: Does a Number Exist?
// Resource: https://mkyong.com/javascript/check-if-variable-is-a-number-in-javascript/,https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

// Instructions:
// Create a function which validates whether a given number exists, and could represent a real life quantity. Inputs will be given as a string.

// Examples:
// validStrNumber("3.2") ➞ true
// validStrNumber("324") ➞ true
// validStrNumber("54..4") ➞ false
// validStrNumber("number") ➞ false

// Notes:
// Accept numbers such as .5 and 0003.

// Work:
// function validStrNumber(n){

// option 2
// return isNaN(n) ? false : true;

// option 1 -- I had the values flipped isNaN() --> true === not a number, isNaN() --> false === is a number
// if(isNaN(n)){
//     return false
// } else {
//     return true
// }
// }

// console.log(validStrNumber("3.2"));
// console.log(validStrNumber("324"));
// console.log(validStrNumber("54..4"));
// console.log(validStrNumber("number"));
// console.log(validStrNumber("abc"));
// console.log(validStrNumber("1846.980"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 24 - May - 2020
// Source: https://edabit.com/challenge/uXf7RQ5am84tup7mQ
// Title: Rock, Paper, Scissors

// Instructions:
// Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2) as arguments and returns a string stating the winner in a game of Rock, Paper, Scissors.
// Each argument will contain a single string: "Rock", "Paper", or "Scissors". Return the winner according to the following rules:
// Rock beats Scissors
// Scissors beats Paper
// Paper beats Rock
// If p1 wins, return the string "The winner is p1". If p2 wins, return the string "The winner is p2" and if p1 and p2 are the same, return "It's a draw".

// Examples:
// rps("Rock", "Paper") ➞ "The winner is p2"
// rps("Scissors", "Paper") ➞ "The winner is p1"
// rps("Paper", "Paper") ➞ "It's a draw"

// Notes:
// All inputs will be valid strings.

// Work:
// function rps(p1, p2){
// option 1
// if(p1 === p2){
//     return "It's a draw";
// } else if (p1 === "Rock" && p2 === "Paper"){
//     return "The winner is p2";
// } else if (p1 === "Rock" && p2 === "Scissors"){
//     return "The winner is p1";
// } else if (p1 === "Paper" && p2 === "Scissors"){
//     return "The winner is p2";
// } else if (p1 === "Paper" && p2 === "Rock"){
//     return "The winner is p1";
// } else if (p1 === "Scissors" && p2 === "Paper"){
//     return "The winner is p1";
// } else if(p1 === "Scissors" && p2 === "Rock"){
//     return "The winner is p2";
// };
// }

// console.log(rps("Rock", "Paper"));
// console.log(rps("Scissors", "Paper"));
// console.log(rps("Paper", "Paper"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 23 - May - 2020
// Source: https://edabit.com/challenge/DdAkLaw4eyuWgCMmF
// Title: Default Mood

// Instructions:
// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

// Examples:
// moodToday("happy") ➞ "Today, I am feeling happy"
// moodToday("sad") ➞ "Today, I am feeling sad"
// moodToday() ➞ "Today, I am feeling neutral"

// Notes:
// Check the Resources tab for some helpful information.

// Work:
// function moodToday(mood){
//     if(!mood){
//         return `Today, I am feeling neutral`
//     } else if(mood) {
//         return `Today, I am feeling ${mood}`
//     }
// }

// console.log(moodToday("happy"));
// console.log(moodToday("sad"));
// console.log(moodToday());

// ------------------------------------------------------------------------------------------------------------------

// Date: 22 - May - 2020
// Source: https://edabit.com/challenge/dhRtmeFcjGcD7yvHA
// Title: Impossible Date
// Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime,https://stackoverflow.com/questions/5812220/how-to-validate-a-date

// Instructions:
// Given the parameters day, month and year, return whether that date is a valid date.

// Examples:
// isValidDate(35, 2, 2020) ➞ false
// February doesn't have 35 days.
// isValidDate(8, 3, 2020) ➞ true
// 8th March 2020 is a real date.
// isValidDate(31, 6, 1980) ➞ false
// June only has 30 days.

// Notes:
//

// Work:
// function isValidDate(d, m, y){
//     const newDate = new Date(y, --m, d);
//     return m === newDate.getMonth();
// }

// console.log(isValidDate(35, 2, 2020));
// console.log(isValidDate(8, 3, 2020));

// ------------------------------------------------------------------------------------------------------------------

// Date: 22 - May - 2020
// Source: https://edabit.com/challenge/RAoedjZwcGFhvRTru
// Title: Check String for Spaces

// Instructions:
// Create a function that returns true if a string contains any spaces.

// Examples:
// hasSpaces("hello") ➞ false
// hasSpaces("hello, world") ➞ true
// hasSpaces(" ") ➞ true
// hasSpaces("") ➞ false
// hasSpaces(",./!@#") ➞ false

// Notes:
// An empty string does not contain any spaces.
// Try doing this without RegEx.
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// Work:
// function hasSpaces(str) {

//option 2
// return str.includes(' ') ? true : false;

// option 1
// if(str.includes(" ")){
//     return true;
// } else {
//     return false
// }
// }

// console.log(hasSpaces('hello'));
// console.log(hasSpaces('hello, world'));
// console.log(hasSpaces(' '));
// console.log(hasSpaces(''));
// console.log(hasSpaces(',./@#$'));

// ------------------------------------------------------------------------------------------------------------------

// Date: 22 - May - 2020
// Source: https://edabit.com/challenge/TzxoYExuxuQw2ahWR
// Title: Multiplying Numbers in a String

// Instructions:
// Given a string of numbers separated by a comma and space, return the product of the numbers.

// Examples:
// multiplyNums("2, 3") ➞ 6
// multiplyNums("1, 2, 3, 4") ➞ 24
// multiplyNums("54, 75, 453, 0") ➞ 0
// multiplyNums("10, -2") ➞ -20

// Notes:
// Bonus: Try to complete this challenge in one line!

// Work:
// function multiplyNums(nums) {

// option 2
// return Number(nums.split(',').reduce((a, b) => a*b))

// option 1
// const divi = nums.split(',');

// function multiply(a,b){
//     return a*b;
// }

// return Number(divi.reduce(multiply));
// }

// console.log(multiplyNums('2,3'));
// console.log(multiplyNums('1,2,3,4'));
// console.log(multiplyNums('54,75,453,0'));
// console.log(multiplyNums('10,-2'));

// ------------------------------------------------------------------------------------------------------------------

// Date: 21 - May - 2020
// Source: https://edabit.com/challenge/RMZiERz2cbjmbXruY
// Title: Triangular Number Sequence

// Instructions:
// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15. Write a function that converts n number of places with its corresponding number.

// Examples:
// triangle(1) ➞ 1
// triangle(6) ➞ 21
// triangle(215) ➞ 23220

// Work:
// function triangle(n){
//     return n*(n+1)/2;
// }

// console.log(triangle(1));
// console.log(triangle(6));
// console.log(triangle(215));

// ------------------------------------------------------------------------------------------------------------------

// Date: 20 - May - 2020
// Source: https://edabit.com/challenge/GLbuMfTtDWwDv2F73
// Title: How Much is True?

// Instructions:
// Create a function which returns the number of true values there are in an array.

// Examples:
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0

// Notes:
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).
// No need for anything fancy, true === 1, false === 0

// Work:
// function countTrue(arr){

// option 2
// const filterArr = arr.filter(item => {
//     return item === true;
// })

// return filterArr.length;

// option 1
// const truCount = arr.reduce((acc, curr) => {
//     return acc + curr
// }, 0)

// return truCount;
// }

// console.log(countTrue([true, false, false, true, false]));
// console.log(countTrue([false, false, false, false, false]));
// console.log(countTrue([]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 20 - May - 2020
// Source: https://edabit.com/challenge/kJQYTCCWSnzhXG9dn
// Title: Reverse an Array

// Instructions:
// Write a function to reverse an array.

// Examples:
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
// reverse([]) ➞ []

// Notes:
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// Work:
// function reverse(arr){
//     return arr.reverse();
// }

// console.log(reverse([1,2,3,4]));
// console.log(reverse([9,9,3,4]));
// console.log(reverse([]));
// ------------------------------------------------------------------------------------------------------------------

// Date: 20 - May - 2020
// Source: https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB
// Title: Repeating Letters

// Instructions:
// Create a function that takes a string and returns a string in which each character is repeated once.

// Examples:
// doubleChar("String") ➞ "SSttrriinngg"
// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
// doubleChar("1234!_ ") ➞ "11223344!!__  "

// Notes:
// All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.

// Work:
// function doubleChar(str){
// const split = str.split('');
// const doub = Array.from(split).map(double => {
//     return double.repeat(2);
// })
// const joinTwo = doub.join('');
// console.log(typeof joinTwo)

// return joinTwo;
// }

// console.log(doubleChar('hi'));
// console.log(doubleChar('Hello World!'));
// console.log(doubleChar('String'));
// console.log(doubleChar('1234!_'));

// ------------------------------------------------------------------------------------------------------------------

// Date: 19 - May - 2020
// Source: https://edabit.com/challenge/n2bFd2enCnHJkTwsK
// Title: Evaluate an Equation

// Instructions:
// Create a function that evaluates an equation.

// Examples:
// eq("1+2") ➞ 3
// eq("6/(9-7)") ➞ 3
// eq("3+2-4") ➞ 1

// Notes:
// Don't print, return a value.
// Return the value, not the equation.

// Work:
// function eq(evaluate){
//     return eval(evaluate);
// }

// console.log(eq('1+2'));
// console.log(eq('6/(9-7)'));
// console.log(eq('3+2-4'));

// ------------------------------------------------------------------------------------------------------------------

// Date: 18 - May - 2020
// Source: https://edabit.com/challenge/zQm9YZTTFPhNtYjDr
// Title: Secret Society

// Instructions:
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society.

// Examples:
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
// societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"

// Notes:
// The secret society's name should be entirely uppercased.

// Sudo code:
// 1 - write and function and pass it the array
// 2 - map through the array
// 3 - use charAt(0)
// 4 - return and set to a variable
// 5 - sort the variable
// 6 - write a new variable to join the array because it returns a string
// 7 - use .toUpperCase as a precaution

// Work:
// function societyNames(friends){
//     const newFriends = friends.map(friend => {
//         return friend.charAt(0);
//     });

//     const sortFriends = newFriends.sort();
//     const joinFriends = sortFriends.join('');

//     return joinFriends.toUpperCase();
// }

// console.log(societyNames(['Adam', 'Sarah', 'Malcolm']));
// console.log(societyNames(['Harry', 'Newt', 'Luna', 'Cho']));
// console.log(societyNames(['Phoebe', 'Chandler', 'Rachel', 'Ross', 'Monica', 'Joey']));

// ------------------------------------------------------------------------------------------------------------------

// Date: 17 - May - 2020
// Source: https://edabit.com/challenge/9ApjPggCLGiPt573m
// Title: Find the Index

// Instructions:
// Create a function that takes an array and a string as arguments and return the index of the string.

// Examples:
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
// findIndex(["a", "g", "y", "d"], "d") ➞ 3
// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

// Notes:
// Don't forget to return the result.
// If you are stuck, find help in the Resources tab.

// Work:
// function findIndex(arr, str) {
//     return arr.indexOf(str);
// }

// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
// console.log(findIndex(["a", "g", "y", "d"], "d"));
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 16 - May - 2020
// Source: https://edabit.com/challenge/Ju7AK9rAGjz86hjxo
// Title: Factorial of a Positive Integer

// Instructions:
// Write a function that takes a positive integer and return its factorial.

// Examples:
// factorial(4) ➞ 24
// factorial(0) ➞ 1
// factorial(9) ➞ 362880

// Notes:
// The factorial of 0 is 1.
// The factorial of any positive integer Z is Z * (Z - 1) * (Z - 2) * . . . . . . * 1 (e.g. factorial of 3 is 3 * 2 * 1 = 6).

// Work:

// function factorial(z){
//     if(z < 0) return `Please provide a positive integer`;
//     if(z === 0) return 1;
//     return z * factorial(z-1);
// }

// console.log(factorial(4));
// console.log(factorial(0));
// console.log(factorial(9));
// console.log(factorial(-1));

// ------------------------------------------------------------------------------------------------------------------

// Date: 15 - May - 2020
// Source: https://edabit.com/challenge/b2NdDSdkjqFnCTfS8
// Title: Filter out Strings from an Array

// Instructions:
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

// Examples:
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]
// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

// Notes:
// Zero is a non-negative integer.

// Work:
// function filterArray(arr){
//     const newArr = arr.filter(str => {
//         if (str >= 0){
//             return Number.isInteger(str);
//         }
//         return null;
//     })

//     return newArr;
// }

// console.log(filterArray([1, 2, "a", "b"]));
// console.log(filterArray([1, "a", "b", 0, 15]));
// console.log(filterArray([1, 2, "aasf", "1", "123", 123]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 14 - May - 2020
// Source: https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj
// Title: Check if One Array can be Nested in Another

// Instructions:
// Create a function that returns true if the first array can be nested inside the second.
// arr1 can be nested inside arr2 if:
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

// Examples:
// canNest([1, 2, 3, 4], [0, 6]) ➞ true
// canNest([3, 1], [4, 0]) ➞ true
// canNest([9, 9, 8], [8, 9]) ➞ false
// canNest([1, 2, 3, 4], [2, 3]) ➞ false

// Notes:
// Note the strict inequality (see example #3).

// Work:
// function canNest(arr1, arr2) {
//     const arr1Min = Math.min(...arr1);
//     const arr1Max = Math.max(...arr1);
//     const arr2Min = Math.min(...arr2);
//     const arr2Max = Math.max(...arr2);

//     if(arr1Min > arr2Min ){
//         return true
//     } else if(arr1Min === arr2Min){
//         return false
//     } else if (arr1Max < arr2Max){
//         return true
//     } else if (arr1Max === arr2Max){
//         return false
//     } else {
//         return false
//     }
// }

// console.log(canNest([1, 2, 3, 4], [0, 6]));
// console.log(canNest([3, 1], [4, 0]));
// console.log(canNest([9, 9, 8], [8, 9]));
// console.log(canNest([1, 2, 3, 4], [2, 3]));

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
//Resources: https://betterexplained.com/articles/techniques-for-adding-the-numbers-1-to-100/
