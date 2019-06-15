/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



let commonCharacters = function(...args) {
  // criteria: 
      //1.use hash table to store ch and keep track of its last occurance/index 
      //2. not apply to duplication, "bella","label","roller" would return ['e', 'l'] instead of ['e', 'l', 'l']
  
  // create a hash table and keys equal to ch in first string, value = index 0
  // iterate remaining arguments, for each str, if ch in obj === index, ++

  let commonCh = '';
  let firstArr = args[0].split('')
  
  let hashTable = firstArr.reduce(function(obj, ch){
    if (!obj[ch]) {
      obj[ch] = 0; 
    }
    return obj
  }, {})
  
  let otherArrs = Array.prototype.slice.call(arguments, 1);
  otherArrs.forEach(function(arr, index) {
    for (let i of arr) {
      if (hashTable[i] === index) {
        hashTable[i]++
      }
    }
  })
  
  let result = [];
  for (let ch in hashTable) {
    if (hashTable[ch] === args.length -1) {
      result.push(ch)
    }
  }
            
  return result
  
};


//console.log(commonCharacters("bella","label","roller"))



/*Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list 
(including duplicates). ["bella","label","roller"] returns ['e', 'l', 'l']
*/

let commonChars = function(array) {
  
  // slice first string off 
   // filter first string, for loop remaining strings, in each iteration, 
    // if ch in first string is found in the iterating string. keep.
    let firstStr = array[0].split('');
    array = array.slice(1);
    for(let word of array) {
        let current = word.split('');
        
        firstStr = firstStr.filter(ch => {
            const idx = current.indexOf(ch);
            // if the char has been found, set it a value so it doesnt get discovered again
            if (idx > -1) {
                current[idx] = 'found';
                return true;
            }
            
            return false;
        });
    }
    
    return firstStr;
};

//console.log(commonChars(["bella","label","roller"]))

