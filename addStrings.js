/*Question: 
Write a function addStrings(string1, string2) that takes in two decimals as strings and returns a string of their sum. *Simply converting strings to numbers and adding them together isn’t acceptable.* The program must be able to handle large decimals.

Be sure to touch on these when solving for the solution:

Pad the right side
Pad the left side
Make sure string is same length by putting 0’s where it was missing (be careful w/ decimal points)
Make sure to remove trailing 0’s
Chunk out each step into it’s own function *NOT REQUIRED BUT CODE LOOKS CLEANER DOING SO*
Please do the solution in either JavaScript or Ruby so that I can understand better.

// let testCase_string1 = '3.92';

// let testCase_string2 = '0.09';

// let testCase2_string1 = '103.00000000909';

// let testCase2_string2 = '0.0000000019101';

// let testCase3_string1 = '1099.999999999990001';

//let testCase3_string2 = '10000000.000000000000000201000';*/


var addString = function(str1, str2){

  //split by decimal points, 
  var arr1 = str1.split('.')
  var arr2 = str2.split('.')
  
  //if whole integer, put 0 at index 1. 
  if(arr1.length < 2) {
    arr1.push('0')
  }

  if(arr2.length < 2) {
    arr2.push('0')
  }

 // pad the short with '0';
 for (var i = 0; i <= 1; i++){
   if(arr1[i].length > arr2[i].length){
     arr2[i] = compareLength(arr1[i], arr2[i], i)
   } else {
     arr1[i] = compareLength(arr2[i], arr1[i], i)
   }
 }
  // concat with '.'
  arr1 = arr1.join('.');
  arr2 = arr2.join('.');
  

  // sum would be numbers at the same index add up, plus possible carry from previous iteration. 
  let result = '', sum = 0, carry = 0, trailingZero = true;;
  for(var i = arr1.length -1; i >= 0; i--) {

    if(arr1[i] === '.') {  
      if (result.length === 0) { 
        trailingZero = false;
        continue;
      }
      result = '.' + result;
      continue;
    }
    // sum = num1 + num2 + carry from last iteration. 
    sum = parseInt(arr1[i]) + parseInt(arr2[i]) + carry;
    carry = 0;
    
    // if sum >= 10, carry = 1 for next iteration. 
    if(sum >= 10) {
      carry = 1; 
      sum = sum - 10;
    }

    // if sum is nonZero, turn off trailingZero.
    if(sum !== 0) {
      trailingZero = false;
    }
    
    // if sum is 0 and yet no nonzeros, sum = ''; 
    if(sum === 0 & trailingZero === true) {
      sum = '';
    } 

    result = sum + result;
  }
  if(carry != 0) {
    result = carry + result;
  }
  return result;
}


var compareLength = (long, short, idx) => {
  var zero = '';
  for(var i = 0; i < long.length - short.length; i++) {
      zero+= '0'
  }
  if(idx === 0) {
      short = zero + short;
  } else {
      short = short + zero;
  }
  return short;
}


addString('120.08', '10.9900')