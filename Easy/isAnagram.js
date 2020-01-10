/*Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false*/
var isAnagram = function(s, t) {
  if(s.length !== t.length) {return false}
  let charTable = {};
  
  for(let ch of s) {
    if(!charTable[ch]) {
      charTable[ch] = 1;
    } else {
      charTable[ch]++
    }
  }
  
  for(let ch of t) {
    if(!charTable[ch]) {
      return false
    }
    charTable[ch]--;
  }
  return true
};