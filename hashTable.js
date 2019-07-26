/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
let getIndexBelowMaxForKey = function(str, max) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

let makeHashTable = function() {
  let result = {};
  let storage = [];
  let storageLimit = 1000;
  result.insert = function(key, value) {
    let tuple = [key, value]
    let bucketIdx = getIndexBelowMaxForKey(key, storageLimit);
    storage[bucketIdx] = storage[bucketIdx] || [];
    storage[bucketIdx].push(tuple);
  };

  result.retrieve = function(key) {
    let bucketIdx = getIndexBelowMaxForKey(key, storageLimit);
    if (!storage[bucketIdx]) {
      return undefined;
    } 
    let tuples = storage[bucketIdx].filter(tuple => tuple[0] === key);
    if (tuples.length !== 0) {
      return tuples[0][1]
    }
    return undefined;
  };

  result.remove = function(key) {
    let bucketIdx = getIndexBelowMaxForKey(key, storageLimit);
    let filterTarget = storage[bucketIdx].filter(tuple => tuple[0] !== key);
    return filterTarget;
  };

  return result;
};


//test
/*let table = new makeHashTable();
table.insert('oranges', 1);
table.insert('pears', 2);
table.insert('blueberries', 3);
console.log(table.retrieve('oranges'));
console.log(table.retrieve('pears'));
console.log(table.retrieve('blueberries'));
console.log(table.retrieve('sdfsd'));
*/