/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  var storage = {};
  var count = 0;

  // add an item to the top of the stack
  this.push = function(item) {
    storage[count] = item;
    count++;
  };

  // remove an item from the top of the stack
  this.pop = function() {
    if (count === 0) {
      return undefined;
    }
    var temp = storage[count - 1];
    delete storage[count -1];
    count--;
    return temp;
  };

  // return the number of items in the stack
  this.size = function() {
    return count; 
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(item) {
    // TODO: implement `enqueue`
    for (var i = 0; i < outbox.size(); i++) {
      inbox.push(outbox.pop());   // insert items into inbox and empty outbox
    }
    return inbox.push(item);
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    // TODO: implement `dequeue`
    // remove first item;
    // reorder stack
    var size = inbox.size();
    for (var i =0; i < size; i++) {
      outbox.push(inbox.pop());
    }
    return outbox.pop();
  };

  // should return the number of items in the queue
  this.size = function() {
    // TODO: implement `size`
    return inbox.size() + outbox.size();
  };
};

/* Build stack using LinkedList*/
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    if(this.top !== null) {
      return this.top.value
    }
    return this.top
  }
  push(value){
    var val = new Node(value);
  
    if(this.length === 0) {
      this.top = val;
      this.bottom = val;
    } else {
      this.bottom.next = val;
      this.bottom = val;
    }
    this.length++
    return this;
  }

  pop(){
    var current = this.top;
    this.length--
    if(current.next === null) {
      this.top = null;
      return;
    }
    while(current.next !== null) {
      if(current.next.next === null){
        current.next = null;
        this.bottom = current;
      };
    }
    return this;
  }
}

const myStack = new Stack();
myStack.push('Discord')
myStack.push('leetcode')
myStack.pop()
myStack.pop()
myStack.push('google')
myStack.push('apple')
