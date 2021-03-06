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

  // Time O(1)
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

  // Time O(N)
  /** Removes final item from linked list */
  pop() {
    console.log({ hhj: this.head });
    if (this.head === null) this.indexNotFound();
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

  // Time O(1)
  shift() {
    if (this.head === null) this.indexNotFound();
    let oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }

  // Time O(1)
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

  // Time O(N)
  get(index) {
    if (index > this.length) {
      this.indexNotFound();
    }

    let currNode = this.head;
    for (let i = 0; i < index; i++) {
      currNode = currNode.next;
    }
    return currNode;
  }

  // Time O(N)
  set(index, value) {
    const currNode = this.get(index);
    currNode.val = value;
    return currNode;
  }

  // Time O(N)
  /**
   * Insert value at specific index
   * @param {number} index
   * @param {(number|string)} value
   */
  insert(index, value) {
    if (index < 0 || index > this.length) this.indexNotFound();
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    const node = new Node(value);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    prevNode.next = node;
    node.next = nextNode;
    this.length++;
    return node;
  }

  // Time O(N)
  remove(index) {
    if (index < 0 || index >= this.length) this.indexNotFound();
    if (index === 0) return this.shift();
    // index starts at 0 and length is plus 1
    if (index === this.length - 1) return this.pop();
    const prevNode = this.get(index - 1);
    const removeNode = prevNode.next;
    const nextNode = removeNode.next; // gets the removed node's next
    prevNode.next = nextNode;
    removeNode.next = null;
    this.length--;
    return removeNode;
  }

  indexNotFound() {
    throw new Error('the list does not contain that index!!');
  }

  // Time O(N)
  static reverse(node) {
    if (!node) return null;
    let prevNode = null;
    let currNode = node;
    while (currNode.next) {
      // store next item in list
      const nextNode = currNode.next;
      // reassign current items next pointer to previous node
      currNode.next = prevNode;
      // assign for next iteration
      prevNode = currNode;
      // assign next iterations current node to the next in the list
      currNode = nextNode;
    }
    currNode.next = prevNode;

    return currNode;
  }
}

// null <- 2 <- 9 <- 11

const ll = new SinglyLinkedListUdemy();

ll.push(2);
ll.push(9);
ll.push(11);
// console.log(ll.push(5));
// console.log(ll.pop());
// console.log(ll.shift());
// console.log(ll.unshift(99));
// console.log(ll.get(0));
// console.log(ll.get(1));
// console.log(ll.set(0, 11));
// console.log(ll.insert(0, 99));
// console.log(ll.insert(1, 99));
// console.log(ll.pop());
// console.log(ll.pop()); // error
// console.log(ll.remove(2));
console.log(SinglyLinkedListUdemy.reverse(ll.head));
