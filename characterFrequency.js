/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


let characterFrequency = function(string) {
  // create hash table.
  // loop through string, iterate over each character
  // if current character is not in hash table, add it to the table
  // if already in hash table, value++

  //convert an Object {} to an Array [] of key-value pairs

  // sort the array from largest frequency to smallest frequency
  // sort array in alphabetic order.
  
  
  let hashTable = {};
  
  for (let i of string) {
   // note difference between for... of and for... in
    if (!hashTable[i]) {
      hashTable[i] = 1;
    } else {
      hashTable[i] +=1; 
    }
  }
  //convert an Object {} to an Array [] of key-value pairs
  let result = Object.keys(hashTable).map(ch => [ch, hashTable[ch]])
                                                
                                                 
  result.sort((a, b) => b[1]-a[1])
        .sort((a, b) => {
    
    // if a[0] > b[0], return more than 1 = swap., to make b[0] comes first. 
    if (a[1] === b[1]) {
      if (a[0] < b[0]) {
        return -1;
      } else if(a[0] > b[0]){
        return 1;
      }
   }
  })
};


console.log(characterFrequency('Mmiaaiaaippi')) 