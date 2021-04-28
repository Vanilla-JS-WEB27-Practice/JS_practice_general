// Template
// Date: - April - 2021
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

// Date: 27 - April - 2021
// Source: https://edabit.com/challenge/BpLG59eieSYarDfZj
// Title: Star Ratings

// Instructions:
// Given an array of five values, calculate the average star rating, rounded to two decimal places. 
// The array contains user votes per star, so the first element [0] contains the number of 1-star ratings and the last element [4], the number of 5-star ratings.
// Return the average score in [brackets], followed by a space and asterisks' * to represent the star rating, rounded to the nearest whole star.

// Examples:
// starRating([55, 67, 98, 115, 61]) ➞ "[3.15] ***"
// starRating([0, 2, 0, 1, 23]) ➞ "[4.73] *****"
// starRating([16, 17, 23, 40, 45]) ➞ "[3.57] ****"

// Notes:
// Round stars to whole stars.

// Work:
const starRating = (arr) => {
  const total = arr.reduce((a,c) => a+c,0);
  const newArr = arr.map((x,i) => x*(i+1)/total)
  const avgStars = newArr.reduce((a,c) => a+c,0).toFixed(2)
  return `[${avgStars}] ${"*".repeat(Math.round(avgStars))}`;
}

console.log(starRating([55, 67, 98, 115, 61]));
console.log(starRating([0, 2, 0, 1, 23]));
console.log(starRating([16, 17, 23, 40, 45]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 21 - April - 2021
// Source: https://edabit.com/challenge/M9KuMowrYvH24Jwio
// Title: How Good is Your Name?

// Instructions:
// Create a function that takes a string of name and checks how much good is the given name. 
// A preloaded dictionary of alphabet scores is available in the Code tab. Add up the letters of your name to get the total score.

// const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
// "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
// "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
// "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}


// Return your result as per the following rules:
// score <= 60:   "NOT TOO GOOD"
// 61 <= score <= 300:  "PRETTY GOOD"
// 301 <= score <= 599:  "VERY GOOD"
// score >= 600:  "THE BEST"

// Examples:
// nameScore("MUBASHIR") ➞ "THE BEST"
// nameScore("YOU") ➞ "VERY GOOD"
// nameScore("MATT") ➞ "THE BEST"
// nameScore("PUBG") ➞ "NOT TOO GOOD"

// Work:
// const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3, "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25, "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113, "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}

// const nameScore = (name) => {
//   let score = 0;
//   name.split("").map(x => score = score + scores[x])
//   return score <= 60 ? "NOT TOO GOOD" 
//         : 61 <= score && score <= 300 ? "PRETTY GOOD" 
//         : 301 <= score && score <= 599 ? "VERY GOOD" 
//         : "THE BEST";
// }

// console.log(nameScore("MUBASHIR"));
// console.log(nameScore("YOU"));
// console.log(nameScore("MATT"));
// console.log(nameScore("PUBG"));
// console.log(nameScore("SEAN"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 12 - April - 2021
// Source: https://edabit.com/challenge/95YiRnBSnfzSQWAuu
// Title: Do You Like Chicken Curry?
// Resources: https://javascript.info/closure#nested-functions, https://www.youtube.com/watch?v=F_N97iovVbQ 

// Instructions:
// Create a function that takes three collections of arguments and returns the sum of the product of numbers.

// Examples:
// product(1,2)(1,1)(2,3) ➞ 8
// 1 * 1 * 2 + 2 * 1 * 3
//         2 + 6

// product(10,2)(5,0)(2,3) ➞ 100
// 10 * 5 * 2 + 2 * 0 * 3
//        100 + 0

// product(1,2)(2,3)(3,4) ➞ 30
// 1 * 2 * 3 + 2 * 3 * 4
//         6 + 24

// product(1,2)(0,3)(3,0) ➞ 0
// 1 * 0 * 3 + 2 * 3 * 0
//         0 + 0

// Notes:
// All test input is valid.

// Work:
// solution from cvf edabit user
// const product = (a,b) => (x,y) => (v,z) => a*x*v+b*y*z;

// second pass 
// function product() {
//   return two = (x,y) => three = (v,z) => (arguments[0]*x*v)+(arguments[1]*y*z)
// }

// first pass
// function product() {
//   let left = arguments[0];
//   let right = arguments[1];
//   return function two(x,y){
//     return function three(v,z){
//       return (left*x*v)+(right*y*z)
//     }
//   }
// }

// console.log(product(1,2)(1,1)(2,3));
// console.log(product(10,2)(5,0)(2,3));
// console.log(product(1,2)(2,3)(3,4));
// console.log(product(1,2)(0,3)(3,0));

// ------------------------------------------------------------------------------------------------------------------

// Date: 08 - April - 2021
// Source: https://edabit.com/challenge/GJD5x54NaFZwbtxQW
// Title: Get Students with Names and Top Notes

// Instructions:
// Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4] } and returns an array of objects like { name: "John", topNote: 5 }.
// If student has no notes (an empty array) then let's assume topNote: 0.

// Examples:
// getStudentsWithNamesAndTopNotes({ "name": "John", "notes": [3, 5, 4] })
// ➞ { "name": "John", "topNote": 5 }

// getStudentsWithNamesAndTopNotes({ "name": "Max", "notes": [1, 4, 6] })
// ➞ { "name": "Max", "topNote": 6 }

// getStudentsWithNamesAndTopNotes({ "name": "Zygmund", "notes": [1, 2, 3] })
// ➞ { "name": "Zygmund", "topNote": 3 }

// Notes:
// Try solving this challenge with an arrow function.

// Work:
// const getStudentsWithNamesAndTopNotes = (students) => {
//   const result = {};
//   result[Object.keys(students)[0]] = students.name;
//   result["topNote"] = Math.max(...students["notes"]);
//   return  result
// }

// console.log(getStudentsWithNamesAndTopNotes({ "name": "John", "notes": [3, 5, 4] }));
// console.log(getStudentsWithNamesAndTopNotes({ "name": "Max", "notes": [1, 4, 6] }));
// console.log(getStudentsWithNamesAndTopNotes({ "name": "Zygmund", "notes": [1, 2, 3] }));

// ------------------------------------------------------------------------------------------------------------------

// Date: 06 - April - 2021
// Source: https://edabit.com/challenge/bZJLPjJL4BuyeeB6j
// Title: Changing a String into camelCase

// Instructions:
// GUsing Camel Case (or camelCase) is where the first word is in lower case, and all words after it have their first letter capitalised. 
// Note that there are no spaces in between words!
// Create a function that takes a string and returns it back in camelCase.

// Examples:
// camelCasing("Hello World") ➞ "helloWorld"
// camelCasing("snake_case") ➞ "snakeCase"
// camelCasing("low high_HIGH") ➞ "lowHighHigh"

// Notes:
// You need to remove all spaces and underscores.
// There will be no numbers in inputs.

// Work:
// second pass
// const camelCasing = (str) => {
//   const reg = /_/;
//   const test = str.replace(reg, " ").split(" ");
//   const result = []
//   test.map((x,i) => {
//     const exam = x.toLowerCase();
//     if(i === 0){
//       result.push(exam);
//     } else {
//       result.push(exam[0].toUpperCase()+exam.slice(1));
//     }
//   })
//   return result.join("")
// }

// const camelCasing = (str) => {
//   const reg = /_{1,}/;
//   const test = str.replace(reg, " ").split(" ");
//   const result = []
//   test.map((x,i) => {
//     const exam = x.toLowerCase();
//     if(i === 0){
//       result.push(exam);
//     } else {
//       const quiz = exam[0].toUpperCase()
//       result.push(quiz+exam.slice(1));
//     }
//   })
//   return result.join("")
// }

// console.log(camelCasing("Hello World"));
// console.log(camelCasing("snake_case"));
// console.log(camelCasing("low high_HIGH"));
// console.log(camelCasing("unEcEsSARilY_loNG_vArIablE_NaME"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 05 - April - 2021
// Source: https://edabit.com/challenge/b8XYLrNhqryNjkDPd
// Title: Is it True?

// Instructions:
// In this challenge you will be given a relation between two numbers, written as a string. Write a function that determines if the relation is true or false.

// Examples:
// isTrue("2=2") ➞ true
// isTrue("8<7") ➞ false
// isTrue("5=13") ➞ false
// isTrue("15>4") ➞ true

// Notes:
// Tests will only have three types of relations: =, >, and <
// Many approaches work here, but the eval() function is particularly useful!

// Work:

// solution from zatoichi49
// const isTrue = relation => eval(relation.replace('=', '==='));

// My solution 
// const isTrue = (str) => {
//   if(str.includes("=")){
//     const eq = str.split('=')
//     return Number(eq[0]) === Number(eq[eq.length-1])
//   } else if (str.includes(">")){
//     const eq = str.split('>')
//     return Number(eq[0]) > Number(eq[eq.length-1])
//   } else if (str.includes("<")){
//     const eq = str.split('<')
//     return Number(eq[0]) < Number(eq[eq.length-1])
//   }
// }

// console.log(isTrue("2=2"));
// console.log(isTrue("8<7"));
// console.log(isTrue("5=13"));
// console.log(isTrue("15>4"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 05 - April - 2021
// Source: https://edabit.com/challenge/e7zybZvYMof9YhDat
// Title: Spaces Apart

// Instructions:
// Create a function that takes an arr and returns the total amount of space between the two "1"s.

// Examples:
// spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]) ➞ 14
// spaceApart(["1", 9, 20, 38, "1"]) ➞ 67
// spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]) ➞ "invalid"

// Notes:
// Return "invalid" if a negative number exists inside arr or if there is more/less than two "1"s. Ignore any other string inside arr.

// Work:
// const spaceApart = (arr) => {
//   const slice = arr.slice(arr.indexOf("1")+1, arr.lastIndexOf("1"));
//   const min = Math.min(...slice);
//   const multi = [];
//   const newStr = [];
//   arr.map(x => x === "1" ? multi.push(x) : null);
  
//   if(min < 0){
//     return "invalid"
//   } else if (multi.length !== 2){
//     return "invalid"
//   } else {
//     slice.map((x, i) => typeof x === "number" ? newStr.push(x) : null);
//     return newStr.reduce((a,b) => typeof b === 'number' ? a+b : null)
//   } 
// }

// console.log(spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]));
// console.log(spaceApart(["1", 9, 20, 38, "1"]));
// console.log(spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]));
// console.log(spaceApart(["1"]));
// console.log(spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]));
// console.log(spaceApart([4, 3, "1", "2", 4, "1", "2", "9"]));
// console.log(spaceApart([4, 3, "1", "2", 4, "1", "1", "9"]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 03 - April - 2021
// Source: https://edabit.com/challenge/aeHGWC6M44KhLCRBt
// Title: Palindrome Word

// Instructions:
// Create a recursive function that determines whether a word is a palindrome or not.

// Examples:
// isPalindrome("madam") ➞ true
// isPalindrome("adieu") ➞ false
// isPalindrome("rotor") ➞ true

// Notes:
// All inputs are in lowercase.
// You are expected to solve this challenge via recursion.
// You can check on the Resources tab for more details about recursion.
// If you think recursion is fun, a collection of those challenges can be found in here.

// Work:
// const isPalindrome = (wrd) => wrd.split('').reverse().join("") === wrd ? true : false;

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("adieu"));
// console.log(isPalindrome("rotor"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 30 - March - 2021
// Source: https://edabit.com/challenge/xsi99TwpGyFC8KS6d
// Title: Number Split

// Instructions:
// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

// Examples:
// numberSplit(4) ➞ [2, 2]
// numberSplit(10) ➞ [5, 5]
// numberSplit(11) ➞ [5, 6]
// numberSplit(-9) ➞ [-5, -4]

// Notes:
// All numbers will be integers.
// You can expect negative numbers too.

// Work:
// solution from edabit user czaplitto
// const numberSplit = (n) => [Math.floor(n/2), Math.ceil(n/2)];

// second pass
// const numberSplit = (n) => n % 2 === 0 ? [n/2, n/2] : [n/2-0.5, n/2+0.5];

// first pass
// const numberSplit = (n) => {
//   const num = n/2;
//   if(n % 2 === 0){
//     return [num, num]
//   } else {
//     return [num-0.5, num+0.5]
//   }
// }

// console.log(numberSplit(4));
// console.log(numberSplit(10));
// console.log(numberSplit(11));
// console.log(numberSplit(-9));

// ------------------------------------------------------------------------------------------------------------------

// Date: 30 - March - 2021
// Source: https://edabit.com/challenge/ujzhzyvGoASKxSAib
// Title: The Frugal Gentleman

// Instructions:
// Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. 
// Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. 
// In any selection of two or more wines, he will always buy the second-cheapest.
// Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. 
// If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

// Examples:
// chosenWine([
//   { name: "Wine A", price: 8.99 },
//   { name: "Wine 32", price: 13.99 },
//   { name: "Wine 9", price: 10.99 }
// ]) ➞ "Wine 9"

// chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"

// chosenWine([]) ➞ null

// Notes:
// All wines will be different prices, so there is no confusion in the ordering.

// Work:
// third pass
const chosenWine = (wines) => wines.length === 0 ? null : wines.length === 1 ? wines[0].name : wines.sort((a,b) => a.price - b.price)[1].name;

// second pass
// const chosenWine = (wines) => {
//   const sorted = wines.sort((a,b) => a.price - b.price);
//   return wines.length === 0 ? null : wines.length === 1 ? wines[0].name : sorted[1].name;
// }

// first pass
// const chosenWine = (wines) => {
//   const sorted = wines.sort((a,b) => {
//     return a.price - b.price
//   });
//   if(wines.length === 0){
//     return null;
//   } else if(wines.length === 1){
//     return wines[0].name;
//   } else {
//     return sorted[1].name
//   }
// }

console.log(chosenWine([]));
console.log(chosenWine([{ name: "Wine A", price: 8.99 }]));
console.log(chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 25 - March - 2021
// Source: https://edabit.com/challenge/jRSST87NjECBzbwzL
// Title: Calculate the Total Price of Groceries

// Instructions:
// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. 
// A grocery object has a product, a quantity and a price, for example:
// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }

// Examples:
// 1 bottle of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 }
// ]) ➞ 1.5

// 1 bottle of milk & 1 box of cereals:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Cereals", quantity: 1, price: 2.50 }
// ]) ➞ 4

// 3 bottles of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 3, price: 1.50 }
// ]) ➞ 4.5

// Several groceries:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 }
// ]) ➞ 10.4

// Some cheap candy:
// getTotalPrice([
//   { product: "Chocolate", quantity: 1, price: 0.10 },
//   { product: "Lollipop", quantity: 1, price: 0.20 }
// ]) ➞ 0.3

// Notes:
// There might be a floating point precision problem in here...

// Work:
// solution from mochibot 
// function getTotalPrice(groceries) {
// 	return Number(groceries.reduce((acc, curr) => acc += curr.price * curr.quantity, 0).toFixed(2)); 
// }

// first pass
// const getTotalPrice = (groceries) => {
//   let result = 0;
//   groceries.map(x => result = result + (x.quantity*x.price))
//   return Math.round(result * 100)/100
// }

// console.log(getTotalPrice([
//   {product: "Milk", quantity: 1, price: 1.50}
// ]));

// console.log(getTotalPrice([
//   {product: "Milk", quantity: 1, price: 1.50},
//   {product: "Cereals", quantity: 1, price: 2.50}
// ]));

// console.log(getTotalPrice([
//   {product: "Milk", quantity: 3, price: 1.50}
// ]));

// console.log(getTotalPrice([
//   {product: "Milk", quantity: 1, price: 1.50},
//   {product: "Eggs", quantity: 12, price: 0.10},
//   {product: "Bread", quantity: 2, price: 1.60},
//   {product: "Cheese", quantity: 1, price: 4.50}
// ]));

// console.log(getTotalPrice([
//   {product: "Chocolate", quantity: 1, price: 0.10},
//   {product: "Lollipop", quantity: 1, price: 0.20},
// ]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 19 - March - 2021
// Source: https://edabit.com/challenge/ayQR9ZBbR8LdXuwXq
// Title: Where Are My Glasses?

// Instructions:
// Oh no! I've lost my glasses, but paradoxically, I need glasses to find my glasses!
// Please help me out by showing me the index in the list which contains my glasses. They look like two capital Os, with any number of dashes in between!
// This means that both O--O and O------------O are valid glasses, but not O----#--O for example!
// Search thoroughly, maybe you'll find my glasses in places such as 'dustO-Odust'

// Examples:
// findGlasses(["phone", "O-O", "coins", "keys"]) ➞ 1
// findGlasses(["OO", "wallet", "O##O", "O----O"]) ➞ 3
// findGlasses(["O--#--O", "dustO---Odust", "more dust"]) ➞ 1

// Notes:
// All lists will include one valid pair of glasses because I swear I dropped them around here somewhere ...
// All elements in the list are strings.

// Work:

// regex solution from edabit user BijogFc24
// const findGlasses = glasses => glasses.findIndex(glass => /O-+O/.test(glass));

// second pass --> can remove result object and can make result the index. Also reduce the logic into ternaries. Long and convoluted, but works. Not eh easiest to read. 
// const findGlasses = (arr) => {
//   arr.map((x,i) => x.includes("O") && x.length > 2 ? x.slice(x.indexOf("O")+1, x.lastIndexOf("O")).split("").some(x => x === '-') === true ? result = i : undefined : undefined);
//   return result
// }

// my first pass
// const findGlasses = (arr) => {
//   const result = {};
//   let index = 0
//   arr.map((x,i) => {
//     if(x.includes("O") && x.length > 2){
//       result[i] = x
//       const remove = x.slice(x.indexOf("O")+1, x.lastIndexOf("O"));
//       if(remove.split("").some(x => x === '-') === true){
//         index = i
//       }
//     } 
//   });
//   return index
// }

// console.log(findGlasses(["phone", "O-O", "coins", "keys"]));
// console.log(findGlasses(["OO", "wallet", "O##O", "O----O"]));
// console.log(findGlasses(["O--#--O", "dustO---Odust", "more dust"]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 18 - March - 2021
// Source: https://edabit.com/challenge/ii4ANncEGP4xjmQ5Y
// Title: Calculate the Volume of a Pyramid

// Instructions:
// Create a function that takes the length, width, height (in meters) and output unit and returns the volume of a pyramid to three decimal places in the correct unit.

// Examples:
// pyramidVolume(4, 6, 20, "centimeters") ➞ "160000000.000 cubic centimeters"
// pyramidVolume(1843, 1823, 923, "kilometers") ➞ "1.034 cubic kilometers"
// pyramidVolume(18, 412, 93, "millimeters") ➞ "229896000000000.000 cubic millimeters"

// Notes:
// The units used are limited to: millimeters, centimeters, meters and kilometers.
// Ensure you return the answer and add the correct unit in the format cubic <unit>.

// Work:
// const pyramidVolume = (l,w,h,u) => {
//   const cubicVol = (l*w*h)*(1/3);
//   switch(u){
//     case "millimeters":
//       return `${(cubicVol*1000000000).toFixed(3)} cubic millimeters`;
//     case "centimeters":
//       return `${(cubicVol*1000000).toFixed(3)} cubic centimeters`;
//     case "meters":
//       return `${(cubicVol).toFixed(3)} cubic meters`;
//     case "kilometers":
//       return `${(cubicVol*0.000000001).toFixed(3)} cubic kilometers`;
//   }
// };

// console.log(pyramidVolume(4,6,20,"centimeters"));
// console.log(pyramidVolume(1843,1823,923,"kilometers"));
// console.log(pyramidVolume(18,412,93,"millimeters"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 04 - March - 2021
// Source: https://edabit.com/challenge/M6hcm6ezCoRBbANQr
// Title: The Missing Link of an Arithmetic Progression
// Resources: https://www.joshwcomeau.com/snippets/javascript/range/ 

// Instructions:
// Your function will get an array with a number sequence. However, one item will be missing. 
// It's your job to find out which one is not in the array.
// To illustrate, given the array [1, 3, 4, 5], 2 is missing so the output must be 2.

// Examples:
// missing([1, 3, 4, 5]) ➞ 2
// missing([2, 4, 6, 8, 10, 14, 16]) ➞ 12
// missing([1.5, 2, 3]) ➞ 2.5

// Notes:
// The missing item will never be the smallest or largest number in the array.
// In every array, exactly one item is missing.

// Work:
// first pass 
// const missing = (arr) => {
  // find the diff
  // const diff = (arr[arr.length-1]-arr[0])/arr.length;
  // create the function to create a range and step through because we know the missing number will be between arr[0] (start/s) and ar[arr.length-1] (end/e)
  // const range = (s,e,step=1) => {
    // return all numbers between s and e 
    // const output = [];

    // This is here incase we only need to call 1 number. The end becomes the param and then s is set to 0 to return an array starting with 0 - end. 
    // if(typeof e === 'undefined'){
    //   e = s;
    //   s = 0;
    // }

    // for loop over the range to produce a sequence of numbers that are pushed into the output array
  //   for (let i = s; i < e+diff; i+=step){
  //     output.push(i);
  //   }

  //   return output
  // }

  // return the range s - e, increasing by the diff
  // filter through and find the one number that doesn't exist in arr
  // return as a number use bracket notation 
//   return range(arr[0],arr[arr.length-1],diff).filter(x => arr.indexOf(x) === -1)[0];
// };

// console.log(missing([1,3,4,5]));
// console.log(missing([2,4,6,8,10,14,16]));
// console.log(missing([1.5,2,3]));


// ------------------------------------------------------------------------------------------------------------------

// Date: 01 - March - 2021
// Source: https://edabit.com/challenge/CKEAH6cs5Tt7aKXKv
// Title: Something in the Box?

// Instructions:
// Create a function that returns true if an asterisk * is inside a box.

// Examples:
// inBox([
//   "###",
//   "#*#",
//   "###"
// ]) ➞ true

// inBox([
//   "####",
//   "#* #",
//   "#  #",
//   "####"
// ]) ➞ true

// inBox([
//   "*####",
//   "# #",
//   "#  #*",
//   "####"
// ]) ➞ false

// inBox([
//   "#####",
//   "#   #",
//   "#   #",
//   "#   #",
//   "#####"
// ]) ➞ false

// Notes:
// The asterisk may be in the array, however, it must be inside the box, if it exists.

// Work:
// const inBox = (arr) => {
//   const result = [];
//   arr.map(x => {
//     if(x.includes("*")) {
//       if(x[0] === "*" || x[x.length-1] === "*"){
//         result.push(false);
//       } else {
//         result.push(true);
//       }
//     } else {
//       result.push(false)
//     }})
//   return result.some(x => x === true)
// };

// console.log(inBox(
//   [
//     "###",
//     "#*#",
//     "###"
//     ]
// ));

// console.log(inBox(
//   [
//     "####",
//     "#* #",
//     "#  #",
//     "####"
//     ]
// ));

// console.log(inBox(
//   [
//     "*####",
//     "# #",
//     "#  #*",
//     "####"
//     ]
// ));

// console.log(inBox(
//   [
//     "#####",
//     "#   #",
//     "#   #",
//     "#   #",
//     "#####"
//     ]
// ));

// ------------------------------------------------------------------------------------------------------------------

// Date: 22 - February - 2021
// Source: https://edabit.com/challenge/T9vEX6ftTgCabfnCv
// Title: Energy Bill Calculator

// Instructions:
// Create a function that calculates an energy bill.
// Given a billing start date and end date, start and end meter reading, a unit price in pence, and a standing charge (a daily rental fee for your meter) as arguments, calculate your bill.
// An energy bill is calculated by multiplying the difference between meter readings with the unit price and adding the number of days multiplied by the standing charge. 
// You then have to add 5% tax.
// (days between dates x standing charge) + (difference between meter readings x unit price) + 5% tax

// Examples:
// energyBill("2020,01,01", "2020,04,01", 1000, 2000, 0.188, 0.243),  = "£220.62"
// "2020,04,01" (end date) - "2020,01,01" ( start date ),  = 91 days
// 2000 ( end meter read )- 1000 ( start meter read ) = 1000 units used
// 1000 (units) * 0.188p (each unit cost) = £188
// 91 (days) * 0.243p (standing charge) == £22.113
// 22.113 (Total standing charge cost) + £188 (total unit cost) = £210.113
// 210.113 (cost) * 0.05 (uk tax on energy) = 10.50565
// 210.113 (cost) + 10.50565 (tax) = 220.61865
// answer = "£220.62"

// Notes:
// If the end date is an earlier date from the start date return "Invalid date".
// If the end meter reading is less then the start meter reading return "Invalid meter readings".
// Please bring to my attention any clarity issues.

// Work:
// const energyBill = (startD, endD, startR, endR, tariff, stand)  => {
//   const test1 = new Date(startD)
//   const test2 = new Date(endD)
//   const diff = Math.round((test2.getTime() - test1.getTime())/(1000*60*60*24))
//   const formula = (diff*stand)+((endR-startR)*tariff)
//   const tax = formula*0.05
//   return endD < startD ? 'Invalid date' : endR < startR ? 'Invalid meter readings' : `£${(formula+tax).toFixed(2)}`
// }

// console.log(energyBill("2020,01,01", "2020,04,01", 1000, 2000, 0.188, 0.243));

// ------------------------------------------------------------------------------------------------------------------

// Date: 19 - February - 2021
// Source: https://edabit.com/challenge/pB6CF3rFBi8ykJ3Br
// Title: Left Shift by Powers of Two

// Instructions:
// The left shift operation is similar to multiplication by powers of two.
// Sample calculation using the left shift operator (<<):
// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20
// Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

// Examples:
// shiftToLeft(5, 2) ➞ 20
// shiftToLeft(10, 3) ➞ 80
// shiftToLeft(-32, 2) ➞ -128
// shiftToLeft(-6, 5) ➞ -192
// shiftToLeft(12, 4) ➞ 192
// shiftToLeft(46, 6) ➞ 2944

// Notes:
// There will be no negative values for the second parameter y.
// This challenge is more like recreating of the left shift operation, thus, the use of the operator directly is prohibited.
// Alternatively, you can solve this challenge via recursion.
// A recursive version of this challenge can be found via this link.

// Work:
// const shiftToLeft = (x,y) => x*2**y

// console.log(shiftToLeft(5,2));
// console.log(shiftToLeft(10,3));
// console.log(shiftToLeft(5,2));

// ------------------------------------------------------------------------------------------------------------------

// Date: 19 - February - 2021
// Source: https://edabit.com/challenge/WCMC8X9z7758hq4gP
// Title: Folding a Piece of Paper
// Resources: https://math.stackexchange.com/questions/280023/how-to-calculate-the-thickness-of-a-paper-by-exponential-calculation

// Instructions:
// Create a function that returns the thickness (in meters) of a piece of paper after folding it n number of times. The paper starts off with a thickness of 0.5mm.

// Examples:
// numLayers(1) ➞ "0.001m"
// Paper folded once is 1mm (equal to 0.001m)
// numLayers(4) ➞ "0.008m"
// Paper folded 4 times is 8mm (equal to 0.008m)
// numLayers(21) ➞ "1048.576m"
// Paper folded 21 times is 1048576mm (equal to 1048.576m)

// Notes:
// There are 1000mm in a single meter.
// Don't round answers.

// Work:
// const numLayers = (n) => `${(0.5*(2**n))*.001}m`;

// another option
// const numLayers = (n) => `${(0.5*(2^n))*.001}m`;

// console.log(numLayers(1));
// console.log(numLayers(4));
// console.log(numLayers(21));

// ------------------------------------------------------------------------------------------------------------------

// Date: 19 - February - 2021
// Source: https://edabit.com/challenge/qJGDCEZRoGRPt3viu
// Title: Orthogonal Vector
// Resources: https://onlinemschool.com/math/library/vector/orthogonality/, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// Instructions:
// Create a function that takes two vectors as arrays and checks if the two vectors are orthogonal or not. 
// The return value is boolean. Two vectors a and b are orthogonal if their dot product is equal to zero.

// Examples:
// isOrthogonal([1, 2], [2, -1]) ➞ true
// isOrthogonal([3, -1], [7, 5]) ➞ false
// isOrthogonal([1, 2, 0], [2, -1, 10]) ➞ true

// Notes:
// The two arrays will be of same length.

// Work:
// const isOrthogonal = (a1, a2) => a1.reduce((a,b,i) => (b*a2[i])+a,0) === 0;

// console.log(isOrthogonal([1,2],[2,-1]));
// console.log(isOrthogonal([3,-1],[7,5]));
// console.log(isOrthogonal([1,2,0],[2,-1,10]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 18 - February - 2021
// Source: https://edabit.com/challenge/cXgmHb6aXESZBvW4b
// Title: Formating BigInts

// Instructions:
// Cryptocurrencies often have a lot of decimals. For example, the popular cryptocurrency Ethereum has 18 decimals.
// When dealing with money, precision is important, you don't want to lose money because a number is losing precision. 
// However, with JavaScript, normal numbers only can go up to 9007199254740991. To deal with this, Javascript now has BigInt for integers bigger than that.
// However, in order to get back to a decimal number, the number needs to be formatted from a BigInt to a string with the right number of decimals.
// Write a function that takes as arguments a BigInt and the desired amount of decimals and returns a string (not a number, as it will lose precision) with the correct amount of decimals.

// Examples:
// formatBigInt(1938908490185852058934n, 18) ➞ "1938.908490185852058934"
// formatBigInt(987654321987654321n, 6 ) ➞ "987654321987.654321"
// formatBigInt(13902183984901849081284n, 12) ➞ "13902183984.901849081284"

// Work:
// regex solution from Undefined9999 edabit user
// function formatBigInt(a, b) {
// 	return (a+'').replace(RegExp('.{'+b+'}$'),'.$&')
// }

// solution by zimmahTV edabit user
// let formatBigInt = (b, d, s = ''+b) => s.slice(0, -d)+'.'+s.slice(-d)

// my solution:
// const formatBigInt = (bn, d) => {
//   const p2 = String(bn).slice(String(bn).length - d)
//   const p1 = String(bn).slice(0,String(bn).length - d)
//   return [p1,'.',p2].join("")
// }

// console.log(formatBigInt(1938908490185852058934n, 18));
// console.log(formatBigInt(987654321987654321n, 6));
// console.log(formatBigInt(13902183984901849081284n, 12));

// ------------------------------------------------------------------------------------------------------------------

// Date: 17 - February - 2021
// Source: https://edabit.com/challenge/Dq8kbbsLYyG9are5Z
// Title: Total Volume of All Boxes

// Instructions:
// Given an array of boxes, create a function that returns the total volume of all those boxes combined together. 
// A box is represented by an array with three elements: length, width and height.
// For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

// Examples:
// totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) ➞ 63
// totalVolume([2, 2, 2], [2, 1, 1]) ➞ 10
// totalVolume([1, 1, 1]) ➞ 1

// Notes:
// You will be given at least one box.
// Each box will always have three dimensions included.

// Work:
// solution by Pustur, edabit user
// const totalVolume = (...boxes) => boxes.reduce((total, [l,w,h]) => total + l * w * h, 0);


// My solution 
// const totalVolume = (...boxes) => {
//   let result = 0;
//   boxes.map(x => result = result + (x[0]*x[1]*x[2]));
//   return result
// }

// console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
// console.log(totalVolume([2, 2, 2], [2, 1, 1]));
// console.log(totalVolume([1, 1, 1]));

// ------------------------------------------------------------------------------------------------------------------

// Date: 16 - February - 2021
// Source: https://edabit.com/challenge/mHrFjP4K5BfAKEugN
// Title: Hex to Binary
// Resource: https://medium.com/javascript-in-plain-english/javascript-algorithm-hex-to-decimal-3400f3742d1e

// Instructions:
// Create a function that will take a HEX number and returns the binary equivalent (as a string).

// Examples:
// toBinary(0xFF) ➞ "11111111"
// toBinary(0xAA) ➞ "10101010"
// toBinary(0xFA) ➞ "11111010"

// Notes:
// The number will be always an 8-bit number.
// First I needed to turn the param into a string with String(), which gave me the decimal value, but as a string.
// Then, I needed to take that value and convert it into a number with Number()
// Finally take that decimal and turn it into binary using the .toString(2) method

// Work:
// const toBinary = (h) => Number(String(h)).toString(2)

// console.log(toBinary(0xFF));
// console.log(toBinary(0xAA));
// console.log(toBinary(0xFA));


// ------------------------------------------------------------------------------------------------------------------

// Date: 16 - February - 2021
// Source: https://edabit.com/challenge/mgCKn998CNowjAZBF
// Title: Basic Arithmetic Operations

// Instructions:
// Write a function that does the following for the given values: add, subtract, divide and multiply. 
// This is simply referred to as the basic arithmetic operations. 
// The variables have to be defined, but in this challenge, it will be defined for you. 
// All you have to do, is to check the variables, do some string to integer conversion, use some if conditions, and apply the arithmetic operation.
// The numbers and operation are given as a string and should result to an integer value.

// Examples:
// operation("1",  "2",  "add" ) ➞ 3
// operation("4",  "5",  "subtract") ➞ -1
// operation("6",  "3",  "divide") ➞ 2

// Notes:
// The numbers and operation are given as a string and should result to an integer value.
// If the operation results to Infinity, then return "undefined" (e.g. division by zero).
// Division results will be rounded down to its integral part.

// Work:

// shorter solution by Deep Xavier
// const operation = (...e) => {
//   let ops = {add: '+', subtract: '-', multiply: '*', divide: '/'}
//   return (x = eval(e[0]+ops[e[2]]+e[1])) == Infinity ? "undefined" : x
// }

// My solution 
// const operation = (a,b,op) => {
//   if(b === "0" && op === "divide"){
//     return 'undefined'
//   } else {
//     switch(op){
//       case "add":
//         return Number(a)+Number(b);
//       case "subtract":
//         return Number(a)-Number(b);
//       case "divide":
//         return Number(a)/Number(b);
//       case "multiply":
//         return Number(a)*Number(b);
//     }
//   }
// }

// console.log(operation("1","2","add"));
// console.log(operation("1","-20","add"));
// console.log(operation("9","0","divide"));
// console.log(operation("10","10","multiply"));
// console.log(operation("-10","-10","multiply"));
// console.log(operation("10","10","subtract"));
// console.log(operation("0","0","subtract"));
// console.log(operation("0","1","divide"));
// console.log(operation("0","25415","divide"));
// console.log(operation("4","5","subtract"));
// console.log(operation("6","3","divide"));

// ------------------------------------------------------------------------------------------------------------------

// Date: 14 - February - 2021
// Source: https://edabit.com/challenge/xRcgQHtfLbxomYb33
// Title: Burglary Series (20): Sign Your Name
// Resource: https://medium.com/@nlfernando11/object-freeze-vs-object-seal-vs-object-preventextensions-251ee99d0c47
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal

// Instructions:
// The police send you the electronic statement again for you to sign. 
// This time you are able to sign it and, to speed up bureaucracy, you try to sign for your spouse as well. 
// Unfortunately, the document is still protected against new entries...
// This challenge is a bit different as the function you are given already contains some code that you should not change or remove. 
// Also, don't use a return statement, it is already included. Your task is, given an object, 
// prevent new properties from being added to that object, but you should still be able to change the value of the existing properties.

// Examples:
// const obj = { yourSignature: "" }
// signYourName( obj ) {
  // write your code here
//   obj.yourSignature = "Whatever";
//   obj.spouseSignature = "Nice Try"
//   return obj;
// } ➞ { yourSignature: "Whatever" }

// Notes:
// If you have suggestions on how to present or further test this challenge please leave a comment.
// This series is part of a collection (https://edabit.com/collection/6NzWEMSwrSw4fnKkL) that focuses on objects. 
// If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges 
// (the challenges are ordered in ascending difficulty order), you can more easily do that here.

// Work:
// const obj = { yourSignature: ""}
// function signYourName(obj){
  // write your code here
  // don't use a return statement
  // Object.seal(obj);

  // DON"T CHANGE OR REMOVE THE LINES BELOW
//   obj.yourSignature = 'Whatever';
//   obj.spouseSignature = "Nice Try";
//   return obj;
// }

// console.log(signYourName({ yourSignature: ""}))

// ------------------------------------------------------------------------------------------------------------------

// Date: 14 - February - 2021
// Source: https://edabit.com/challenge/eaf8EaFRPwKNGqwZF
// Title: No Good Numbers

// Instructions:
// A positive number's population is the sum of 1's in its binary representation.
// An evil number has an even numbered population.
// An odious number has an odd numbered population.
// A number is pernicious if its population is a prime number.
// Create a function that takes a number as an argument and returns a sorted array of all its descriptors ("Evil", "Odious", or "Pernicious").

// Examples:
// howBad(7) ➞ ["Odious", "Pernicious"]
// 7 in binary is "111".
// 1 + 1 + 1 = 3 in "111" means "Odious" should be added to the array answer.
// 3 is a prime number, meaning "Pernicious" should also be added.

// howBad(17) ➞ ["Evil", "Pernicious"]
// 17 in binary is "10001".
// 1 + 1 = 2 in "10001" means "Evil" should be added to the array answer.
// 2 is a prime number, meaning "Pernicious" should also be added.

// howBad(23) ➞ ["Evil"]
// 23 in binary is "10111".
// Four 1's in "10111" means "Evil" should be added to the array answer.
// 4 is not a prime number, meaning "Pernicious" should not be added.

// Work:

// my solution 
// const howBad = (num) => {
//   const result = [];
//   const binary = (num >>> 0).toString(2).split("").reduce((a,b) => Number(a)+Number(b));
//   const prime = [2,3,5,7,11,13,17,19,23];
//   if(binary % 2 === 0 ){
//     result.push("Evil")
//     if (binary === 2){
//       result.push("Pernicious")  
//     }
//   } else if(binary % 2 !== 0 && prime.indexOf(binary) > -1){
//     result.push("Odious", "Pernicious")
//   } else if(binary % 2 !== 0){
//     result.push("Odious")
//   }
//   return result
// }

// console.log(howBad(7));
// console.log(howBad(17));
// console.log(howBad(23));
// console.log(howBad(97));
// console.log(howBad(66));
// console.log(howBad(77));
// console.log(howBad(128));
// console.log(howBad(666));
// console.log(howBad(987654321));
// console.log(howBad(98765));

// ------------------------------------------------------------------------------------------------------------------

// Date: 13 - February - 2021
// Source: https://edabit.com/challenge/LhBwyiMeWiADZhydE
// Title: Learn Lodash (4): _.dropRight, Drop the Last Elements of an Array

// Instructions:
// According to the lodash documentation, _.dropRight Creates a slice of an array with n elements dropped from the end.
// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

// Examples:
// dropRight([1, 2, 3]) ➞ [1, 2]
// dropRight([1, 2, 3], 2) ➞ [1]
// dropRight([1, 2, 3], 5) ➞ []
// dropRight([1, 2, 3], 0) ➞ [1, 2, 3]

// Notes:
// Do not attempt to import lodash; you are simply writing your own version.
// This entire series of challenges can be found here.

// Work:
// solution by Giorgi Dzigoshvili
// const dropRight = (a, num=1) => a.splice(a,a.length-num)

// my solution
// const dropRight = (a, num=1) => a.reverse().slice(num).reverse()

// console.log(dropRight([1,2,3]));
// console.log(dropRight([1,2,3],2));
// console.log(dropRight([1,2,3],5));
// console.log(dropRight([1,2,3],0));

// ------------------------------------------------------------------------------------------------------------------

// Date: 13 - February - 2021
// Source: https://edabit.com/challenge/xtHTBXjumRg5AhsT5
// Title: Slightly Superior

// Instructions:
// You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart 
// (which means that evaluating the value > the other value will return true).
// Create a function that returns whether the first array is slightly superior to that of the second.
// Worked Example
// isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
// The pair of items at each index are compared in turn.
// 1 from the first array is the same as 1 from the second array.
// 2 is the same as 2.
// However, 4 is greater than 3, so first array is superior.

// Examples:
// isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true
// isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true
// isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false
// isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false

// Notes:
// Both arrays will be the same length.
// All values and their counterparts will always be of the same data type.
// If the two arrays are the same, return false.

// Work:
// solution by cvf on edabit
// const isFirstSuperior = (arr1, arr2) => arr1 > arr2;

// my solution
// const isFirstSuperior = (arr1, arr2) => arr1.some((x,i) => x > arr2[i]);

// console.log(isFirstSuperior(['a','d','c'],['a','b','c']));
// console.log(isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]));
// console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]));
// console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]));

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