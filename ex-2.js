//Exercise 2: Valid Palindrome

const isPalindrome = function (s) {
  //Start Coding here
  let cleanString = "";
  for (let i = 0; i < s.length; i++) {
    let char = s[i].toLowerCase();
    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      cleanString = cleanString + char;
    }
  }
  return cleanString.split("").reverse().join("") === cleanString;
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
