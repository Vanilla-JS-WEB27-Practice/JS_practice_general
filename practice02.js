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
const converter = (a, b) => {
    if (a[0] === "fahrenheit" && b === "kelvin"){
        return Number(((a[1] + 459.67) * (5/9)).toFixed(1))
    } else if (a[0] === "fahrenheit" && b === "celsius"){
        return Number(((a[1] - 32) / 1.8).toFixed(1))
    } else if (a[0] === "celsius" && b === "kelvin"){
        return  Number((a[1] + 273.15).toFixed(1))
    } else if (a[0] === "celsius" && b === "fahrenheit"){
        return Number(((a[1] * 1.8) + 32).toFixed(1))
    } else if (a[0] === "kelvin" && b === "fahrenheit"){
        return Number(((a[1] * 1.8) - 459.67).toFixed(1))
    } else if (a[0] === "kelvin" && b === "celsius"){
        return Number((a[1] - 273.15).toFixed(1))
    }
}

console.log(converter(["fahrenheit", 3] , "kelvin"));
console.log(converter(["celsius", 10] , "fahrenheit"));
console.log(converter(["celsius", 20] , "kelvin"));
