/*
 * @lc app=leetcode.cn id=1003 lang=javascript
 *
 * [1003] 检查替换后的词是否有效
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  /* 递归替换 */
  //   s = s.replace(/abc/g, "");
  //   if (s.includes("abc")) {
  //     return isValid(s);
  //   }
  //   return !!!s.length;
  /**栈 (类似有效括号)
   * 如果栈长大于等于3，且栈顶3元素为abc，则将其取出
   * 最后判断栈是否为空
   */
  let stack = [];
  for (let item of s) {
    stack.push(item);
    if (stack.length >= 3 && stack.slice(stack.length - 3).join("") === "abc") {
      stack.splice(stack.length - 3, 3);
    }
  }
  return stack.length === 0;
};
// @lc code=end
