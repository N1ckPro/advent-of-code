import type { Solution } from '../../../lib/index.js';
import { benchmark, readInput } from '../../../lib/index.js';
import { getGearRations } from './getGearRatios.js';

const solution: Solution<number> = (input: string[]) => getGearRations(input);
console.log(`Part 2 Result: ${await benchmark(await readInput(3), solution)}`);
