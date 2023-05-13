/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**一次遍历
 * @param {ListNode} head
 * @return {ListNode}
 */
// var deleteDuplicates = function (head) {
// 	if (!head) {
// 		//如果为空直接返回
// 		return head;
// 	}
// 	let cur = head;
// 	while (cur.next) {
// 		if (cur.val === cur.next.val) {
// 			//如果重复
// 			cur.next = cur.next.next;
// 		} else {
// 			//没重复就后移
// 			cur = cur.next;
// 		}
// 	}
// 	return head;
// };

/**递归
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
	if (!head || head.next == null) {
		return head;
	}
	head.next = deleteDuplicates(head.next);
	if (head.val == head.next.val) head = head.next;
	return head;
};
// @lc code=end
