/** two solutions: dynamic programing and expand from center.
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/


let DPlongestPalindrome = string => {
  //solution 1:dynamic programing
  //criteria1: ch at i === ch at j 
  //criteria2: substring inside a palindrome should be palindrome || one single ch 
  // if found palindrome, compare to length of existing palindrome 
  // time complexity: O(n^2)
  // space complexity: O(n^2)

  if (string === null || string.length < 1) { return null}
  if (string.length ===1) {return string};
  
  let start = 0;
  let end = 0; 
  
  for (var j = 1; j < string.length; j++) {
    for (var i = 0; i < j; i++) {
      if (string[i] === string[j]) {
        let substring = string.slice(i+1, j);
        
        if (isPalindrome(substring) || j-i <3) {
         
          if (j-i > end-start) {
            start = i
            end = j          
          }         
        }   
      } 
    }
  }
  
  return string.slice(start, end+1)
};
  
let isPalindrome = string => {
  let reverseStr = string.split('').reverse().join('');
  return reverseStr === string;
}

let centeredLongestP = string => {
  // solution 2: expand from center
  // loop over each ch, 
    //pass two neighbored ch to expandCenter P. case: noon
    // pass index -1, index +1 to expandCenter P. case: dad
  // time complexity: O(n^2)
  // space complexity: O(1)
  
  if (string === null) {return null};
  if (string.length === 1) { return string};
  
  let result = ''
  for (let i = 0; i < string.length -1; i++) {
    
    let evenPal = expandCenterP(i, i+1, string)
    let oddPal = expandCenterP(i-1, i+1, string)

    if (evenPal.length > result.length) {
      result = evenPal
    } 
    if (oddPal.length > result.length) {
      result = oddPal
    }
  }  
  return result
}

let expandCenterP = (left, right, string) => {
  // criteria:  left ch and right ch are equal, 
    // expand in each direction
    // new left and new right should be also equal if Palindrome
  while ( left >= 0 && right < string.length && string[left] === string[right]) {
    left--
    right++        
  }
  return string.slice(left + 1, right) 
}