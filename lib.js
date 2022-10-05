const square = (n) => Math.pow(n, 2);

const fahrenheit = (celsius) => (celsius * 1.8) + 32;

const rectangleArea = (a, b) => a * b;

const isPalindrome = (str) => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');

module.exports = {
    square,
    fahrenheit,
    rectangleArea,
    isPalindrome
}
