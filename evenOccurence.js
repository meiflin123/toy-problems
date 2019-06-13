/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

let evenOccurrence = function(arr) {
  // create hash table
  // loop arr
    // store each item into hash table, keep count 
  // loop arr
    // if current item in hash table is even, return item
  // if nothing, return null
  
  let hashTable = {};
  
  for (let num of arr) {
    if (!hashTable.hasOwnProperty(num)) {
    //if (!hashTable[num]) {
      hashTable[num] = 1
    } else {
      hashTable[num] +=1
    }
  }
  
  
  
  for (let num of arr) {
    let current = hashTable[num]
    if (current % 2 === 0) {return num}
  }
  
 
  return null
                

};

console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]))

