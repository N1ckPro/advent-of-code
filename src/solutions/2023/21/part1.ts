import type { Solution } from '../../../lib/index.js';
import { Direction, Vector2, benchmark } from '../../../lib/index.js';

const directions = [Direction.EAST, Direction.NORTH, Direction.SOUTH, Direction.WEST];

export const solution: Solution<number> = (input: string[]) => {
	const y = input.findIndex((v) => v.includes('S'));
	const x = input[y].indexOf('S');
	let steps: Vector2[] = [new Vector2(x, y)];

	for (let i = 0; i < 64; i++) {
		const newSteps: Vector2[] = [];
		for (const step of steps) {
			for (const direction of directions) {
				if (['.', 'S'].includes(input[step.y + direction.y]?.[step.x + direction.x])) {
					const newStep = new Vector2(step.x + direction.x, step.y + direction.y);
					if (!newSteps.some((v) => v.x === newStep.x && v.y === newStep.y)) newSteps.push(newStep);
				}
			}
		}

		steps = newSteps;
	}

	return steps.length;
};

await benchmark(21, 1, solution);
