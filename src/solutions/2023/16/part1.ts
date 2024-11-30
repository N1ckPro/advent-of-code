import type { Solution } from '../../../lib/index.js';
import { DirectionMarker, benchmark } from '../../../lib/index.js';
import { getEnergizedTiles } from './energizedTiles.js';

export const solution: Solution<number> = (input: string[]) => getEnergizedTiles(input, 0, 0, DirectionMarker.East);
await benchmark(2_023, 16, 1, solution);
