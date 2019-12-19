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
  //split strings into array by decimal points
    //if whole integer, put 0 at index 1. 

  //compare length for each index, 
    //  unshift 0 in missing spaces to the left for index0. 
    //  push 0 in missing spaces to the right for index1.
  // concat with '.'
  
  //set num1, num2, carry, result
  //iterate from last character
    //if char is '.', result = '.' + result. continue with next iteration
    //add num1 and num2 and carry = sum
    //reset carry = 0 
    //if sum >= 10, carry = 1, sum = sum - 10;
    //if sum > 0, trailingZero is false;
    //if sum === 0 and trailing zero is true, sum = '' and trailingZero = false
    //result = sum + result;

  //if there's remaining carry, append it to the result.
  //return result.

  var arr1 = str1.split('.');
  var arr2 = str2.split('.');
  
  if(arr1.length < 2) {
    arr1.push('0')
  }

  if(arr2.length < 2) {
    arr2.push('0')
  }

  for(var i = 0; i < 2; i++) {
      if(arr1[i].length > arr2[i].length) {
      arr2[i] = padLength(arr1[i], arr2[i], i);
    } else if (arr1[i].length < arr2[i].length){
      arr1[i] = padLength(arr2[i], arr1[i], i);
    }
  }

  var num1 = arr1[0] + '.' + arr1[1];
  var num2 = arr2[0] + '.' + arr2[1];


  var int1, int2, sum, carry = 0, result = '', trailingZero = true;
  for (var i = num1.length-1; i >=0; i--) {
    if(num1[i] === '.') {
      result = '.' + result;
      continue;
    }

    int1 = parseInt(num1[i]);
    int2 = parseInt(num2[i]);
    sum = int1 + int2 + carry;
    carry = 0;

    if(sum >= 10) {
      carry = 1;
      sum = sum - 10;

      
    }
    if(sum > 0) {
        trailingZero = false;
    }

    if(sum === 0 & trailingZero === true) {
      sum = '';
      trailingZero = false;
    } 
    result = sum + result;
  }

  if(carry !== 0) {
    result = carry + result;
  }
  return result;
}

var padLength = function(long, short, index) {
  var zero = ''
  for (var i = 0; i < long.length - short.length; i++) {
    zero+=0;
  }
  if(index === 0 ) {
    short = zero + short
  } else if (index === 1) {
    short = short + zero
  }
  return short;
}


addString( '3.141', '10.090')

addString( '1099.999999999990001', '10000000.000000000000000201000')

