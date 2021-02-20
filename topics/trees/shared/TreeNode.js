module.exports = class TreeNode {
  val;
  left;
  right;
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
};
