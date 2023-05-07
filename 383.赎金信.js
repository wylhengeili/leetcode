/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**遍历计数
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// var canConstruct = function (ransomNote, magazine) {
// 	if (ransomNote.length > magazine.length) {
// 		return false;
// 	}
// 	let objM = {},
// 		objR = {},
// 		flag = 0;
// 	for (let item of ransomNote) {
// 		if (objR[item]) {
// 			objR[item]++;
// 		} else {
// 			objR[item] = 1;
// 		}
// 	}
// 	for (let item of magazine) {
// 		if (objM[item]) {
// 			objM[item]++;
// 		} else {
// 			objM[item] = 1;
// 		}
// 	}
// 	for (let item in objR) {
// 		if (objR[item] > (objM[item] ? objM[item] : 0)) {
// 			return false;
// 		} else {
// 			flag = 1;
// 		}
// 	}
// 	if (flag) return true;
// 	return false;
// };

/**遍历计数
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	if (ransomNote.length > magazine.length) {
		return false;
	}
	const cnt = new Array(26).fill(0);
	for (const c of magazine) {
		cnt[c.charCodeAt() - 'a'.charCodeAt()]++;
	}
	for (const c of ransomNote) {
		cnt[c.charCodeAt() - 'a'.charCodeAt()]--;
		if (cnt[c.charCodeAt() - 'a'.charCodeAt()] < 0) {
			return false;
		}
	}
	return true;
};
// @lc code=end
