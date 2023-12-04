import { benchmark, type Solution } from '../../../lib/index.js';
import { getNumber } from './getNumber1.js';

export const solution: Solution<number> = (input: string[]) => {
	let result = 0;
	for (const line of input) {
		result += getNumber(line) ?? 0;
	}

	return result;
};

await benchmark(1, 1, solution);
