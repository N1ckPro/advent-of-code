import { benchmark, type Solution } from '../../../lib/index.js';
import { getPointsForRace } from './getPointsForRace.js';

export const solution: Solution<number> = (input: string[]) => {
	const [time, distance] = input.map((line) => Number(line.slice(line.indexOf(':') + 1).replaceAll(/ +/g, '')));
	return getPointsForRace(time, distance);
};

await benchmark(6, 2, solution);
