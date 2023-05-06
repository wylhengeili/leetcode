/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**后向遍历
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function (s) {
// 	let index = s.length - 1;
// 	while (s[index] == ' ') {
// 		index--;
// 	}
// 	let wordlength = 0;
// 	while (index >= 0 && s[index] != ' ') {
// 		wordlength++;
// 		index--;
// 	}
// 	return wordlength;
// };

/**运用split 和 fliter
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	let arr = s.split(' ');
	arr = arr.filter((item) => item.length);
	return arr[arr.length - 1].length;
};
// @lc code=end
