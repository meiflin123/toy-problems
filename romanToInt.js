/*Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Example 1:

Input: "III"
Output: 3
Example 2:

Input: "IV"
Output: 4
Example 3:

Input: "IX"
Output: 9
Example 4:

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.*/

var romanToInt = function(s) {
  var hashtable = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
    var result = hashtable[s[s.length-1]];
    for(let i = s.length-1; i>=0; i--) {
      var curr = hashtable[s[i]]
      var pre = hashtable[s[i-1]];
      console.log(curr, pre, curr >= pre, result)
      if(curr > pre ) {
        result -= pre
      } else if(curr <= pre){
        result += pre
      } 
    }
    return result;
};