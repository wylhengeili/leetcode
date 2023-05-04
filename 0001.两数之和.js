/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* 双重循环 */

// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         let res = target - nums[i]
//         for (let j = i + 1; j < nums.length; j++)
//             if (res == nums[j]) {
//                 return [i, j]
//             }
//     }
// };

/* 用map的方法 */
// var twoSum = function (nums, target) {
//     const map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(target - nums[i])) {
//             return [map.get(target - nums[i]), i]
//         }
//         map.set(nums[i], i)
//     }
//     return []
// }

/* 用对象的方法 */
var twoSum = function (nums, target) {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (obj[target - nums[i]] != undefined) {
            return [i, obj[target - nums[i]]]
        }
        obj[nums[i]] = i
    }
    return []
}
// @lc code=end

