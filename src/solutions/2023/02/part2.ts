import type { Solution } from '../../../lib/index.js';
import { benchmark } from '../../../lib/index.js';
import { getMinCubes } from './getMinCubes.js';

export const solution: Solution<number> = (input: string[]) => {
	let result = 0;
	for (const line of input) {
		const sets = line.replace(/Game \d{1,3}: /, '').split('; ');
		result += getMinCubes(sets);
	}

	return result;
};

await benchmark(2, 2, solution);
