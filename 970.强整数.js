/*
 * @lc app=leetcode.cn id=970 lang=javascript
 *
 * [970] 强整数
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    /* 枚举求和 */
    // let xArr = [] //枚举x**i
    // let yArr = [] //枚举y**i
    // let i = 0
    // while(x**i <= bound) {
    //     if(xArr[xArr.length-1] == x**i) {
    //         break
    //     }
    //     xArr.push(x**i)
    //     i++
    // }
    // i = 0
    // while(y**i <= bound) {
    //     if(yArr[yArr.length-1] == y**i) {
    //         break
    //     }
    //     yArr.push(y**i)
    //     i++
    // }
    // let resArr = [] //求和比较得出答案
    // for (let i = 0; i < xArr.length; i++) {
    //     for (let j = 0; j < yArr.length; j++) {
    //         let sum = xArr[i] + yArr[j]
    //         if(sum <= bound)
    //         resArr.push(sum)
    //     }
    // }
    // return [...new Set(resArr)]

    /* 双循环求和 */
    let set = new Set()
    for(let a = 1; a <= bound; a *= x) {
        for(let b = 1; a + b <= bound; b *= y) {
            set.add(a + b)
            if(y === 1) {
                break
            }
        }
        if(x === 1) {
            break
        }
    }
    return Array.from(set)

};
// @lc code=end

