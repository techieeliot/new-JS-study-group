    // we began freeCodeCamp Basic JS section today.

    //comment example for a line

    /* multi line
    1
    2
    3
    */

    //challenge 2 Basic JavaScript: Storing Values with the Assignment Operator

    // Example
    var ourName;

    // Declare myName below this line
    var myName;

    var myName2;

    var myName$$$;

    var my_Name_for_the_freeCodeCamp = "John";

    var $ = 56;

    var _ = "underscore";

    console.log($);

    console.log(_);

    console.log(my_Name_for_the_freeCodeCamp);

    // challenge 3 

    // Setup
    var a;
    var b = 2;

    // Only change code below this line

    var myVar = 100;

    var myNumber = myVar;

    console.log(myNumber);

    console.log(myVar);

    console.log(b);

    var a = 7;
    var b = a;

    console.log(b);

    // challenge 4 Basic JavaScript: Initializing Variables with the Assignment Operator
      // Example
      var ourVar = 19;

      // Only change code below this line

      var myVar = 0;

      var a = 9;


    // challenge 5 Basic JavaScript: Understanding Uninitialized Variables
    // Initialize these three variables
    var a = 5;
    var b = 10;
    var c = "I am a";
    var num;
    // Do not change code below this line

    console.log(a);
    console.log(b);
    console.log(c);

    console.log(typeof(num));


    a = a + 1;
    b = b + 5;
    c = c + " String!";

/*   console.log(a);
  console.log(b);
  console.log(c);
  console.log(typeof(c));

  a = a + c;
  //num = c + num;
  num = num + num;
  console.log(num);
  console.log(typeof(num));
  num = num + a;
  num = num + num; */

  // challenge 6 properCamelCase skipped pasting

  // challenge 7 Basic JavaScript: Add Two Numbers with JavaScript

    var sum = 10 + 10;

  var myVar = 10083833094389879837 + 3839870947;

  var text = "text blah"

  var myVar2 = 3809870948709874 + text;


  var myVar3 = myVar + myVar2;

  console.log(typeof(myVar3));

  console.log(myVar3);

  console.log(typeof(text));




    console.log(num);
    console.log(typeof(num));

    //Challenge 8-10 were subtraction, multiplication, and division

    //Challenge 11 
    var myVar = 87;

    // Only change code below this line
    console.log(myVar);

    myVar++;

    console.log(myVar);

    var i = 10038709874;
    console.log(i);
    i+=100;

    console.log(i);
    
    //Began day 2 at challenge 12 Basic JavaScript: Decrement a Number with JavaScript fcc
    var myVar = 11;

    // Only change code below this line
    myVar--;

    console.log(myVar);


      myVar -=2;

      console.log(myVar);


    //ch 13 decimal very easy

    // ch 14 multiplication also very easy

    // ch 15 division

    // ch 16 remainder

    // ch 17 Compound Assignment With Augmented Addition
    var a = 3;
    var b = 17;
    var c = 12;

    // Only modify code below this line
    var d = 20;

    a += 2;
    b += 9;
    c += 7;
    d += c + b + a;


    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

    //ch 18-20 augmented subtraction (-=), multiplication (*=), division (/=).
    //simple solutions so not included

    //ch21-23 escapes 
    //     Code	Output
    // \'	single quote
    // \"	double quote
    // \\	backslash
    // \n	newline
    // \r	carriage return
    // \t	tab
    // \b	backspace
    // \f	form feed
    var myStr = 'FirstLine\n\t\\SecondLine\nThirdLine'; // Change this line
    
    //ch 24 - 25 concatenating with + and +=

    // Example
    var ourStr = "I come first. ";
    ourStr += "I come second.";

    // Only change code below this line

    var myStr = "This is the first sentence. ";

    console.log(myStr);

    myStr += "This is the second sentence.";

    console.log(myStr);

    //ch 26

    // Example
    var ourName = "freeCodeCamp";
    var ourStr = "Hello, our name is " + ourName + ", how are you?";

    // Only change code below this line
    var myName = "Eliot" ;
    var myStr = "My name is " + myName + " and I am well!";

    console.log(myStr);

    //ch 27

    // Example
    var anAdjective = "awesome!";
    var ourStr = "freeCodeCamp is ";
    ourStr += anAdjective;

    // Only change code below this line

    var someAdjective = "FUN!";
    var myStr = "Learning to code is ";
    myStr += someAdjective;

    console.log(myStr);

    // Example
    var firstNameLength = 0;
    var firstName = "Ada";

    firstNameLength = firstName.length;

    // Setup
    var lastNameLength = 0;
    var lastName = "Lovelace";

    // Only change code below this line.

    lastNameLength = lastName.length;

    console.log(lastNameLength);

    // ch 28
    // Example
    var firstLetterOfFirstName = "";
    var firstName = "Ada";

    firstLetterOfFirstName = firstName[0];

    // Setup
    var firstLetterOfLastName = "";
    var lastName = "Lovelace";

    // Only change code below this line
    firstLetterOfLastName = lastName[0];

    console.log(firstLetterOfLastName);

    //ch 29;

    //strings cannot be changed by using the index notation;

    //ch30

    // Example
    var firstName = "Ada";
    var secondLetterOfFirstName = firstName[1];

    // Setup
    var lastName = "Lovelace";

    // Only change code below this line.
    var thirdLetterOfLastName = lastName[2];

    console.log(thirdLetterOfLastName);

    // ch 31

    //Basic JavaScript: Use Bracket Notation to Find the Last Character in a String

    // Example
    var firstName = "Ada";
    var lastLetterOfFirstName = firstName[firstName.length - 1];

    // Setup
    var lastName = "Lovelace";

    // Only change code below this line.
    var lastLetterOfLastName = lastName[lastName.length - 1];

    console.log(lastLetterOfLastName);

    console.log(lastName.length);
    
    // ch Use Bracket Notation to Find the Nth-to-Last Character in a String
    // Example
    var firstName = "Ada";
    var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

    // Setup
    var lastName = "Lovelace";

    // Only change code below this line
    var secondToLastLetterOfLastName = lastName[lastName.length - 2];

    console.log(secondToLastLetterOfLastName);

    // Word Blanks

    function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = "Yesterday, " + myNoun + " went to the " + myAdjective + " post office to " + myVerb + " a few postcards " + myAdverb + ".";

    // Your code above this line
    return result;
    }

    // Change the words here to test your function
    var thing = wordBlanks("Madea", "janky", "send", "quickly");

    console.log(thing);

    // Store Multiple Values in one Variable using JavaScript Arrays

    // Example
    var ourArray = ["John", 23];

    // Only change code below this line.
    var myArray = ['Mesfin', 6];

    console.log(myArray[1]);

    console.log(typeof myArray[1]);

    console.log(myArray.length - 1);

    var lastArrayItem = myArray[myArray.length - 2];

    console.log(lastArrayItem);

    //Nest one Array within Another Array

    // Example
    var ourArray = [["the universe", 42], ["everything", 101010]];

    // Only change code below this line.
    var myArray = [["Basic Javascript", 34], ["FrontEnd Library Certification", 3]];

    console.log(myArray[0][1]);

    console.log(myArray[1][0]);

    //Access Array Data with Indexes

    // Example
    var ourArray = [50,60,70];
    var ourData = ourArray[0]; // equals 50

    // Setup
    var myArray = [50,60,70];

    // Only change code below this line.

    var myData = myArray[0];

    console.log(myData);

    //Modify Array Data With Indexes

    // Example
    var ourArray = [18,64,99];
    ourArray[1] = 45; // ourArray now equals [18,45,99].

    // Setup
    var myArray = [18,64,99];

    // Only change code below this line.

    console.log(myArray);

    // not best practice to use the " " between variable and brackets
    myArray [0] = 65;

    console.log(myArray);

    // best practice uses variable and not space when using brackets
    myArray[0] = 45;

    console.log(myArray);

    //Access Multi-Dimensional Arrays With Indexes

    // Setup
    var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

    // Only change code below this line.
    var myData = myArray[2][1];

    console.log(myData);

    //Manipulate Arrays With push()

    // Example
    var ourArray = ["Stimpson", "J", "cat"];
    ourArray.push(["happy", "joy"]); 
    // ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

    // Setup
    var myArray = [["John", 23], ["cat", 2]];

    // Only change code below this line.

    console.log(myArray);

    myArray.push(["dog", 3]);

    console.log(myArray);

    myArray[2][1] = 5;

    console.log(myArray);

    myArray[0][0] = "Jon";

    console.log(myArray);

    //Manipulate Arrays With pop()
    //start here tomorrow
    // Example
    var ourArray = [1,2,3];
    var removedFromOurArray = ourArray.pop(); 
    // removedFromOurArray now equals 3, and ourArray now equals [1,2]

    // Setup
    var myArray = [["John", 23], ["cat", 2]];

    // Only change code below this line.
    console.log(removedFromMyArray);

    var removedFromMyArray = myArray.pop();

    console.log(removedFromMyArray);

    //Manipulate Arrays With shift()

    // Example
    var ourArray = ["Stimpson", "J", ["cat"]];
    var removedFromOurArray = ourArray.shift();
    // removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

    // Setup
    var myArray = [["John", 23], ["dog", 3]];

    // Only change code below this line.

    console.log(myArray);

    var removedFromMyArray = myArray.shift();

    console.log(myArray);

    // Manipulate Arrays With unshift()

    // Example
    var ourArray = ["Stimpson", "J", "cat"];
    ourArray.shift(); // ourArray now equals ["J", "cat"]
    ourArray.unshift("Happy"); 
    // ourArray now equals ["Happy", "J", "cat"]

    // Setup
    var myArray = [["John", 23], ["dog", 3]];
    myArray.shift();

    // Only change code below this line.
    console.log(myArray);


    myArray.unshift(["Paul", 35]);

    console.log(myArray);

    //Write Reusable JavaScript with Functions

    // Example
    function ourReusableFunction() {
      console.log("Heyya, World");
    }

    ourReusableFunction();

    // Only change code below this line
    function reusableFunction() {
      console.log("Hi World");
    }

    reusableFunction();

    // Passing Values to Functions with Arguments

    // Example
    function ourFunctionWithArgs(a, b) {
      console.log(a - b);
    }
    ourFunctionWithArgs(10, 5); // Outputs 5

    // Only change code below this line.

    function functionWithArgs(param1, param2) {
      console.log(param1 + param2);
    }

    functionWithArgs(7,19);

    //

    // Declare your variable here
    var myGlobal = 10;


    function fun1() {
      // Assign 5 to oopsGlobal Here
      oopsGlobal = 5;
    }

    // Only change code above this line
    function fun2() {
      var output = "";
      if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
      }
      if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
      }
      console.log(output);
    }

    // local 

    // Setup
    var outerWear = "T-Shirt";

    function myOutfit() {
      // Only change code below this line
      var outerWear = "sweater";
      
      
      // Only change code above this line
      return outerWear;
    }

    myOutfit();

    console.log(outerWear);

    console.log(myOutfit());

    //start at lesson:
    //Return a Value from a Function with Return
    //

        // Example
    var sum = 0;
    function addThree() {
      sum = sum + 3;
    }

    // Only change code below this line
    addThree();

    function addFive () {
      sum = sum + 5;
    }


    // Only change code above this line
    var returnedValue = addFive(); 

    console.log(returnedValue);

    console.log(sum);

    //Assignment with a Returned Value

        // Example
    var changed = 0;

    function change(num) {
      return (num + 5) / 3;
    }

    changed = change(10);

    // Setup
    var processed = 0;

    function processArg(num) {
      return (num + 3) / 5;
    }

    // Only change code below this line

    processed = processArg(7);

    console.log(processed);

    // began with Use Conditional Logic with If Statements

    //Basic JavaScript: Comparison with the Strict Equality Operator


    // Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
var strict = testStrict(7);

console.log(strict);

//Basic JavaScript: Practice comparing different values

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
var compare = compareEquality(10, "10");

console.log(compare);

// Basic JavaScript: Comparison with the Greater Than Operator

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
var test = testNotEqual(99);

console.log(test);

//

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  
  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";

//

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }
  
  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
console.log(testGreaterOrEqual(20));


// Change this value to test
var test = testGreaterThan(101);

console.log(test);


//

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  
  switch (val){
    case 'a':
      answer = "apple";
      break;

    case 'b':
      answer = "bird";
      break;

    case 'c':
      answer = "cat";
      break;

    default:
      answer = "stuff";
      break;                
  }
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
console.log(switchOfStuff('a'));


// completed through switch statments with default