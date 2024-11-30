import { benchmark, type Solution } from '../../../lib/index.js';
import { getLowestLocation } from './getLowestLocation.ts';

export const solution: Solution<number> = (input: string[]) => getLowestLocation(input);
await benchmark(2_023, 5, 1, solution);
