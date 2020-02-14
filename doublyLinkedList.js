class doublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      previous: null
    }
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.head.previous = newNode;
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
      next: null,
      previous: null
    }
    const leader = this.traverseToIndex(index-1);
    const follower = leader.next;
    follower.previous = newNode;
    newNode.next = follower;
    newNode.previous = leader;
    leader.next = newNode;
  
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
    // Check Parameters      
    const leader = this.traverseToIndex(index-1);
    leader.next.next.previous = leader;
    leader.next = leader.next.next;
    
    this.length--;
    return this.printList();
  }
}

let linkedList = new doublyLinkedList(10);
linkedList.append(5);
linkedList.append(16);linkedList.prepend(1);
linkedList.insert(2, 99);
linkedList.insert(20, 88);
linkedList.remove(2);





