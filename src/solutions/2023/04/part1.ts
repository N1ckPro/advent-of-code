import type { Solution } from '../../../lib/index.js';
import { benchmark } from '../../../lib/index.js';
import { getPoints } from './getPoints.js';

export const solution: Solution<number> = (input: string[]) => {
	let result = 0;
	for (const line of input) {
		result += getPoints(line);
	}

	return result;
};

await benchmark(2_023, 4, 1, solution);
