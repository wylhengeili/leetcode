/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
	let ans = [];
	ans[0] = nums[0];
	for (let i = 1; i < nums.length; i++) {
		ans[i] = ans[i - 1] + Number(nums[i]);
	}
	return ans;
};
// @lc code=end
