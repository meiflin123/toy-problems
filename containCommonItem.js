//Given 2 arrays, create a function that let a user know true/false whether these two arrays contain any common items
//For example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//should return false.

const array1=['a', 'b', 'c', 'x'];
const array2 =['z', 'y', 'a'];
//should return true;


const containsCommonItem = (arr1, arr2) => {
  // time complexity: O(a + b); space complexity: O(a)
  // loop through first array and create object where properties === items in the array

  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if(!map[arr[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exist in created obj
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

// better readibility 
const containsCommonItem2 = (arr1, arr2) => {
  return arr1.some(item => arr2.includes(item));
}

containsCommonItem(array1, array2)