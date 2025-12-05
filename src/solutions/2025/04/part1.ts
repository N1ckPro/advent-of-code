import { benchmark, Direction, Vector2, type Solution } from '../../../lib/index.js';

const directions = [
	Direction.EAST,
	Direction.NORTH,
	Direction.SOUTH,
	Direction.WEST,
	Direction.NORTH_EAST,
	Direction.NORTH_WEST,
	Direction.SOUTH_EAST,
	Direction.SOUTH_WEST,
];

export const solution: Solution<number> = (input: string[]) => {
	let accessibleRolls = 0;

	for (let y = 0; y < input.length; y++) {
		for (let x = 0; x < input[y].length; x++) {
			if (input[y][x] !== '@') continue;
			let rollsAround = 0;

			for (const direction of directions) {
				const roll = new Vector2(x, y);
				roll.addMotion(direction);
				if (input[roll.y]?.[roll.x] === '@') rollsAround++;
			}

			if (rollsAround < 4) accessibleRolls++;
		}
	}

	return accessibleRolls;
};

await benchmark(2_025, 4, 1, solution);
