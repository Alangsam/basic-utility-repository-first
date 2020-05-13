function add(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return input1 + input2;
}

 //subract
 function subract(input1, input2) {
    var total = input1 - input2;
    return total;
 }


//multiply
function multiply(input1, input2) {
   var total = input1 * input2;
   return total;
}

// //divide
function divide(input1, input2) {
   var total = input1 / input2;
   return total;
}

// //increment
function increment(input) {
   var increased = ++input;
   return increased;
}

// //decrement
function decrement(input) {
   var decreased = --input;
   return decreased;
}

// //multiply decimals
function multDec(input1, input2) {
   var decResult = input1 * input2;
   return decResult;
}

// //divide decimals
function divDec(input1, input2) {
   var divResult = input1 / input2;
   return divResult;
}

// //Concatenating Strings with Plus Operator
function stringCon(string1, string2) {
   var bothstrings = string1 + " " + string2;
   return bothstrings;
}

// //Concatenating Strings with the Plus Equals Operator
function stringConEq(string1, string2) {
   string1 += " " + string2;
   return string1;
}

// //Constructing Strings with Variables
function mySentence(name) {
   var sentence = "Hey you're " + name;
   return sentence;
}

// //Find the Length of a String
function findLength(string) {
   var lengthIs = string.length;
   return lengthIs;
}

// //Use Bracket Notation to Find the First Character in a String
function firstGuy(string) {
   var firstLetter = string[0];
   return firstLetter;
}

// //Use Bracket Notation to Find the Nth Character in a String
function nthGuy(string, n) {
   var anyThingGoes = string[n-1];
   return anyThingGoes;
}

// //Use Bracket Notation to Find the Last Character in a String
function lastGuy(string) {
   var num = string.length-1;
   var newString = string[num];
   return newString;
}

// //Use Bracket Notation to Find the Nth-to-Last Character in a String
function nthToLast(string, n) {
   var whateverWorks = string[string.length - n];
   return whateverWorks;
}

// //Manipulate Arrays With push()
function pushIt(array, string) {
   array.push(string);
   return array;
}

// //Manipulate Arrays With pop()
function popIt(array) {
   array.pop();
   return array;
}

// //Manipulate Arrays With shift()
function shiftIt(array) {
   var hmmmmm = array.shift();
   return hmmmmm;
}

// //Manipulate Arrays With unshift()
function unShiftIt(array, string) {
   array.unshift(string);
   return array;
}

// //Shopping List
function shopping(input1, input2, input3, input4) {
   var theShopList = "I need to get " + input1 + ", " + input2 + ", " + input3 + ", and " + input4 + ".";
   return theShopList;
}

// //Stand in Line
function movinOverOne(arr, item) {
   arr.push(item);
   arr.shift();
 
   return arr;
}   
