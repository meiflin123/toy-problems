/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. 
 *Deduplicate your return array without using uniq(). and randomly return an anagram, generate all anagrams including substrings. generate substrings with length = given n
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]*/

//let anagrams = [];
let genAnagrams = (string, n = null, anagram ='', anagrams = []) => {
  // loop string, iterate each letter 
  // keep track of anagram
   // concat current letter to anagram
   // recurse genAnagrams again with string without current letter using slice and current anagram. (take the remaining letters and try all combination)
   // when is returned, pop off the last letter of anagram and try the next letter. 
   // until base case
    // if string.length is empty, push current anagram to anagrams. and return. 
   // each time genAnagrams return, drop the last letter from anagram
// time complexity: O(n * n!)  quadratic
  // space complexity : O(n!) - factorial  = numbers of anagrams
  string = string.toUpperCase();
  // print out all the substrings of anagrams
  if (anagram) {
    anagrams.push(anagram);
  }
  if (!string) {
    //anagrams.push(anagram); 
    return;
  }
  for (let i = 0; i < string.length; i++) {
    anagram += string[i];
    genAnagrams(string.slice(0, i) + string.slice(i + 1), n, anagram, anagrams);
    anagram = anagram.slice(0, anagram.length-1);
  }  
  let unique = [...new Set(anagrams)]
  // create hash table, key is len of anagrams, value is array of anagrams.
  // return anagrams with n number of letters.
  let hash = {};
  for (let i = 0; i < unique.length; i++) {
    let word = unique[i];
    let len = word.length; 
    if (!hash[len]) {
      hash[len] = [word]; 
    } else {
      hash[len].push(word);
    }  
  }
  return n === null? unique : hash[n]
  //return unique[Math.floor(Math.random() * unique.length)]
}
console.log(genAnagrams('abc', 2))
