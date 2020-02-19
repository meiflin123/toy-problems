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
  //peek the top
  peek() {
    if(this.top !== null) {
      return this.top.value
    }
    return this.top
  }
  // push onto the top. 
  push(value){
    var val = new Node(value);
  
    if(this.length === 0) {
      this.top = val;
      this.bottom = val;
    } else {
      const current = this.top;
      val.next = current;
      this.top = val;
    }
    this.length++
    return this;
  }
  
  //pop from the top.
  pop(){

    if(this.length === 1) {
      this.top = this.bottom;
    } else {
      this.top = this.top.next;
    }
    this.length--;
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
