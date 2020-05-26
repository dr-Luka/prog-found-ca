// question 1
for (i = 15; i < 26; i += 1) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    console.log();
  }
}

// question 2
function iFunction() {
  console.log("I am a function");
}

var innerFunction = iFunction;

function outerFunction(_oneArgument) {
  _oneArgument("Luka");
}
outerFunction(innerFunction);
