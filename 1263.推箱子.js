/*
 * @lc app=leetcode.cn id=1263 lang=javascript
 *
 * [1263] 推箱子
 */

// @lc code=start
const dirs = [0, 1, 0, -1, 0];
/**双重BFS
 * @param {character[][]} grid
 * @return {number}
 */
var minPushBox = function (grid) {
	let people;
	let box;
	let target;
	const rows = grid.length;
	const cols = grid[0].length;
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (grid[i][j] === 'S') {
				people = [i, j];
			} else if (grid[i][j] === 'B') {
				box = [i, j];
			} else if (grid[i][j] === 'T') {
				target = [i, j];
			}
		}
	}

	const visited = new Set();
	const queue = [[people[0], people[1], box[0], box[1]]];
	let queueIndex = 0;
	let steps = 0;
	while (queueIndex < queue.length) {
		const curQueueLen = queue.length;
		let reached = false;
		while (queueIndex < curQueueLen) {
			const [pX, pY, bX, bY] = queue[queueIndex++];
			if (bX === target[0] && bY === target[1]) {
				reached = true;
				break;
			}

			const curKey = `${pX}#${pY}#${bX}#${bY}`;
			if (visited.has(curKey)) continue;
			visited.add(curKey);

			for (let i = 0; i < 4; i++) {
				const pX1 = bX + dirs[i];
				const pY1 = bY + dirs[i + 1];
				if (pX1 < 0 || pX1 >= rows || pY1 < 0 || pY1 >= cols || grid[pX1][pY1] === '#') {
					continue;
				}

				const bX1 = bX - dirs[i];
				const bY1 = bY - dirs[i + 1];
				if (bX1 < 0 || bX1 >= rows || bY1 < 0 || bY1 >= cols || grid[bX1][bY1] === '#') {
					continue;
				}

				if (isReachable(grid, [pX1, pY1], [bX, bY], [pX, pY])) {
					queue.push([bX, bY, bX1, bY1]);
				}
			}
		}

		if (reached) return steps;

		steps++;
	}

	return -1;
};

const isReachable = (grid, target, box, start) => {
	const t = grid[box[0]][box[1]];
	grid[box[0]][box[1]] = '#';
	const queue = [start];
	const visited = new Set();
	visited.add(`${start[0]}#${start[1]}`);

	let i = 0;
	while (i < queue.length) {
		const [curX, curY] = queue[i++];
		if (curX === target[0] && curY === target[1]) {
			grid[box[0]][box[1]] = t;
			return true;
		}

		for (let j = 0; j < 4; j++) {
			const newX = curX + dirs[j];
			const newY = curY + dirs[j + 1];
			const pointStr = `${newX}#${newY}`;
			if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length && grid[newX][newY] !== '#' && !visited.has(pointStr)) {
				queue.push([newX, newY]);
				visited.add(pointStr);
			}
		}
	}

	grid[box[0]][box[1]] = t;
	return false;
};
// @lc code=end
