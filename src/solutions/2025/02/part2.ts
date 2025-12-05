import { benchmark, type Solution } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	const ranges = input[0].split(',');
	let total = 0;
	for (const range of ranges) {
		const [start, end] = range.split('-').map(Number);
		for (let i = start; i <= end; i++) {
			const current = i.toString();

			for (let j = 1; j <= current.length / 2; j++) {
				if (current.length % j !== 0) continue;

				let k = j;
				for (; k < current.length; k += j) if (current.slice(k - j, k) !== current.slice(k, k + j)) break;

				if (k >= current.length) {
					total += Number(current);
					break;
				}
			}
		}
	}

	return total;
};

await benchmark(2_025, 2, 2, solution);
