/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function (nums) {
// 	let obj = {};
// 	for (let item of nums) {
// 		if (obj[item]) {
// 			obj[item]++;
// 		} else {
// 			obj[item] = 1;
// 		}
// 		if (obj[item] === 2) {
// 			return true;
// 		}
// 	}
// 	return false;
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	let orglength = nums.length;
	let newarr = new Set(nums);
	let newlength = [...newarr].length;
	if (orglength === newlength) {
		return false;
	}
	return true;
};
// @lc code=end
