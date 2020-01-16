/*Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.*/


var isValidBST = function(root) {
    // set lower bound -infinite and upper bound infinite on first root node
    // all left nodes should not exceed its parent node(set max) -- if not, false
    // all right nodes should greater than its parent nodes(set min) -- if not, false

  function helper(root, min, max) {
       if(!root) {return true}
        if ((min !== null && root.val <= min) || (max!== null && root.val >= max)) {
            return false; 
        }
      
        return helper(root.left, min, root.val) && helper(root.right, root.val, max);
    }
  return helper(root, null, null);
};
isValidBST({
  val: 5,
  right:
  {
     val: 6,
     right: { val: 7, right: null, left: null },
     left: { val: 3, right: null, left: null } },
  left: { val: 1, right: null, left: null } })