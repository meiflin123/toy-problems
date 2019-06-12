/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

const deepEquals = (item1, item2) => {
  if (item1 === item2) {return true};
  
  if (!(item1 instanceof Object) || !(item2 instanceof Object)) {return false};
  // note the difference between above and 
 // if (!item1 instanceof Object || !item2 instanceof Object) {return false};
  
  if (Object.keys(item1).length !== Object.keys(item2).length) {return false};
  
  for (let key in item1) {
    
    if (!deepEquals(item1[key], item2[key])) {return false}
  }
  return true;

}


console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:3}}))