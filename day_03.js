// Q-1) Take an integer array(length >10) as input from the user,
// and extract numbers from index 2 to 8 into a new array, using inbuilt function.
// Elements should not be removed from the original array.
// Input -> Arr = [4,8,1,4,2,9,10,7,3,6,5]

// Output -> NewArr = [1,4,2,9,10,7,3]
// Arr = [4,8,1,4,2,9,10,7,3,6,5]

// sample array is given
let arr = [4, 8, 1, 4, 2, 9, 10, 7, 3, 6, 5];

// I took "newArr" as an empty array so that I can store values in it later
let newArr = [];

// I ran a for loop from i = 2, (second index to the length of the array)
for (let i = 2; i < arr.length; i++) {
  // Inside loop I specified a  condition if index vvalue is lower than/or it's 8 then execute the if block
  if (i <= 8) {
    // I simply pushed all the arr values from index 2 to 8 in the "newArr" variable
    newArr.push(arr[i]);
  }
  // console.log(i);
  // newArr.push(arr[i]);
}

// I simply printed the input and the output
console.log("the new output array is:", newArr);
console.log("the input array was:", arr);
