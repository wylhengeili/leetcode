/*
 * @lc app=leetcode.cn id=1419 lang=javascript
 *
 * [1419] 数青蛙
 */

// @lc code=start
/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
	let [c, r, o, a, k] = [0, 0, 0, 0, 0];
	let max = 0;
	for (let item of croakOfFrogs) {
		if (item === 'c') {
			c++;
		} else if (item === 'r') {
			r++;
		} else if (item === 'o') {
			o++;
		} else if (item === 'a') {
			a++;
		} else if (item === 'k') {
			k++;
		}
		if (c && r && o && a && k) {
			c--;
			r--;
			o--;
			a--;
			k--;
		}
		if (c >= r && r >= o && o >= a && a >= k) {
			max = Math.max(max, c);
		} else {
			return -1;
		}
	}
	if (c === 0 && r === 0 && o === 0 && a === 0 && k === 0) {
		return max;
	}
	return -1;
};
// @lc code=end
