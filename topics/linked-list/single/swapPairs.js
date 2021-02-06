const ListNode = require('../shared/SinglyLinkedListNode');

function swapPairs(head) {
  // next check is to guard against can't take next of undefined
  // this would occur in lists with odd number of values
  if (head === null || head.next === null) return head;

  const prevHead = head;
  const tempNextChain = prevHead.next.next;
  const newHead = prevHead.next;
  newHead.next = prevHead;
  // add the next attribute as the new head of the sub-list
  prevHead.next = swapPairs(tempNextChain);
  return newHead;
}

console.log(
  swapPairs(
    new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null))))
  )
);
// [1, 2, 3, 4] -> [2,1,4,3]
