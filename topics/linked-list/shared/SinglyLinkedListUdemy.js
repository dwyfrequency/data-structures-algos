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
    this.length++;
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
    this.head = oldHead.next;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index > this.length) {
      throw new Error('the list does not contain that index!!');
    }

    let currNode = this.head;
    for (let i = 0; i < index; i++) {
      currNode = currNode.next;
    }
    return currNode;
  }

  set(index, value) {
    const currNode = this.get(index);
    currNode.val = value;
    return currNode;
  }
}

const ll = new SinglyLinkedListUdemy();

ll.push(2);
ll.push(9);
// console.log(ll.push(5));
// console.log(ll.pop());
// console.log(ll.shift());
// console.log(ll.unshift(99));
// console.log(ll.get(0));
// console.log(ll.get(1));
console.log(ll.set(0, 11));

// console.log(ll.pop());
// console.log(ll.pop()); // error
