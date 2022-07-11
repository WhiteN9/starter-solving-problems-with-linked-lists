const LinkedList = require("../lib/linkedList");

/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 */
function swap(list, x, y) {
  /**
   * If the list is empty then
   *  return the list
   */
  //traverse on that list, change the pointer of the previous nodes
  //find the previous node pointers

  if (!list.head) {
    return null;
  }
  let x_next = x.next; //temporary pointer to keep track of the next node of x
  let x_prev = list.findWithPrevious((node) => node === x)[1]; //previous node of x
  let y_prev = list.findWithPrevious((node) => node === y)[1]; //previous node of y

  x.next = y.next; //re-direct the x's next pointer to the node after y
  y.next = x_next; //re-direct the y's next pointer to the node after x

  if (x !== list.head) {
    x_prev.next = y;
  } else list.head = y;

  if (y !== list.head) {
    y_prev.next = x;
  } else list.head = x;

  return list;
}

const list = new LinkedList([1, 2, 3, 4, 5]);
const node1 = list.find((node) => node.value === 1);
const node2 = list.find((node) => node.value === 4);
const actual = swap(list, node1, node2);
console.log(actual);
module.exports = swap;
