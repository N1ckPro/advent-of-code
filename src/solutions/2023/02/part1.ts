import type { Solution } from '../../../lib/index.js';
import { benchmark } from '../../../lib/index.js';
import { checkSets } from './checkSets.js';

export const solution: Solution<number> = (input: string[]) => {
	let result = 0;
	for (const line of input) {
		const sets = line.replace(/Game \d{1,3}: /, '').split('; ');
		if (checkSets(sets)) result += Number(/\d{1,3}/.exec(line));
	}

	return result;
};

await benchmark(2_023, 2, 1, solution);
