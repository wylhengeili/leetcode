/*
 * @lc app=leetcode.cn id=2106 lang=javascript
 *
 * [2106] 摘水果
 */

// @lc code=start
/**
 * 二分查找
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */

// var maxTotalFruits = function (fruits, startPos, k) {
// 	const n = fruits.length; //有水果地方的个数
// 	const sum = new Array(n + 1).fill(0); //记录区间上能摘的水果总数
// 	const indices = new Array(n).fill(0); //记录走过的距离
// 	sum[0] = 0;
// 	for (let i = 0; i < n; i++) {
// 		sum[i + 1] = sum[i] + fruits[i][1];
// 		indices[i] = fruits[i][0];
// 	}
// 	let ans = 0;
// 	for (let x = 0; x <= Math.floor(k / 2); x++) {
// 		/* 先向左走x步，再向右走k-x步 */
// 		let y = k - 2 * x;
// 		let left = startPos - x;
// 		let right = startPos + y;
// 		let start = lowerBound(indices, 0, n - 1, left);
// 		let end = upperBound(indices, 0, n - 1, right);
// 		ans = Math.max(ans, sum[end] - sum[start]);

// 		/* 先向右走x步，再向左走k-x步 */
// 		y = k - 2 * x;
// 		left = startPos - y;
// 		right = startPos + x;
// 		start = lowerBound(indices, 0, n - 1, left);
// 		end = upperBound(indices, 0, n - 1, right);
// 		ans = Math.max(ans, sum[end] - sum[start]);
// 	}
// 	return ans;
// };
// const lowerBound = (arr, left, right, val) => {
// 	//向前查找 向左走的距离
// 	let res = right + 1;
// 	while (left <= right) {
// 		const mid = left + Math.floor((right - left) / 2);
// 		if (arr[mid] >= val) {
// 			res = mid;
// 			right = mid - 1;
// 		} else {
// 			left = mid + 1;
// 		}
// 	}
// 	return res;
// };

// const upperBound = (arr, left, right, val) => {
// 	//向后查找 向右走的距离
// 	let res = right + 1;
// 	while (left <= right) {
// 		const mid = left + Math.floor((right - left) / 2);
// 		if (arr[mid] > val) {
// 			res = mid;
// 			right = mid - 1;
// 		} else {
// 			left = mid + 1;
// 		}
// 	}
// 	return res;
// };

// @lc code=start
/**
 * 滑动窗口
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function (fruits, startPos, k) {
	let left = 0;
	let right = 0;
	const n = fruits.length;
	let sum = 0;
	let ans = 0;
	while (right < n) {
		//固定右边框
		sum += fruits[right][1];
		while (left <= right && step(fruits, startPos, left, right) > k) {
			//改变左边框大小，求复合条件的最大水果数
			sum -= fruits[left][1];
			left++;
		}
		ans = Math.max(ans, sum);
		right++;
	}
	return ans;
};
/* 覆盖区间的最小步数 */
const step = (fruits, startPos, left, right) => {
	return Math.min(Math.abs(startPos - fruits[right][0]), Math.abs(startPos - fruits[left][0])) + fruits[right][0] - fruits[left][0];
};

// @lc code=end
