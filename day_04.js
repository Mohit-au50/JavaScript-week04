// Q-1) Take an integer array(length >10) as input from the user, and extract numbers from index 2, 7
// numbers into a new array, using the inbuilt function.
// Elements should be removed from the original array.

// Input -> Arr = [4,8,1,4,2,9,10,7,3,6,5]
// Output -> NewArr = [1,4,2,9,10,7,3]
// Arr = [4,8,6,5]

// printted a message
console.log("Enter the length of the array in numbers:");
// the input "num" will be taken from the user (it has to be above 10)
let num = Number(require("prompt-sync")()());

// the array "arr" is an empty string for now
let arr = [];

// printed a message
console.log("\nEnter the values of the array:");
// I ran a for loop from 0 index to the "num" value
for (let i = 0; i < num; i++) {
  // specified an if condition if num variable is greater than 10 only then execute the function
  if (num > 10) {
    // specified another variable "value" to take values for the array from the user
    let value = Number(require("prompt-sync")()());
    // one by one I ppushed user values inside out input "arr"
    arr.push(value);
  }

  // In else case if the variable "num" is lower than or equal to 10 it will print a message
  else {
    console.log("Enter a valid input above 10");
    break;
  }
}

// I have just printed the input array itself here
console.log("\nthe input array is:", arr);

// I have stored the value of splice function in "newArr"
// splice function will cut the values starting from 2nd index it will count 7 values from 2nd index and store it it "newArr"
newArr = arr.splice(2, 7);

// here I have printed the Output
console.log("\nthe output array is:", newArr);

// finally here I have printed the "arr" after modification by splice function
console.log("\nthe new input array is:", arr);
