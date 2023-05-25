/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let goal = nums.length / 2;
	let obj = {};
	for (let item of nums) {
		if (obj[item]) {
			obj[item]++;
		} else {
			obj[item] = 1;
		}
		if (obj[item] > goal) {
			return item;
		}
	}
	/* for (let item in obj) {
		if () return item;
	} */
};
// @lc code=end
