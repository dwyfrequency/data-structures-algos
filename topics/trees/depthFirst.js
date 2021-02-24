const TreeNode = require('./shared/TreeNode');

/**
 * Pre-order traversal takes the root node first, then left, and finally right.
 * @param {TreeNode} node
 * @returns {number[]}
 */
function preOrderTraversal(node) {
  if (!node) return [];
  return [].concat(
    node.val,
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
  return [].concat(
    postOrderTraversal(node.left),
    postOrderTraversal(node.right),
    node.val
  );
}

/**
 * In-order traversal takes the left node first, then root, and finally right.
 * @param {TreeNode} node
 * @returns {number[]}
 */
function inOrderTraversal(node) {
  if (!node) return [];
  return [].concat(
    inOrderTraversal(node.left),
    node.val,
    inOrderTraversal(node.right)
  );
}

const node = new TreeNode(
  10,
  new TreeNode(5, new TreeNode(3)),
  new TreeNode(11, null, new TreeNode(14))
);
// console.log(preOrderTraversal(node)); // [ 10, 5, 3, 11, 14 ]
// console.log(postOrderTraversal(node)); // [ 3, 5, 14, 11, 10 ]
console.log(inOrderTraversal(node)); // [ 3, 5, 10, 11, 14]
