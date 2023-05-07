/*
 * @lc app=leetcode.cn id=1010 lang=javascript
 *
 * [1010] 总持续时间可被 60 整除的歌曲
 */

// @lc code=start
/**暴力遍历每一组
 * @param {number[]} time
 * @return {number}
 */
// var numPairsDivisibleBy60 = function (time) {
// 	let num = 0;
// 	for (let i = 0; i < time.length; i++) {
// 		for (let j = i + 1; j < time.length; j++) {
// 			if ((time[i] + time[j]) % 60 == 0) {
// 				num++;
// 			}
// 		}
// 	}
// 	return num;
// };

/**数据组合方法
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
	const cnt = new Array(60).fill(0);
	for (let item of time) {
		//计算每一种除余情况的个数
		cnt[item % 60]++;
	}
	let num = 0;
	//对每种情况分别累加
	for (let i = 1; i < 30; i++) {
		//1~29 跟 60 - i 的配对
		num += cnt[i] * cnt[60 - i];
	}
	//0 和 30 跟除了自己以外的其他项配对
	num += (cnt[0] * (cnt[0] - 1)) / 2 + (cnt[30] * (cnt[30] - 1)) / 2;
	return num;
};
// @lc code=end
