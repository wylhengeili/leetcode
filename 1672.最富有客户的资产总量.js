/*
 * @lc app=leetcode.cn id=1672 lang=javascript
 *
 * [1672] 最富有客户的资产总量
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
	let cnt = [];
	let max = 0;
	for (let item of accounts) {
		let num = 0;
		for (let i = 0; i < item.length; i++) {
			num += item[i];
		}
		max = Math.max(max, num);
	}
	return max;
};
// @lc code=end
