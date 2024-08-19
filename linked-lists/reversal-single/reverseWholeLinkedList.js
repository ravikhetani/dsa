const LinkedList = require('../SingleLinkedList');

console.log(LinkedList);

const mylist = new LinkedList();

mylist.append(1);
mylist.append(2);
mylist.append(3);
mylist.append(4);
mylist.append(5);

function reverseList(linkedList) {
  let prev = null;
  let current = linkedList.head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

let node = reverseList(mylist);
while (node) {
  console.log(node.value);
  node = node.next;
}
