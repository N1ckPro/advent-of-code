import type { Solution } from '../../../lib/index.js';
import { benchmark } from '../../../lib/index.js';
import { getGearRatios } from './getGearRatios.js';

export const solution: Solution<number> = (input: string[]) => getGearRatios(input);
await benchmark(2_023, 3, 2, solution);
