let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
  return quote;

}
console.log(catTalk());
console.log('hey');

// Last Challenge for 5/6/2019 ES6: Declare a Read-Only Variable with the const Keyword

function printManyTimes(str) {
    "use strict";
  
    // change code below this line
  
    const SENTENCE = str + " is cool!";
    for(let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  
    // change code above this line
  
  }
  printManyTimes("w3develops");
