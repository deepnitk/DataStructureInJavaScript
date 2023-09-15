// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeKthNodeFromEnd(head, k) {
    // Traverse the linked list with multiple pointers.
    let firstPointer = head;
    let secondPointer = head;
    let counter = 1;
    while(counter <= k) {
      secondPointer = secondPointer.next;
      counter += 1;
    }
    if(secondPointer == null) {
      head.value = head.next.value;
      head.next = head.next.next;
      return;
    }
    // While second is not null
    while(secondPointer.next != null) {
      secondPointer = secondPointer.next;
      firstPointer = firstPointer.next;
    }
    //first is pointing to the node right before the node we want to remove
    //first.next = NODE_TO_REMOVE
    //first.next.next = node_to_Remove.next
    firstPointer.next = firstPointer.next.next;
  }
  
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
  