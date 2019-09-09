/* Write a function that takes 5 arrays of integers and returns a list of integers common to the lists.

Example- input-[1,4,5],[2,3,5],[1,2,5],[2,4,5],[5]

output- [5]

*/


const commonInt = (...args) => {
  let hashTable = {};
  let firstSet = args[0];
  let remainingSets = args.slice(1);
  console.log(remainingSets)
  let result = [];

  for (let int of firstSet) {
    hashTable[int] = 0
  }
 
  remainingSets.forEach((set, index) => {
    for (let int of set) {
      if (hashTable[int] === index) {
        hashTable[int]++
      }
    }
  })

  for (let int in hashTable) {
    if (hashTable[int] === args.length - 1) {
      result.push(int)
    }
  }

  return result;
}

commonInt([1,4,5],[2,3,5],[1,2,5],[2,4,5],[5])
