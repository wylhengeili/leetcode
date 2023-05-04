/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * 遍历并用splice删除，因为删除使得array长度变短所以下标-1
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {
// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] == val) {
// 			nums.splice(i, 1);
// 			i--;
// 		}
// 	}
// 	return nums.length;
// };

// @lc code=start
/**
 * 左右双指针遍历
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	let left = 0,
		right = nums.length;
	while (left < right) {
		if (nums[left] === val) {
			nums[left] = nums[right - 1];
			right--;
		} else {
			left++;
		}
	}
	return left;
};
// @lc code=end
