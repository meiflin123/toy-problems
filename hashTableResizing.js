/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1


var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  
  result.insert = function(key, value) {
    size++

    // if tuples size greater than 3/4 of the storage limit, double storageLimit and rehash each key. 
    if (size > (3/4) * storageLimit) {
      storageLimit = storageLimit * 2;
      this.rehash();
    } 
    
    // if utilization drops below 1/4, half the current storageLimit and rehash each key
    if(size < (1/4) * storageLimit) {
      storageLimit = storageLimit / 2;
      this.rehash();
      
    }
    this.hash(storage, getIndexBelowMaxForKey, key, value, storageLimit);
    
  };

  result.rehash = function() {
    var newStorage = [];
      for (var bucket of storage) {   // iterate over buckets in storage
        for (var tuple of bucket || []) {    //iterate each tuple or iterate 
          var tupleKey = tuple[0];     // get key in tuple
          var tupleVal = tuple[1];
          this.hash(newStorage, getIndexBelowMaxForKey, tupleKey, tupleVal, storageLimit); // rehash key
        }   
      }
      // update storage.
      storage = newStorage
  }

  result.hash = function(storage, getIndexBelowMaxForKey, key, value, storageLimit) {
    var bucketIdx = getIndexBelowMaxForKey(key, storageLimit);
    storage[bucketIdx] = storage[bucketIdx] || [];

    // if key already exist, reassign value. 
    for (var i = 0; i < storage[bucketIdx].length; i++) {
        if (storage[bucketIdx][i][0] === key) {
          storage[bucketIdx][i][1] = value;
          return;
        };
      };

    // else, insert new key-value pair.
    storage[bucketIdx].push([key, value]);

  }

  result.retrieve = function(key) {
    var bucketIdx = getIndexBelowMaxForKey(key, storageLimit);
    if (!storage[bucketIdx]) {
      return undefined;
    } 
    var tuples = storage[bucketIdx].filter(tuple => tuple[0] === key);
    if (tuples.length !== 0) {
      return tuples[0][1]
    }
    return undefined;
  };

  result.remove = function(key) {
    var bucketIdx = getIndexBelowMaxForKey(key, storageLimit);

    //detect all elements from start to end of array, add the elements that passed the filter function to the array.
    storage[bucketIdx].splice(0, storage[bucketIdx].length,...storage[bucketIdx].filter(tuple => tuple[0] !== key));
    console.log(key, bucketIdx, storageLimit, storage)

  };

  return result;
};

//test

/*var table = new makeHashTable();
table.insert('cat', 'feisty');
table.insert('fox', 'quick');
table.insert('dog', 'happy');
table.insert('bird', 'fly');
table.insert('fish', 'red');
table.remove('bird');
table.insert('groot', 'plant')
table.insert('apple', 'tasty')
table.insert('pineapple','sweet');
table.insert('chips', 'seasalt');
console.log(table.retrieve('chips'));
console.log(table.retrieve('pineapple'));
table.remove('pineapple');
table.remove('cat')
table.insert('cat')
console.log(table.retrieve('sdfsd'));
*/