import { benchmark, type Solution } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	const ranges = input[0].split(',');
	let total = 0;
	for (const range of ranges) {
		const [start, end] = range.split('-').map(Number);
		for (let i = start; i <= end; i++) {
			const current = i.toString();
			if (current.length % 2 === 1) continue;

			const middle = current.length / 2;
			const start = current.slice(0, middle);
			const end = current.slice(middle);

			if (start === end) total += i;
		}
	}

	return total;
};

await benchmark(2_025, 2, 1, solution);
