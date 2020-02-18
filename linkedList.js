/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


var LinkedList = function() {
    this.head = {value: null, next: null};
    this.tail = {value: null, next: null};
};

//write methods here!


LinkedList.prototype.addToTail = function(num) {
  var node = this.makeNode(num);
  if (this.tail.value === null) {
    this.tail = node
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  if (this.head.value === null) {
    
    this.head = node
  } 
};

LinkedList.prototype.removeHead = function() {
  
  if (this.head.next === null) {
    this.head.value = null;
    return null
  } 
  
  this.head = this.head.next

};

LinkedList.prototype.contains = function(num) {
  var current = this.head 
  while (current) {
    if (current.value === num ) {
      return console.log(true)
    } else {
      current = current.next
    }
   
  
  }
  return console.log(false);
}

LinkedList.prototype.printList = function() {
  var current = this.head;
  var str = ''
  while (current) {
    str+= current.value + ' ';
    current = current.next
  }
  console.log(str)
}

LinkedList.prototype.makeNode = function(num) {
  return { value: num, next: null};
};

var list = new LinkedList();




// create linklist class.
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value){
    //Check for proper parameters;
    if(index >= this.length) {
      console.log('yes')
      return this.append(value);
    }
    
    const newNode = {
      value: value,
      next: null
    }
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    if(index === 0) {
      this.head = this.head.next;
      return this.printList()
    }

    const leader = this.traverseToIndex(index - 1);
    leader.next = leader.next.next;
    return this.printList();
  }
   reverse() { 

    if(!this.head.next) {
      return this;
    }
    var current = this.head;
    var previous = null;
    var next = null;
    
    while(current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    return previous
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);

myLinkedList.remove(2)
myLinkedList.remove(2)
myLinkedList.reverse()