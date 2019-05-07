// starting with ES6: Mutate an Array Declared with const


const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
//s = [2, 5, 7];
  // s = [2, 5, 7]; <- this is invalid
s[2]=  7;
s[0]= 2;
s[1]= 5;
console.log(s);

 // change code above this line
}
editInPlace();