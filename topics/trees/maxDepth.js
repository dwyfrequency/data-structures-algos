/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Space O(N) for space on the call stack | Time O(N)
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root, depth = 0) {
  // base case, return max depth on side of tree
  if (!root) return depth;
  // increment to count the root depth
  depth += 1;
  // get left most depth in branch
  const left = maxDepth(root.left, depth);
  // get right most depth in branch
  const right = maxDepth(root.right, depth);
  // take largest
  return Math.max(left, right);
};

const maxDepthTiny = function (root) {
  // base case, return max depth on side of tree
  return root
    ? 1 + Math.max(maxDepthTiny(root.left), maxDepthTiny(root.right))
    : 0;
};
