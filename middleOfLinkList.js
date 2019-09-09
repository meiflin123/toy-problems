/*A linked list is a data structure which consists of a group of nodes where each node may point to some other node to form a sequence. Our nodes will have two fields: 

(1) a "data" field which will store our data (string, number, etc.)
(2) a "next" field which will be a reference to some other node

Linked lists are useful and simple data structures and are sometimes preferred over using arrays because inserting or deleting elements can be done without reallocation or reorganization of the entire structure. 

If, for example, you wanted to add an element to the beginning of the array, every single other element would need to be moved and the array would need to make space for one extra element. Inserting an element at the beginning of a linked list simply requires you to create a new node and set its "next" field to point to some node, making this new node the first node in the sequence now.*/

/*Naive solution

A simple way to determine the middle node would be to fully pass through all nodes in the linked list and count how many elements there are in total. Then traverse the linked list again this time stopping at the total/2 node. For example, the first time you traverse the linked list your program determines there are 10 nodes, then the second pass through the linked list you stop at the 5th node, which is the middle node. This is a possible solution, but there is a faster way.

Faster solution using 2 pointers*/


//faster solution: 2 pointers

function Node(data, next) {
  this.data = data;
  this.next = next;
}    

// setup some nodes and connect them to each other
// the linked list looks like:
// (head) n5 -> n4 -> n3 -> n2 -> n1 -> null
var n1 = new Node("1", null);   
var n2 = new Node("21", n1); 
var n3 = new Node("Green", n2); 
var n4 = new Node("Blue", n3); 
var n5 = new Node("Yellow", n4); 

// assign a node to the head which functions
// as the entry into our linked list
var head = n5; 

// setup pointers to both start
// at the head of the linked list
var fastPointer = head;
var slowPointer = head;

// loop through the linked list
// when fastPointer reaches the end of the list (next === null)
// then slowPointer will be at the middle node
while (fastPointer.next !== null && fastPointer.next.next !== null) {
  fastPointer = fastPointer.next.next;   
  slowPointer = slowPointer.next;
}

// slowPointer is now at the middle node in the linked list
slowPointer.data  