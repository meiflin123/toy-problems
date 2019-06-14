/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRepeatedCh("abbbcc") // [1, 3]
 *   longestRepeatedCh("aabbc")  // [0, 1]
 *   longestRepeatedCh("abcd")   // [0, 0]
 *   longestRepeatedCh("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

let longestRepeatedCh = string =>{
  // create variables longest = [0, 0] and current = [0, 0]
  // iterate over string, 
    // if ch at i equal to ch at i +1
      //change current[1] to i 
      // if current > longest, update longest.
   // else, check from ch at next index 
  // return longest

  let longest = [0, 0];
  let current = [0, 0];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i+1] ) {
      current[1] = i+1;
      if (current[1] - current[0] > longest[1] - longest[0]) {
        longest = current
      } 
    } else {
      current = [i+1, i+1]
    }
  }
   return string.length >0? longest: null;

};
// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};