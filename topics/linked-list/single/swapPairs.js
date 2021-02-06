class ListNode {
  val;
  next;
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head) {
  // next check is to guard against can't take next of undefined
  // this would occur in lists with odd number of values
  if (head === null || head.next === null) return head;

  const prevHead = head; // 3
  const tempNextChain = prevHead.next.next; // null
  const newHead = prevHead.next; // 4
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
