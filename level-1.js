// question 1
var firstVar = "string";

// question 2
var person = {
  hair: "Black",
  age: 25,
};

// question 3
var outOfStock = true;
if (outOfStock === true) {
  console.log("Out of Stock");
} else {
  console.log("In stock");
}

// question 4
var numbers = [1, 10, 100, 1000, 10000];
for (var i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

// question 5
for (i = 15; i < 26; i += 1) {
  console.log(i);
}

// question 6
for (i = 15; i < 26; i += 1) {
  if (i === 20) {
    console.log(i);
  } else {
    console.log();
  }
}

// question 7
var array = [
  {
    name: "Tom",
    age: 18,
    married: false,
  },
  {
    name: "Bob",
    age: 50,
    married: true,
  },
];

for (i = 0; i < array.length; i += 1) {
  console.log(array[i].age);
  console.log(array[i].married);
}

// question 8
function whatIDontLike(dislikedThing) {
  var iDislike = "I don't like " + dislikedThing;
  console.log(iDislike);
}
whatIDontLike("when all flights get canceled");

// question 9
function subtraction(nr1, nr2) {
  var total = nr1 - nr2;
  console.log(total);
}
subtraction(77, 7);

// question 10
var emptyArray = [];
function pushToArray(pushData) {
  emptyArray.push(pushData);
}
pushToArray("Luka");
