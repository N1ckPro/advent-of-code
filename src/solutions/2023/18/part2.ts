import type { Solution } from '../../../lib/index.js';
import { Direction, DirectionLetterMarker, Vector2, benchmark } from '../../../lib/index.js';

const DirectionMap = {
	'0': DirectionLetterMarker.Right,
	'1': DirectionLetterMarker.Down,
	'2': DirectionLetterMarker.Left,
	'3': DirectionLetterMarker.Up,
};

export const solution: Solution<number> = (input: string[]) => {
	const position = new Vector2(0, 0);
	let area = 0;
	let circumference = 0;
	for (const line of input) {
		const data = line.split(' ')[2].slice(2, 8);
		const distance = Number.parseInt(data.slice(0, 5), 16);
		const direction = Direction.fromLetterMarker(DirectionMap[data.at(-1)! as keyof typeof DirectionMap]);
		circumference += distance;

		const newX = position.x + direction.x * distance;
		const newY = position.y + direction.y * distance;
		area += position.x * newY - position.y * newX;

		position.addMotion({
			x: direction.x * distance,
			y: direction.y * distance,
		});
	}

	area = Math.abs(area) / 2;
	const interior = area - circumference / 2 + 1;
	return interior + circumference;
};

await benchmark(2_023, 18, 2, solution);
