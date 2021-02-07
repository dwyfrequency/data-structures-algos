/**
 * Find the node in the BST that the node's value equals val and return the
 * subtree rooted with that node. If such a node does not exist, return null.
 * @param {*} root
 * @param {number} val
 * @returns
 */
function searchBST(root, val) {
  // if we receive null root then the value was not found
  if (root === null) return null;
  // if we found the value, return the root
  if (root.val === val) return root;
  // if we find the value, we'll get the root it's in
  const left = searchBST(root.left, val);
  if (left) return left;
  const right = searchBST(root.right, val);
  if (right) return right;
  // if the value doesn't exist in the branches, return null
  return null;
}
