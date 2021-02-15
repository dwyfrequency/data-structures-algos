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

  shift() {
    if (this.head === null) throw new Error('list empty');
    const removeNode = this.head;
    if (removeNode === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removeNode.next;
      this.head.prev = null;
    }

    removeNode.next = null;
    this.length--;
    return removeNode;
  }

  unshift(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head.prev;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) throw new Error(`No idx: ${index}`);
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    /** @type {number} currCnt */
    let currCnt;
    /** @type {Node} currNode */
    let currNode;
    if (index > Math.floor(this.length / 2)) {
      currCnt = this.length - 1;
      currNode = this.tail;
      while (currCnt !== index) {
        currNode = currNode.prev;
        currCnt--;
      }
    } else {
      currCnt = 0;
      currNode = this.head;
      while (currCnt !== index) {
        currNode = currNode.next;
        currCnt++;
      }
    }
    return currNode;
  }

  set(index, val) {
    const node = this.get(index);
    node.val = val;
    return node;
  }

  insert(index, val) {
    if (index === this.length) this.push(val);
    if (index === 0) this.unshift(val);
    const originalNode = this.get(index);
    const newNode = new Node(val, originalNode.prev, originalNode);
    originalNode.prev.next = newNode;
    originalNode.prev = newNode;

    this.length++;
    return newNode;
  }

  remove(index) {
    if (index < 0 || index >= this.length) throw new Error(`No idx: ${index}`);
    if (index === this.length - 1) this.pop();
    if (index === 0) this.shift();

    const prevNode = this.get(index - 1);
    const removeNode = prevNode.next;
    const tailNode = removeNode.next;
    prevNode.next = tailNode;
    tailNode.prev = prevNode;

    this.length--;
    return this._removeReferences(removeNode);
  }

  _removeReferences(node) {
    node.next = null;
    node.prev = null;
    return node;
  }

  static swapPointers(node) {
    const newPrev = node.next;
    node.next = node.prev;
    node.prev = newPrev;
    return node;
  }

  /**
   *
   * @param {Node} node
   */
  static reverse(node) {
    let currNode = node;
    while (currNode.next) {
      const nextNode = currNode.next;
      currNode = DoublyLinkedListUdemy.swapPointers(currNode);
      currNode = nextNode;
    }
    return DoublyLinkedListUdemy.swapPointers(currNode);
  }
}

const n1 = new Node(12, null, null);
const ll = new DoublyLinkedListUdemy();
ll.push(99);
ll.push(2);
ll.push(87);
ll.push(32);
ll.push(54);
// ll.insert(2, 77);
// console.log(ll.get(1));
console.log(DoublyLinkedListUdemy.reverse(ll.get(0)));
