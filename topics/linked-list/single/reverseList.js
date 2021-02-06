const ListNode = require('../shared/SinglyLinkedListNode');

// function reverseList(node) {
//   if (node === null || node.next === null) {
//     return node;
//   }
//   nextNode = node.next;
//   node.next = reverseList(prevNext);
//   return node;
// }

// review solution for iterative https://leetcode.com/problems/reverse-linked-list/discuss/58127/Python-Iterative-and-Recursive-Solution
function reverseList(node) {
  const stack = [];
  let currNode = node;
  while (currNode) {
    stack.push(currNode);
    currNode = currNode.next;
  }
  // if total number of items is 1 or none, it's already the head
  if (stack.length <= 1) return node;

  // keep a reference to the new head so we can return the entire list later
  const newHead = stack.pop();
  let prevNode = newHead;
  while (stack.length !== 0) {
    currNode = stack.pop();
    prevNode.next = currNode;
    prevNode = currNode;
  }
  prevNode.next = null;

  return newHead;
}

console.log(reverseList(new ListNode(1, null)));

// Input: 1->2->3->NULL
// Output: 3->2->1->NULL

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
