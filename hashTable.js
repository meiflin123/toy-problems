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
    let bucketIdx = getIndexBelowMaxForKey(key, storageLimit);
    storage[bucketIdx] = storage[bucketIdx] || [];


    // if key already exist, reassign value. 
    for (let i = 0; i < storage[bucketIdx].length; i++) {
        let tuple = storage[bucketIdx][i];
        if (tuple[0] === key) {
          tuple[1] = value;
          return;
        };
      };

    // else, insert new key-value pair.
    storage[bucketIdx].push([key, value]);
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
     //use splice n filter to detect all elements from start to end of array, add the elements that passed the filter function to the array.
    //storage[bucketIdx].splice(0, storage[bucketIdx].length,...storage[bucketIdx].filter(tuple => tuple[0] !== key));

    //or use for loop n splice.
    for (var i = 0; i < storage[bucketIdx].length; i++) {
      var tuple = storage[bucketIdx][i];
      if (tuple[0] === key) {
        storage[bucketIdx].splice(i, 1);
      };
    };

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