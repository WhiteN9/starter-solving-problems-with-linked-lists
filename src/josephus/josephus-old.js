const LinkedList = require("../lib/linkedList");

function josephus(list, m) {
  let node = list.head;

  const tail = list.find((node) => !node.next);
  tail.next = list.head;

  while (node.next != node) {
    for (let i = 0; i < m; i++) {
      node = node.next;
    }
    if (node.next === list.head) {
      list.head = list.head.next;
    }
    node.next = node.next.next;
    node = node.next;
  }
  return node.value;
}

const list = new LinkedList([
  "Arsames",
  "Bagaeus",
  "Cyrus",
  "Darius",
  "Eurythenes",
]);
const actual = josephus(list, 7);

module.exports = josephus;
