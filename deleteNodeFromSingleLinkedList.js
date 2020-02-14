/*Delete a node from a singly-linked list, ↴ given only a variable pointing to that node.*/

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteNode(nodeToDelete) {

  // Delete the input node from the linked list
  let current = head;
 
  // delete head
  if(head.value === nodeToDelete.value) { 
    //if linkedlist have more than 1 node.
    if(head.next !== null) { 
      head = head.next;
    } 
    //if linkedlist have only 1 node.
    else { throw error }
  } 
  
  // delete from middle and tail.
  while(current.next !== null) {
    if (current.next.value === nodeToDelete.value) {
      current.next = current.next.next;
    }
    current = current.next;
  } 
}


















// Tests

let desc = 'node at beginning';
let head = new LinkedListNode(1);
let nodeToDelete = head;
appendToList(head, 2);
appendToList(head, 3);
appendToList(head, 4);

deleteNode(head);

let node = head;
assertEquals(2, node.value, desc);
node = node.next;
assertEquals(3, node.value, desc);
node = node.next;
assertEquals(4, node.value, desc);
assertEquals(node.next, null, desc);

desc = 'node in middle';
head = new LinkedListNode(1);
nodeToDelete = appendToList(head, 2);
appendToList(head, 3);
appendToList(head, 4);

deleteNode(nodeToDelete);

node = head;
assertEquals(1, node.value, desc);
node = node.next;
assertEquals(3, node.value, desc);
node = node.next;
assertEquals(4, node.value, desc);
assertEquals(node.next, null, desc);

desc = 'node at end';
head = new LinkedListNode(1);
appendToList(head, 2);
appendToList(head, 3);
nodeToDelete = appendToList(head, 4);

assertThrows(() => deleteNode(nodeToDelete), desc);

desc = 'node at end';
head = new LinkedListNode(1);
nodeToDelete = head;

assertThrows(() => deleteNode(nodeToDelete), desc);

function appendToList(head, value) {
  let tail = head;
  while(tail.next) {
    tail = tail.next;
  }
  tail.next = new LinkedListNode(value);
  return tail.next;
}

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrows(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}