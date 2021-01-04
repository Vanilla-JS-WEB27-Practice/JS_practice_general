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
