/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**斐波那契数列
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
// 	const sqrt_5 = Math.sqrt(5);
// 	const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2, n + 1);
// 	return Math.round(fib_n / sqrt_5);
// };

/**动态规划
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
// 	let dp = [];
// 	dp[0] = 1;
// 	dp[1] = 1;
// 	for (let i = 2; i <= n; i++) {
// 		dp[i] = dp[i - 1] + dp[i - 2];
// 	}
// 	return dp[n];
// };

/**动态规划的优化
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	let p = 0;
	let q = 0;
	let r = 1;
	for (let i = 1; i <= n; i++) {
		p = q;
		q = r;
		r = p + q;
	}
	return r;
};
// @lc code=end
