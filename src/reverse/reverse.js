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

//With a linked list
//To reverse the order of it
//We make a new linked list
//By inserting at the head using the insertAtHead function
//
function reverseIterative(list) {
  const reverseList = new LinkedList();
  let node = list.head;
  while (node) {
    reverseList.insertAtHead(node.value);
    node = node.next;
  }
  return reverseList;
}

/**
 * Recursively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
//The base stopping condition is also at of the last node of the list
//After reaching that point, start adding node on return
function reverseRecursive(list) {
  //stop at the last node of the list
  if (list.length <= 1) {
    return list;
  }
  const value = list.head.value;
  //remove first node as we recursively calling the list until we reach the last node of the list
  list.remove((node, index) => index === 0);

  const reverseList = reverseRecursive(list);
  //after that is done, start adding nodes to the new list
  reverseList.insert(value)
  return reverseList;
}

// const expected = new LinkedList([5, 4, 3, 2, 1]);
// const actual = reverseRecursive(expected);

module.exports = { reverseIterative, reverseRecursive };

//[5,4,3,2,1]
//[4,3,2,1]
//[3,2,1]
//[2,1]
//[1]
