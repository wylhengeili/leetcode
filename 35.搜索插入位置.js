/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * 双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function (nums, target) {
// 	let left = 0,
// 		right = 1;
// 	while (left < right) {
// 		if (nums[left] > target) {
// 			return 0;
// 		} else if (nums[left] == target) {
// 			return left;
// 		} else if (nums[left] < target && nums[right] > target) {
// 			return right;
// 		} else if (left == nums.length - 1) {
// 			return nums.length;
// 		}
// 		left++;
// 		right++;
// 	}
// };

// @lc code=start
/**
 * 用indexOf方法
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function (nums, target) {
// 	if (nums.indexOf(target) == -1) {
// 		nums.push(target);
// 		nums.sort((a, b) => a - b);
// 	}
// 	return nums.indexOf(target);
// };

/**
 * 二分法
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	//初始化左指针为0，右指针为nums最后一个元素
	let left = 0,
		right = nums.length - 1,
		middle = 0;
	//当left>right证明对比完成数组元素,跳出循环
	while (left <= right) {
		//计算中间指针位置
		middle = Math.floor((left + right) / 2);
		//如果middle所指值等于target,直接返回其位置
		if (nums[middle] == target) {
			return middle;
		}
		//如果middle所指值大于target,由于数组为升序
		// nums[middle]>target，证明区间[middle,right]
		if (nums[middle] > target) right = middle - 1;
		else left = middle + 1;
	}
	return nums[middle] > target ? middle : middle + 1;
};
// @lc code=end
