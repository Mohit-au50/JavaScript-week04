// Q-1) Write a function to convert an array of string of numbers into a number and multiply it by 10.
// Input: [‘1’,‘2’,‘3’,‘4’,‘5’,‘6’]
// Output: 1234560

// the array is given as "input"
let input = ["1", "2", "3", "4", "5", "6"];

// I have joined all the numbers together in string form and save the value in the "newInp" variable
let newInp = input.join("");

// In this step I have coverted the string numbers to actual number vslues and then multiplied it by 10
newInp = Number(newInp) * 10;

// printed the values in console
console.log("the newInp is:", newInp);
console.log("type of the newInp is:", typeof newInp);
