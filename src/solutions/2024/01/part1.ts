import { benchmark, type Solution } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	let leftList: number[] = [];
	let rightList: number[] = [];

	for (const line of input) {
		const [left, right] = line.split(/ +/g).map(Number);

		leftList.push(left);
		rightList.push(right);
	}

	leftList = leftList.sort((a, b) => a - b);
	rightList = rightList.sort((a, b) => a - b);

	return leftList.reduce((sum, current, index) => sum + Math.abs(current - rightList[index]), 0);
};

await benchmark(2_024, 1, 1, solution);
