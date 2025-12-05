import { benchmark, type Solution } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	let joltage = 0;
	for (const bank of input) {
		const batteries = bank.split('').map(Number);

		let max1 = 0;
		let max2 = 0;
		for (let i = 0; i <= batteries.length; i++) {
			if (batteries[i] > max1 && i !== batteries.length - 1) {
				max1 = batteries[i];
				max2 = 0;
			} else if (batteries[i] > max2) max2 = batteries[i];
		}

		joltage += max1 * 10 + max2;
	}

	return joltage;
};

await benchmark(2_025, 3, 1, solution);
