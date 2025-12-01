import { benchmark, type Solution } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	let position = 50;
	let totalZeros = 0;

	for (const line of input) {
		const [directionStr, ...distanceArr] = line.split('');
		const direction = directionStr === 'L' ? -1 : 1;
		const distance = Number(distanceArr.join(''));

		const effectiveDistance = distance % 100;
		const increase = position === 0 ? 0 : 1;
		position += direction * effectiveDistance;

		if (position > 99) {
			position -= 100;
			totalZeros += increase;
		} else if (position < 0) {
			position += 100;
			totalZeros += increase;
		} else if (position === 0) totalZeros += increase;

		totalZeros += Math.floor(distance / 100);
	}

	return totalZeros;
};

await benchmark(2_025, 1, 2, solution);
