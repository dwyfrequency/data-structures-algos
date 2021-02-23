const TreeNode = require('./shared/TreeNode');

/**
 * Pre-order traversal takes the root node first, then left, and finally right.
 * @param {TreeNode} node
 * @returns {number[]}
 */
function preOrderTraversal(node) {
  if (!node) return [];
  return [node.val].concat(
    preOrderTraversal(node.left),
    preOrderTraversal(node.right)
  );
}

/**
 * Post-order traversal takes the left node first, then right, and finally root.
 * @param {TreeNode} node
 * @returns {number[]}
 */
function postOrderTraversal(node) {
  if (!node) return [];
  // if(node.left)
  // return [node.left].concat(
  //   preOrderTraversal(node.right),
  //   preOrderTraversal(node.val)
  // );
}

const node = new TreeNode(
  10,
  new TreeNode(5, new TreeNode(3)),
  new TreeNode(6)
);
// console.log(preOrderTraversal(node)); // [ 10, 5, 3, 6 ]
console.log(postOrderTraversal(node)); // [ 3, 5, 6, 10 ]
