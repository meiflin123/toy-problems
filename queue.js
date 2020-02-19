class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  //enqueue to this.last
  enqueue(value){
    const newNode = new Node(value);
    if(this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  
  // dequeue from the first.
  dequeue(){
    if(this.length > 1) {
      this.length--
      this.first = this.first.next;
    } 

    else if(this.length === 1) {
      this.length--
      this.first = this.last = null;
    } 
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt')
myQueue.dequeue()
myQueue.dequeue();
myQueue.peek();


//Joy
//Matt
//Pavel
//Samir

