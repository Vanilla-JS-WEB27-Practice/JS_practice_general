// Date: 09 - February - 2021
// Source: https://edabit.com/challenge/vshi8S62X7ASdEB2c
// Title: Wrong Number

// Instructions:
// Mubashir needs your help to find out a wrong number in a 2D array.
// Imagine a 2D array of numbers given below:
// var arr = [
//   [1, 2, 3, 6 ],
//   [4, 5, 6, 15],
//   [7, 8, 9, 24],
//   [12,15,18,45]
// ]
// You can notice that:
// The end number of each row is the sum of each row's previous numbers.
// The end number of each column is the sum of each column's previous numbers.

// Examples:
// arr1 = [
//   [2, 2, 3, 6 ],
//   [4, 5, 6, 15],
//   [7, 8, 9, 24],
//   [12,15,18,45]
// ]

// 2 is incorrect in the first row and first column.
// Replace it with 1.
// arr2 = [
//   [1, 2, 3, 7 ],
//   [4, 5, 6, 15],
//   [7, 8, 9, 24],
//   [12,15,18,45]
// ]

// 7 is incorrect in the first row and fourth column.
// Replace it with 6.
// arr3 = [
//   [1, 2, 3, 6 ],
//   [4, 5, 6, 15],
//   [7, 8, 9, 24],
//   [12,15,18,46]
// ]

// 46 is incorrect in the fourth row and fourth column.
// Replace it with 45.

// Work:

const wrongNumber = (arr) => {
    const matrix = arr.slice(0,3).map(x => x.slice(0,3)).flat()
    const rows = arr.slice(0,3).map(x => x.slice(3)).flat()
    
    return rows
  }
  
  console.log(wrongNumber([
    [2, 2, 3, 6 ],
    [4, 5, 6, 15],
    [7, 8, 9, 24],
    [12,15,18,45]
  ]))
  
  console.log(wrongNumber([
    [1, 2, 3, 7 ],
    [4, 5, 6, 15],
    [7, 8, 9, 24],
    [12,15,18,45]
  ]))
  
  console.log(wrongNumber([
    [1, 2, 3, 6 ],
    [4, 5, 6, 15],
    [7, 8, 9, 24],
    [12,15,18,46]
  ]))