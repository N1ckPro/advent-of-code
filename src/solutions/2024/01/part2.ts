import { benchmark, type Solution } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	const leftList: number[] = [];
	const rightList: number[] = [];
	let similarityScore = 0;

	for (const line of input) {
		const [left, right] = line.split(/ +/g).map(Number);

		leftList.push(left);
		rightList.push(right);
	}

	const frequency = new Map<number, number>();
	for (const number of rightList) {
		frequency.set(number, (frequency.get(number) ?? 0) + 1);
	}

	for (const number of leftList) {
		similarityScore += (frequency.get(number) ?? 0) * number;
	}

	return similarityScore;
};

await benchmark(2_024, 1, 2, solution);
