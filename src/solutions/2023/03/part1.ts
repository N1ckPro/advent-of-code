import type { Solution } from '../../../lib/index.js';
import { benchmark } from '../../../lib/index.js';
import { getPartNumbers } from './getPartNumbers.js';

export const solution: Solution<number> = (input: string[]) => getPartNumbers(input);
await benchmark(2_023, 3, 1, solution);
