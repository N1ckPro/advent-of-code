import { benchmark, type Solution } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	let joltage = 0;
	for (const bank of input) {
		const batteries = bank.split('').map(Number);
		const maxes = Array.from({ length: 12 }).fill(0) as number[];

		for (let i = 0; i <= batteries.length; i++) {
			for (let j = 0; j < maxes.length; j++) {
				if (batteries[i] > maxes[j] && i < batteries.length - maxes.length + j + 1) {
					maxes[j] = batteries[i];
					for (let k = j + 1; k < maxes.length; k++) {
						maxes[k] = 0;
					}

					break;
				}
			}
		}

		joltage += maxes.reduce((total, current, i, a) => total + current * 10 ** (a.length - i - 1), 0);
	}

	return joltage;
};

await benchmark(2_025, 3, 2, solution);
