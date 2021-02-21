const TreeNode = require('./shared/TreeNode');

/**
 *
 * @param {TreeNode} node
 */
function breadthFirst(node) {
  if (!node) return [];

  const queue = [node];
  const visited = [];
  let currNode = null;

  while (queue.length !== 0) {
    // take from the beg of the queue
    currNode = queue.shift();
    visited.push(currNode.val);
    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
  }
  return visited;
}

const node = new TreeNode(10, new TreeNode(5), new TreeNode(6));
console.log(breadthFirst(node));
