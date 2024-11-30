import { benchmark, type Solution } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	const numbers = input.map((line) => line.split(' ').map(Number));

	let result = 0;
	for (let sequence of numbers) {
		let total = sequence[0];
		let i = 0;
		while (!sequence.every((value) => value === 0)) {
			sequence = sequence.reduce<number[]>((array, curr, index, source) => {
				if (typeof source[index + 1] === 'undefined') return array;
				return [...array, source[index + 1] - curr];
			}, []);

			if (i % 2 === 0) total -= sequence.at(0) ?? 0;
			else total += sequence.at(0) ?? 0;
			i++;
		}

		result += total;
	}

	return result;
};

await benchmark(2_023, 9, 2, solution);
