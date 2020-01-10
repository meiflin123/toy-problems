/*Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

var moveZeroes = function(nums) {
  //time: O(n)
  //space: O(1);
  let lastNonZeroFoundAt = 0;
  
  //push all non zeros to the front. 
  nums.forEach((num) =>{
    if(num !== 0) {
      nums[lastNonZeroFoundAt++] = num;
    }
  })
  
  //fill the remaining array with 0's.
  for(let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};