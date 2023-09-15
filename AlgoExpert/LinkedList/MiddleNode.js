//TC: O(N)

// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  exports.LinkedList = LinkedList;
  
  function middleNode(linkedList) {
    // Write your code here.
    let fastPointer = linkedList;
    let slowPointer = linkedList;
    while(fastPointer && fastPointer.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }
    return slowPointer;
  }
  
  // Do not edit the line below.
  exports.middleNode = middleNode;
  

  //Naive solution
  // This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  exports.LinkedList = LinkedList;
  
  function middleNode(linkedList) {
    // Write your code here.
    if(linkedList === null || linkedList.next === null) {
      return linkedList;
    }
    let length = 0;
    let curr = linkedList;
    while(curr) {
      length++;
      curr = curr.next;
    }
    let traverseTill = Math.floor((length / 2))
    curr = linkedList;
    while(traverseTill > 0 && curr !== null){
      curr = curr.next;
      traverseTill--;
    }
    return curr;
  }
  
  // Do not edit the line below.
  exports.middleNode = middleNode;
  