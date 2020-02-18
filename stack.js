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


//implement Stack using array.
class Stack {
  constructor(){
    this.array = [];
  }
  peek() {
    return this.array[this.array.length -1]
  }
  push(value){
    this.array.push(value);
    return this.array;
  }
  pop(){
    this.array.pop();
    return this;
  }
  //isEmpty
}

const myStack = new Stack();

myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek()
myStack.pop();
