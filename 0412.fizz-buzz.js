/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**遍历分类
 * @param {number} n
 * @return {string[]}
 */
// var fizzBuzz = function (n) {
// 	let ans = [];
// 	for (let i = 1; i <= n; i++) {
// 		if (i % 3 == 0 && i % 5 == 0) {
// 			ans.push('FizzBuzz');
// 		} else if (i % 3 == 0) {
// 			ans.push('Fizz');
// 		} else if (i % 5 == 0) {
// 			ans.push('Buzz');
// 		} else {
// 			ans.push(i.toString());
// 		}
// 	}
// 	return ans;
// };

/**遍历字符串拼接
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
	let ans = [];
	for (let i = 1; i <= n; i++) {
		let s = '';
		if (i % 3 == 0) s += 'Fizz';
		if (i % 5 == 0) s += 'Buzz';
		if (s.length == 0) s = i.toString();
		ans.push(s);
	}
	return ans;
};
// @lc code=end
