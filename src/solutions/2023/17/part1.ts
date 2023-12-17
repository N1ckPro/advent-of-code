import type { Solution } from '../../../lib/index.js';
import { benchmark } from '../../../lib/index.js';
import { getHeatLoss } from './heatLoss.js';

export const solution: Solution<number> = (input: string[]) => {
	const map = input.map((line) => line.split('').map(Number));
	return getHeatLoss(map, 1, 3);
};

await benchmark(17, 1, solution);
