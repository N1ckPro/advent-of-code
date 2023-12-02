import type { Solution } from '@lib';
import { benchmark, readInput } from '@lib';
import { getNumber } from './getNumber2.js';

const solution: Solution<number> = (input: string[]) => {
	let result = 0;

	for (const line of input) {
		result += getNumber(line) ?? 0;
	}

	return result;
};

console.log(`Part 2 Result: ${await benchmark(await readInput(1), solution)}`);
