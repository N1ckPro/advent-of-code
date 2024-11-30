import type { Solution } from '../../../lib/index.js';
import { benchmark } from '../../../lib/index.js';
import { getNumber } from './getNumber2.js';

export const solution: Solution<number> = (input: string[]) => {
	let result = 0;
	for (const line of input) {
		result += getNumber(line) ?? 0;
	}

	return result;
};

await benchmark(2_023, 1, 2, solution);
