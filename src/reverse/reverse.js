const LinkedList = require("../lib/linkedList");

/**
 * Iteratively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseIterative(list) {
  const newList = new LinkedList();

  let node = list.head;
  while (node !== null) {
    newList.insertAtHead(node.value);
    node = node.next;
  }
  return newList;
}

const expected = new LinkedList([5, 4, 3, 2, 1]);
const actual = reverseIterative(expected);

/**
 * Recursively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseRecursive(list) {}

module.exports = { reverseIterative, reverseRecursive };
