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
function reverseListStack(node) {
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

// Space O(1) | Time O(N)
function reverseListIterative(head) {
  let prevNode = null;
  while (head) {
    // take current node
    const currNode = head;
    // store next value so we can later reassign to be next iterations head
    const nextNode = currNode.next;
    // point current node to previous node
    currNode.next = prevNode;
    // now, assign previous node for next iteration as this iterations current
    prevNode = currNode;
    // iterate to the next node
    head = nextNode;
  }
  // don't return head as it will be null
  // return prevNode as that will be our head
  return prevNode;
}

function reverseListRecursive(head) {
  function reverse(currNode, prevNode = null) {
    // if we hit end of list, return our previous which will be our head of list
    if (currNode === null) {
      return prevNode;
    }
    const nextNode = currNode.next;
    currNode.next = prevNode;
    // new node will be new current and current will be new previous
    return reverse(nextNode, currNode);
  }

  return reverse(head);
}

console.log(reverseList(new ListNode(1, null)));

// Input: 1->2->3->NULL
// Output: 3->2->1->NULL

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
