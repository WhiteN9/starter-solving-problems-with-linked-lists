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
  //accepts list - a linked list, potentially empty, to be reversed
  //declare a variable named reversedList and initialize it to an empty linked list
  //declare a variable node initialized to the head of the list
  //while the node pointer is not null do
  //insert the node value at the head of the reversedList
  //move the node pointer along to the next node
  //return the reversedList
  const reversedList = new LinkedList();
  let node = list.head;
  while (node !== null) {
    reversedList.insertAtHead(node.value);
    node = node.next;
  }
  return reversedList;
}
// const expected = new LinkedList([5, 4, 3, 2, 1]);
// const actual = reverseIterative(expected);

/**
 * Recursively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseRecursive(list) {
  //base case
  if (list.length <= 1) {
    return list; //return a linkedlist with the its last node
  }
  //recursive case
  const head = list.head.value;
  list.remove((node, index) => index === 0);
  //going through the list's nodes all the way to the end
  const reversedList = reverseRecursive(list);

  //backward phase;
  reversedList.insert(head);

  return reversedList;
}
// const expected = new LinkedList([5, 4, 3, 2, 1]);
// const actual = reverseRecursive(expected);

module.exports = { reverseIterative, reverseRecursive };
