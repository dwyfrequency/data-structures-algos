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

const node = new TreeNode(
  10,
  new TreeNode(5, new TreeNode(3)),
  new TreeNode(6)
);
console.log(preOrderTraversal(node));
