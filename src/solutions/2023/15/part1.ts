import type { Solution } from '../../../lib/index.js';
import { benchmark } from '../../../lib/index.js';
import { hash } from './hash.js';

export const solution: Solution<number> = (input: string[]) => {
	const sequences = input[0].split(',');
	return sequences.reduce((sum, sequence) => sum + hash(sequence), 0);
};

await benchmark(2_023, 15, 1, solution);
