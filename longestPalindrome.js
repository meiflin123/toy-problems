/** two solutions: dynamic programing and expand from center.
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/


let longestPalindrome = function (string) {
  // solution1:
  // double for loop i and j, i < j
  // if two characters are the same, slice the substring, check if it's parlindrome and if it's longer than stored parlindrome
  // output parlindrome. 

  // time complexity: O(n^2)
  // space complexity: O(n^2);
  if(string.length === 0) { return ''}
  let result = ''
  for(let j = 1; j < string.length; j++) {
    for(let i = 0; i < j; i++) {
      if(string[i] === string[j]) {
        let sub = string.slice(i, j+1);
        if(isPalindrome(sub) && sub.length > result.length) {
          result = sub;
        }
      }
    }
  }
  return result || string[0];
};

let isPalindrome = (string) => {
  let newStr = string.split('').reverse().join('')
  return newStr === string

}

let centeredLongestP = string => {
  // solution 2: expand from center
  // for loop 
    // pass i, i+1 ch to expandCenter. 
      // if they are equal, expand left and right.  case: noon
    // pass i, i + 2 ch to expandCenter. case: dad
      // if they are equal, expand left and right.  case: noon
  // time complexity: O(n^2)
  // space complexity: O(1)
  
  
  if (string.length === 0) { return ''};
  
  let result = ''
  for (let i = 0; i < string.length -1; i++) {
    
    let evenPal = expandCenterP(i, i+1, string)
    let oddPal = expandCenterP(i, i+2, string)

    if (evenPal.length > result.length) {
      result = evenPal
    } 
    if (oddPal.length > result.length) {
      result = oddPal
    }
  }  
  return result || string[0]
}

let expandCenterP = (left, right, string) => {
  // while left and right are equal, 
  // expand left and right
  while ( left >= 0 && right < string.length && string[left] === string[right]) {
    left--
    right++        
  }
  return string.slice(left + 1, right) 
}