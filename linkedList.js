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

LinkedList.prototype.makeNode = function(num) {
  return { value: num, next: null};
};

var list = new LinkedList();
