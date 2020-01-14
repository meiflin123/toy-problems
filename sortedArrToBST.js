/*Convert Sorted Array to Binary Search Tree
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5*/


 var sortedArrayToBST = function(nums) {
  //mid of array is the root.
  //left of array is the left subtree. The right is the right subtree.
  // mid of the left is root of subtree... etc
  //recursively.
  if(nums.length <= 0) { return null;}
  var tree = {};
  var midIdx = Math.floor(nums.length / 2);
  tree.val = nums[midIdx];
  var leftSubTree = nums.slice(0, midIdx)
  var rightSubTree = nums.slice(midIdx+1);
  tree.left = sortedArrayToBST(leftSubTree);
  tree.right = sortedArrayToBST(rightSubTree);
  
  return tree;
};