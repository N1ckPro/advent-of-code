import { benchmark, Direction, Vector2, type Solution } from '../../../lib/index.js';

const directions = [
	Direction.NORTH_WEST,
	Direction.NORTH,
	Direction.NORTH_EAST,
	Direction.EAST,
	Direction.SOUTH_EAST,
	Direction.SOUTH,
	Direction.SOUTH_WEST,
	Direction.WEST,
];

export const solution: Solution<number> = (input: string[]) => {
	let total = 0;

	for (let y = 0; y < input.length; y++) {
		for (let x = 0; x < input[y].length; x++) {
			const character = input[y][x];
			if (character !== 'X') continue;

			// eslint-disable-next-line no-label-var, no-labels
			directions: for (const direction of directions) {
				const potentialWord = new Vector2(x, y);
				for (const nextCharacter of ['M', 'A', 'S']) {
					potentialWord.addMotion(direction);
					const current = input[potentialWord.y]?.[potentialWord.x];

					// eslint-disable-next-line no-labels
					if (current !== nextCharacter) continue directions;
					if (current === 'S') total++;
				}
			}
		}
	}

	return total;
};

await benchmark(2_024, 4, 1, solution);
