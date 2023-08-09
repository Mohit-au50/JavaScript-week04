// Q-1) Write a function to create an object, that calculates the,
// number of times each element occurs in the following array.
// Input: ["Orange","Orange","Banana","Apple","Apple","Banana","Apple",
// "Apple","Apple","Apple","Orange","Orange","Orange","Orange","Banana"]

// Output: { Orange:6 banana:3 apple:6 }

// input is given in the question
let input = [
  "Orange",
  "Orange",
  "Banana",
  "Apple",
  "Apple",
  "Banana",
  "Apple",
  "Apple",
  "Apple",
  "Apple",
  "Orange",
  "Orange",
  "Orange",
  "Orange",
  "Banana",
];

// lets define veriables to store the values of recurring array value.
// orange variable stores how many times orange was in array, same goes for apple and banana
let apple = 1;
let banana = 1;
let orange = 1;

// I have defiend an empty object
let object = {};

// "createObject" is the name of the function and it takes input as it's parameter
function createObject(input) {
  // I ran a loop from 0 to the input length and every time I'm incrementing the count of i by 1
  for (let i = 0; i <= input.length; i++) {
    // first if condition if the value of input i is orange then execute the if block
    if (input[i] == "Orange") {
      // then it will create a key with the name "Orange" and for value I'll use orange veriable and,
      // every time it matches orange with input[i] then It will add +1
      object.Orange = orange++;
    }
    if (input[i] == "Apple") {
      // then it will create a key with the name "Aplle" and for value I'll use orange veriable and,
      // every time it matches apple with input[i] then It will add +1
      object.Apple = apple++;
    }
    if (input[i] == "Banana") {
      // then it will create a key with the name "Banana" and for value I'll use orange veriable and,
      // every time it matches banana with input[i] then It will add +1
      object.Banana = banana++;
    }
  }
}

// finally I have called the "createObject" function with input as its perimeter
createObject(input);

// Then I have finally printed the "object"
console.log(object);
