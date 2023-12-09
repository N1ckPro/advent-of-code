import { benchmark, type Solution } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	const numbers = input.map((line) => line.split(' ').map(Number));

	let result = 0;
	for (let sequence of numbers) {
		let total = 0;
		while (!sequence.every((value) => value === 0)) {
			total += sequence.at(-1) ?? 0;
			sequence = sequence.reduce<number[]>((array, curr, index, source) => {
				if (typeof source[index + 1] === 'undefined') return array;
				return [...array, source[index + 1] - curr];
			}, []);
		}

		result += total;
	}

	return result;
};

await benchmark(9, 1, solution);
