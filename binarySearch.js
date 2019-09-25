//Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

/*Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1*/


const search = function(nums, target) {
   //set low = 0;
   //set high = arr.length-1;

   //while(low <= high)
    // find mid
    //case 1: if mid[val] === target, return index
    //case 2: if mid[val] > target, high = mid -1;
    //case 3: if mid[val] < target, low = mid + 1;

   // not found, return -1
    
  let low = 0; 
  let high = nums.length -1; 
    
  while(low <= high) {
    let mid = Math.floor((low + high)/2);
      if(nums[mid] === target) {return mid}
      if(nums[mid] > target) {
          high = mid-1;
          
      }
      if(nums[mid] < target) {
          low = mid + 1;
      }
  }
    return -1
};