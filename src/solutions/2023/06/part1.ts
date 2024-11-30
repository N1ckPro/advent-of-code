import { benchmark, type Solution } from '../../../lib/index.js';
import { getPointsForRaces } from './getPointsForRaces.js';

export const solution: Solution<number> = (input: string[]) => getPointsForRaces(input);
await benchmark(2_023, 6, 1, solution);
