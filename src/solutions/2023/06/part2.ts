import { benchmark, type Solution } from '../../../lib/index.js';
import { getPointsForRace } from './getPointsForRace.js';

export const solution: Solution<number> = (input: string[]) => getPointsForRace(input);
await benchmark(6, 2, solution);
