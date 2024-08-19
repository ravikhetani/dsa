/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);

// ---- Generate our linked list ----

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

// --------- Our solution -----------

var reverseList = function (head, m, n) {
  let prev = null;
  let current = head;

  let count = 1;

  while (current) {
    if (count >= m && count <= n) {
      let nextTemp = current.next;
      current.next = prev;
      prev = current;
      current = nextTemp;
      count++;
    } else {
      prev = current;
      current = current.next;
    }
  }

  return prev;
};

printList(linkedList);
console.log('after reverse');
printList(reverseList(linkedList, 2, 4));
