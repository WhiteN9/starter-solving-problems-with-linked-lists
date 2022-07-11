/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 */
function swap(list, x, y) {}

const list = new LinkedList([1, 2, 3, 4, 5]);
const node1 = list.find((node) => node.value === 1);
const node2 = list.find((node) => node.value === 4);
const actual = swap(list, node1, node2);
console.log(actual);

module.exports = swap;
