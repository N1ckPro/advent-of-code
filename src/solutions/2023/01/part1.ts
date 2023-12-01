import type { Solution } from '../../../lib/index.js';
import { benchmark, readInput } from '../../../lib/index.js';
import { getNumber } from './getNumber1.js';

const solution: Solution<string, number> = (input: string) => {
	let result = 0;
	for (const line of input.split(/\n/g)) {
		result += getNumber(line) ?? 0;
	}

	return result;
};

console.log(`Part 1 Result: ${await benchmark(await readInput(1), solution)}`);
