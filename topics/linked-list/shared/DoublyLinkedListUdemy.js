class Node {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedListUdemy {
  head;
  tail;
  length;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      const oldTail = this.tail;
      this.tail = node;
      oldTail.next = node;
      this.tail.prev = oldTail;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.head === null) throw new Error('list empty');
    let removedNode = this.tail;
    if (this.head === removedNode) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
    }

    removedNode.prev = null;
    this.length--;
    return removedNode;
  }

  shift(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head.prev;
      this.head = node;
    }
    return this;
  }

  unshift() {
    if (this.head === null) throw new Error('list empty');
  }
}

const n1 = new Node(12, null, null);
const ll = new DoublyLinkedListUdemy();
ll.push(99);
ll.push(2);
// console.log(ll.pop());
// console.log(ll.pop());
console.log(ll.shift(1));