class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor(first = null, last = null, length = 0) {
    this.first = first;
    this.last = last;
    this.length = length;
  }

  /** Add new item to end of linked list queue. */
  enqueue(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      const nextNode = this.last;
      nextNode.next = node;
      this.last = node;
    }

    this.length++;
    return this;
  }

  /** Remove item from beginning of linked list queue. */
  dequeue() {
    if (!this.first) throw new Error('Empty list!!!');
    const removeNode = this.first;
    if (removeNode === this.last) {
      this.last = null;
    }
    this.first = this.first.next;

    removeNode.next = null;
    this.length--;
    return removeNode;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
// console.log(queue);
console.log(queue.dequeue());
console.log(queue);
