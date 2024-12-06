import { benchmark, Direction, Vector2, type Solution } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	const startingY = input.findIndex((line) => line.includes('^'));
	const startingX = input[startingY].indexOf('^');
	let total = 0;

	for (let y = 0; y < input.length; y++) {
		for (let x = 0; x < input[0].length; x++) {
			if (x === startingX && y === startingY) continue;
			const guard = new Vector2(startingX, startingY);
			const direction = new Direction(0, -1);
			const newLine = input[y].split('').toSpliced(x, 1, '#').join('');
			const newInput = input.toSpliced(y, 1, newLine);
			const distinctLocations = new Set<string>();

			while (guard.x > 0 && guard.x < newInput[0].length - 1 && guard.y > 0 && guard.y < newInput.length - 1) {
				if (newInput[guard.y + direction.y][guard.x + direction.x] === '#') {
					const tempX = direction.x;
					direction.x = direction.y === 0 ? 0 : -direction.y;
					direction.y = direction.x === 0 ? tempX : 0;
				} else guard.addMotion(direction);

				const newPosition = `${guard.toString()},${direction.x},${direction.y}`;
				if (distinctLocations.has(newPosition)) {
					total++;
					break;
				}

				distinctLocations.add(newPosition);
			}
		}
	}

	return total;
};

await benchmark(2_024, 6, 2, solution);
