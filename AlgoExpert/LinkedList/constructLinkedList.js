// This is an input class. Do not edit.
class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  // Feel free to add new properties and methods to the class.
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    
  
    setHead(node) {
      // Write your code here.
      if (this.head == null) {
        this.head = node;
        this.tail = node;
        return;
      }
      return this.insertBefore(this.head, node);
    }
  
    setTail(node) {
      // Write your code here.
      if (this.tail == null) {
        this.setHead(node)
        return;
      }
      this.insertAfter(this.tail, node);
    }
  
    insertBefore(node, nodeToInsert) {
      // if nodeToInsert is itself head and tail i.e. the only node in LL. We cant do anything for that.
      if(this.head === nodeToInsert && this.tail === nodeToInsert) {
        return;
      }
      this.remove(nodeToInsert);
      nodeToInsert.prev = node.prev;
      nodeToInsert.next = node;
      // It means we are adding a node at beginning
      if(node.prev == null) {
        this.head = nodeToInsert;
      } else {
        node.prev.next = nodeToInsert;
      }
      node.prev = nodeToInsert;
      
      
    }
  
    insertAfter(node, nodeToInsert) {
      // if nodeToInsert is itself head and tail i.e. the only node in LL. We cant do anything for that.
      if(this.head === nodeToInsert && this.tail === nodeToInsert) {
        return;
      }
      this.remove(nodeToInsert);
      nodeToInsert.prev = node;
      nodeToInsert.next = node.next;
      // It means we are adding a node at end
      if(node.next == null) {
        this.tail = nodeToInsert;
      } else {
        node.next.prev = nodeToInsert;
      }
      node.next = nodeToInsert;
    }
  
    insertAtPosition(position, nodeToInsert) {
      if (position === 1) {
        this.setHead(nodeToInsert);
        return;
      }
      let node = this.head;
      let currentPos = 1;
      while(node !== null && currentPos !== position) {
        node = node.next;
        currentPos += 1;
      }
      if(node !== null) {
        this.insertBefore(node, nodeToInsert);
      } else {
        this.setTail(nodeToInsert);
      }
    }
  
    removeNodesWithValue(value) {
      // Write your code here.
      let node = this.head;
      while(node !== null) {
        let nodetoRemove = node;
        node = node.next;
        if(nodetoRemove.value === value) {
          this.remove(nodetoRemove);
        }
      }
      
    }
  
    remove(node) {
      // Write your code here.
      if(this.head === node) {
        this.head = this.head.next;
      }
  
      if(this.tail === node) {
        this.tail = this.tail.prev;
      }
      
      if(node.prev != null) {
        node.prev.next = node.next;
      } 
      if(node.next != null) {
        node.next.prev = node.prev;
      }
      node.next = null;
      node.prev = null;
    }
  
    containsNodeWithValue(value) {
      // Write your code here.
      let curr = this.head;
      while(curr != null) {
        if(curr.value === value) {
          return true;
        }
        curr = curr.next;
      }
      return false;
    }
  }
  
  // Do not edit the lines below.
  exports.Node = Node;
  exports.DoublyLinkedList = DoublyLinkedList;
  