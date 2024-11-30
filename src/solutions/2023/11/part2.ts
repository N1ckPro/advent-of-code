import type { Solution } from '../../../lib/index.js';
import { Vector2, benchmark } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	const galaxies: Vector2[] = [];

	let yMultiplier = 0;
	for (const [y, line] of input.entries()) {
		if (!line.includes('#')) yMultiplier += 999_999;
		let xMultiplier = 0;
		// eslint-disable-next-line unicorn/no-for-loop
		for (let x = 0; x < line.length; x++) {
			if (input.every((line) => line[x] === '.')) xMultiplier += 999_999;
			if (line[x] === '#') galaxies.push(new Vector2(x + xMultiplier, y + yMultiplier));
		}
	}

	let result = 0;
	let length = galaxies.length;
	while (length !== 0) {
		for (const galaxy of galaxies) {
			if (galaxy.x === galaxies[0].x && galaxy.y === galaxies[0].y) continue;
			const distance = Math.abs(galaxy.x - galaxies[0].x) + Math.abs(galaxy.y - galaxies[0].y);
			result += distance;
		}

		galaxies.shift();
		length--;
	}

	return result;
};

await benchmark(2_023, 11, 1, solution);
