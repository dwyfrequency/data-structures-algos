class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedListUdemy {
  head = null;
  tail = null;
  length = 0;

  /**
   * Add item to linked list
   * @param {( number | string )} val
   */
  push(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    // this is the list itself
    return this;
  }

  /** Removes final item from linked list */
  pop() {
    console.log({ hhj: this.head });
    if (this.head === null) throw new Error('the list is empty!!');
    let oldTail;
    if (this.head === this.tail) {
      oldTail = this.tail;
      this.head = null;
      this.tail = null;
    }

    let currNode = this.head;
    while (currNode) {
      if (currNode.next === this.tail) {
        oldTail = currNode;
        this.tail = currNode;
        this.tail.next = null;
        break;
      }
      currNode = currNode.next;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if (this.head === null) throw new Error('the list is empty!!');
    let oldHead = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
    }
    oldHead.next = null;
    return oldHead;
  }
}

const ll = new SinglyLinkedListUdemy();

ll.push(2);
console.log(ll.push(5));
// console.log(ll.pop());
console.log(ll.shift());

// console.log(ll.pop());
// console.log(ll.pop()); // error
