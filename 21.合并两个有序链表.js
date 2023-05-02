/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  /* 递归法 */
  //   if (!list1) return list2;
  //   if (!list2) return list1;
  //   if (list1.val < list2.val) {
  //     list1.next = mergeTwoLists(list1.next, list2);
  //     return list1;
  //   } else {
  //     list2.next = mergeTwoLists(list1, list2.next);
  //     return list2;
  //   }

  /* 迭代法 */
  let head = new ListNode(-1);
  let prev = head;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      prev.next = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      list2 = list2.next;
    }
    prev = prev.next;
  }
  prev.next = list1 ? list1 : list2;
  return head.next;
};
// @lc code=end
