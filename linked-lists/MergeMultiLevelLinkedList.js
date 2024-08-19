/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}
// ---- Generate our linked list ----
// const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);

let linkedList = [];

for (let index = 0; index < linkedList.length; index++) {
  let prev = null;
  let next = null;

  if (index - 1 > 0) {
    next = linkedList[(index = 1)];
  }

  if(index+1<linkedList.length){
    prev = new ListNode(linkedList[index+1])
  }
}

// ---- Generate our linked list ----

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};
