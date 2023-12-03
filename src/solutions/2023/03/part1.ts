import type { Solution } from '../../../lib/index.js';
import { benchmark, readInput } from '../../../lib/index.js';
import { getPartNumbers } from './getPartNumbers.js';

const solution: Solution<number> = (input: string[]) => getPartNumbers(input);
console.log(`Part 1 Result: ${await benchmark(await readInput(3), solution)}`);
