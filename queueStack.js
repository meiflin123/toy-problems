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