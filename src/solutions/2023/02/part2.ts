import type { Solution } from '../../../lib/index.js';
import { benchmark, readInput } from '../../../lib/index.js';
import { getMinCubes } from './getMinCubes.js';

const solution: Solution<number> = (input: string[]) => {
	let result = 0;
	for (const line of input) {
		const sets = line.replace(/Game \d{1,3}: /, '').split('; ');
		result += getMinCubes(sets);
	}

	return result;
};

console.log(`Part 2 Result: ${await benchmark(await readInput(2), solution)}`);
