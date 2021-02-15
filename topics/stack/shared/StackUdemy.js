class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class StackUdemy {
  head;

  /** @param {Node} head */
  constructor(head) {
    this.head = head;
  }

  /** @param {(string | number)} val */
  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return node;
  }

  pop() {
    if (!this.head) throw new Error('Empty stack!');
    const removeNode = this.head;
    this.head = removeNode.next;
    return this._removeReferences(removeNode);
  }

  _removeReferences(node) {
    node.next = null;
    return node;
  }
}

const stack = new StackUdemy();
stack.push(1);
stack.push(3);

console.log(stack);
console.log(stack.pop());
