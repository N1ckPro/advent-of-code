import { benchmark, Direction, Vector2, type Solution } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	const distinctLocations = new Set<string>();
	const y = input.findIndex((line) => line.includes('^'));
	const x = input[y].indexOf('^');
	const guard = new Vector2(x, y);
	const direction = new Direction(0, -1);

	while (guard.x > 0 && guard.x < input[0].length - 1 && guard.y > 0 && guard.y < input.length - 1) {
		if (input[guard.y + direction.y][guard.x + direction.x] === '#') {
			const tempX = direction.x;
			direction.x = direction.y === 0 ? 0 : -direction.y;
			direction.y = direction.x === 0 ? tempX : 0;
		} else guard.addMotion(direction);

		distinctLocations.add(guard.toString());
	}

	return distinctLocations.size;
};

await benchmark(2_024, 6, 1, solution);
