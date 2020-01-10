/*Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL*/

//iterative: time: O(n), space O(1)
var reverseList = function(head) {
  //get reference of remaining next nodes before changing current node.
  //update curr.next to previous node.

  //prepare for next iteration:
    //update prev node to curr node.
    //update curr to the nextnodes.
  
  let prev = null;
  let curr = head;
  while(curr!== null) {
    let recordNext = curr.next;
    curr.next = prev
    prev = curr;
    curr = recordNext;
  }
  return prev

};

 //recursive: time and space O(n)
var reverseList = function(head) {
  //built from tail
  //each time back from recursion stack, 
    //get q
    //set q be before current
    //set curr

  let curr = head;
  if(curr === null || curr.next === null) {
    return head;
  }
  
  result = reverseList(curr.next);
  q = curr.next
  q.next = curr
  curr.next = null;
  return result;
};