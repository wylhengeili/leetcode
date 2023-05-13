/*
 * @lc app=leetcode.cn id=2441 lang=javascript
 *
 * [2441] 与对应负数同时存在的最大正整数
 */

// @lc code=start
/**遍历数组
 * @param {number[]} nums
 * @return {number}
 */
// var findMaxK = function (nums) {
// 	let max = 0;
// 	for (let val of nums) {
// 		if (nums.includes(-val)) {
// 			max = Math.max(val, max);
// 		}
// 	}
// 	if (max == 0) return -1;
// 	return max;
// };

/**set重构
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
	let res = -1;
	let setArray = new Set();
	for (let i = 0; i < nums.length; i++) {
		if (setArray.has(-nums[i])) {
			res = Math.abs(nums[i]) > res ? Math.abs(nums[i]) : res;
		} else {
			setArray.add(nums[i]);
		}
	}
	return res;
};

// @lc code=end
