var ourFristFunction = function () {
  console.log("hello world");
};

console.log(ourFristFunction());
 var sayHelloTo = function (name) {
   console.log("hello" + name + "!");
 };

console.log ((sayHelloTo)("Nick"));
console.log(sayHelloTo("lyra"));
var drawCats  = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + "=^.^");
  }
};

console.log(drawCats(5));
var printMultipleTimes = function (howManyTimes, whatToDraw) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " " + whatToDraw);
  }
};
 console.log(printMultipleTimes(5, "=^.^="));
console.log(printMultipleTimes(4, "^_^"));

printMultipleTimes(2,"(2<_>)");
console.log(5 + Math.floor(1.2345));
var double = function (number) {
  return number * 2;
};
console.log(double(3));
console.log(double(5) + double(6));
double(double(3));



var pickRandomWords = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};
 var randomWords = ["plants","worn","Flower","Computer"];

console.log(pickRandomWords(randomWords));
 console.log(pickRandomWords(["Charlie","Raj","nicole","Kate","Sandy"]));


var randomBodyParts = ["Face","Nose","Hair"];
var randomAdjectives = ["Smelly","Boring","Stupid"];
var randomWords = ["Fly","Margot","Stick","stick","Monkey","rats"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomWord = randomWords[Math.floor(Math.random() * 3)];

var randomString = "Your" + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";

console.log(randomString);
var randomBodyParts = ["Face","Nose","Hair"];
var randomAdjectives = ["Smelly","Boring","Stupid"];
var randomWords = ["Fly","Margot","Stick","stick","Monkey","rats"];

var randomString = "your " + pickRandomWord(randomBodyParts) + "is like a" + pickRandomWord(randomAdjective) +
    " " + pickRandomWord(randomWord) + "!!!";
console.log(randomString);
