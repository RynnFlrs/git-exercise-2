const { square, fahrenheit, rectangleArea, isPalindrome } = require('./lib');

console.log(`The square of number 11 is ${square(11)}
The Fahrenheit value of 11 degree celsius is ${fahrenheit(11)}
A length with 5, and width with 10, has a Rectangle Area of ${rectangleArea(
  5,
  10
)}
The word "SiteMinder" is a Palindrome ? ${isPalindrome('SiteMinder')}
The word "Wow" is a Palindrome ? ${isPalindrome('Wow')}`);
