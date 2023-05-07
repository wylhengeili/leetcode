/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**暴力循环
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function (x) {
// 	if (x == 0 || x == 1) {
// 		return x;
// 	}
// 	for (let i = 1; i < x; i++) {
// 		if (i * i <= x && (i + 1) * (i + 1) > x) {
// 			return i;
// 		}
// 	}
// };

/**二分法
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	let left = 1,
		right = x;
	while (left <= right) {
		//取中值
		let mid = left + ((right - left) >> 1);
		//判断结果在中值的哪一边
		if (mid <= x / mid) {
			//在中值右边，先判断中值本身
			if (mid + 1 > x / (mid + 1)) {
				return mid;
			}
			//将左边界右移
			left = mid + 1;
		} else {
			//如果在中值左边就将有边界左移
			right = mid - 1;
		}
	}
	return 0;
};
// @lc code=end
