import { benchmark, type Solution } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	let position = 50;
	let totalZeros = 0;

	for (const line of input) {
		const [directionStr, ...distanceArr] = line.split('');
		const direction = directionStr === 'L' ? -1 : 1;
		const distance = Number(distanceArr.join(''));

		position += distance * direction;
		if (position % 100 === 0) totalZeros++;
	}

	return totalZeros;
};

await benchmark(2_025, 1, 1, solution);
