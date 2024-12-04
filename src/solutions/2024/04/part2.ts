import { benchmark, Direction, Vector2, type Solution } from '../../../lib/index.js';

const WordLetterMap = {
	M: 'S',
	S: 'M',
};

export const solution: Solution<number> = (input: string[]) => {
	let total = 0;

	for (let y = 0; y < input.length; y++) {
		for (let x = 0; x < input[y].length; x++) {
			const character = input[y][x];
			if (character !== 'A') continue;

			const northWest = new Vector2(x, y).addMotion(Direction.NORTH_WEST);
			const northWestCharacter = input[northWest.y]?.[northWest.x];
			if (!northWestCharacter || ['A', 'X'].includes(northWestCharacter)) continue;
			const southEast = new Vector2(x, y).addMotion(Direction.SOUTH_EAST);
			if (input[southEast.y]?.[southEast.x] !== WordLetterMap[northWestCharacter]) continue;

			const northEast = new Vector2(x, y).addMotion(Direction.NORTH_EAST);
			const northEastCharacter = input[northEast.y]?.[northEast.x];
			if (!northEastCharacter || ['A', 'X'].includes(northEastCharacter)) continue;
			const southWest = new Vector2(x, y).addMotion(Direction.SOUTH_WEST);
			if (input[southWest.y]?.[southWest.x] !== WordLetterMap[northEastCharacter]) continue;

			total++;
		}
	}

	return total;
};

await benchmark(2_024, 4, 2, solution);
