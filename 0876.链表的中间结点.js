/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**遍历链表成数组，取中值
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
	let a = [head];
	while (a[a.length - 1].next !== null) {
		a.push(a[a.length - 1].next);
	}
	return a[Math.trunc(a.length / 2)];
};
// @lc code=end
