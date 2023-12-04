import type { Solution } from '../../../lib/index.js';
import { benchmark } from '../../../lib/index.js';
import { getGearRations } from './getGearRatios.js';

export const solution: Solution<number> = (input: string[]) => getGearRations(input);
await benchmark(3, 2, solution);
