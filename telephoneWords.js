/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

let phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


let telephoneWords = (digits, combinations=[], combination="") => {
  // solution1: similar logic to allAnagrams, see allAnagrams.
  
if (digits.length === 0) {    
  combinations.push(combination);
    if(combinations[0] === "") { // if digits === "" return [];
      return []
    }
  return;
}
  let currentNum = digits.slice(0, 1); // first digit
  let currentStr = phoneDigitsToLetters[currentNum]; // string of first digit. i,e "ABC"

  for (let i = 0; i < currentStr.length; i++) {
   
    combination+= currentStr.charAt(i);  
    telephoneWords(digits.slice(1), combinations, combination);
    combination = combination.slice(0, combination.length-1); // slice off the char that is just added, rematch with next char
  }
    
  return combinations 
}

// solution2: faster.
let letterCombinations = digits => {
    //if use array, let map = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let combinations = [];
    let combination = [];
    
    if (digits.length) {
        traverse(0); 
    }
    return combinations;
    
    function traverse(idx) {
        if (idx === digits.length) {
            return combinations.push(combination.join(''));
        }
        
        //let str = map[digits[idx] - '0']; // if use array
        let str = phoneDigitsToLetters[digits[idx]]; // using obj in this case, get string of digit at current idx. 
        
        for (let i = 0; i < str.length; i++) {
            combination.push(str[i]);
            traverse(idx + 1);
            combination.pop();
        }
    }
}

