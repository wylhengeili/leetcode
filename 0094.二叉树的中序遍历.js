/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归方法
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal = function (root) {
// 	const res = [];
// 	const inorder = (root) => {
// 		if (!root) {
// 			return;
// 		}
// 		inorder(root.left);
// 		res.push(root.val);
// 		inorder(root.right);
// 	};
// 	inorder(root);
// 	return res;
// };

/**
 * 迭代方法
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	const res = [];
	const stk = [];
	while (root || stk.length) {
		while (root) {
			stk.push(root);
			root = root.left;
		}
		root = stk.pop();
		res.push(root.val);
		root = root.right;
	}
	return res;
};

// @lc code=end
