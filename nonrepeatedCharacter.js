/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

let firstNonRepeatedCharacter = function(string) {
  // loop through string, add ch to table with value of true, if existed, value false.
  // loop through string, iterate eah ch, if ch in hash table is true, return ch
  // if nothing, return false

  let hashTable = {};
  for (let i of string) {
    if (!hashTable[i]) {
      hashTable[i] = 'T';
    } else {
      hashTable[i] = 'F'
    }
  }

  for (let i of string) {
    if (hashTable[i] === 'T') {
      return i
    }
  }

  return null;
};