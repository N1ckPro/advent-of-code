import type { DirectionLetterMarker, Solution } from '../../../lib/index.js';
import { Direction, Vector2, benchmark } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	const position = new Vector2(0, 0);
	let area = 0;
	let circumference = 0;
	for (const line of input) {
		const [directionLetter, distanceString] = line.split(' ');
		const direction = Direction.fromLetterMarker(directionLetter as DirectionLetterMarker);
		const distance = Number(distanceString);
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

await benchmark(18, 1, solution);
