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
  pop() {}
  shift(val) {}
  unshift() {}
}

const n1 = new Node(12, null, null);
const ll = new DoublyLinkedListUdemy();
ll.push(99);
console.log(ll.push(2));
