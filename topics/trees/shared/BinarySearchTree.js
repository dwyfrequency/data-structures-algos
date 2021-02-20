const TreeNode = require('./TreeNode');

class BinarySearchTree {
  root = null;

  insert(val) {
    const node = new TreeNode(val);
    if (!this.root) {
      this.root = node;
    } else {
      // iterate until we hit the branch where our new node belongs
      let prevNode = null;
      let currNode = this.root;
      while (currNode) {
        prevNode = currNode;
        if (val === currNode) return this; // can't have duplicates
        if (val > currNode.val) currNode = currNode.right;
        else currNode = currNode.left;
      }
      // assign new node to the proper branch of the local root
      val > prevNode.val ? (prevNode.right = node) : (prevNode.left = node);
    }
    return this;
  }

  search(val) {
    if (!this.root) return null;
    let currNode = this.root;
    while (currNode) {
      if (val === currNode.val) return currNode;
      if (val > currNode.val) currNode = currNode.right;
      else currNode = currNode.left;
    }
    return null;
  }
}

const bst = new BinarySearchTree();
bst.insert(6);
bst.insert(9);
bst.insert(7);
// bst.insert(8);
// console.log(bst.root);
console.log(bst.search(9));
