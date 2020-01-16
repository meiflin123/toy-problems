/*Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
Example 1:

Input: "A"
Output: 1
Example 2:

Input: "AB"
Output: 28
Example 3:

Input: "ZY"
Output: 701*/

const titleToNumber = function(s) {
  const baseUnicode = 'A'.charCodeAt(0) - 1; // ex: A = 1 = 65-64.  B = 2 = 66-64.
  let columnNum = 0;
  const n = s.length;
    
  for (let i = 0; i < s.length; i++) {
    //base 26. 'AB' = 26^1 + 2, 'CDA' = 3*26*26 + 4*26 + 1
    columnNum += (s.charCodeAt(i) - baseUnicode) * Math.pow(26, n-i-1)   }
  return columnNum
};