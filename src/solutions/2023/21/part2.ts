import type { Solution } from '../../../lib/index.js';
import { Direction, Vector2, benchmark } from '../../../lib/index.js';

const directions = [Direction.EAST, Direction.NORTH, Direction.SOUTH, Direction.WEST];

const getX = (xLength: number, x: number) => {
	return x >= 0 ? x % xLength : (xLength + (x % xLength)) % xLength;
};

const getY = (yLength: number, y: number) => {
	return y >= 0 ? y % yLength : (yLength + (y % yLength)) % yLength;
};

const calculateSteps = (input: string[], start: Vector2, steps: number): number => {
	const checked = new Set<string>();
	let plots = 0;
	const array: [Vector2, number][] = [[start, 0]];
	const evenCheck = steps % 2;
	while (array.length) {
		const [step, stepsCount] = array.shift()!;
		const key = step.toString();
		if (checked.has(key) || stepsCount > steps) continue;
		checked.add(key);

		if (evenCheck === stepsCount % 2) plots++;
		for (const direction of directions) {
			const newStep = new Vector2(step.x + direction.x, step.y + direction.y);
			if (input[getY(input.length, newStep.y)][getX(input[0].length, newStep.x)] !== '#')
				array.push([newStep, stepsCount + 1]);
		}
	}

	return plots;
};

export const solution: Solution<number> = (input: string[]) => {
	const y = input.findIndex((v) => v.includes('S'));
	const x = input[y].indexOf('S');
	const start = new Vector2(x, y);

	const steps = 26_501_365;
	const toEdge = Math.floor(input[0].length - 1 - start.y);
	const n = Math.floor((steps - toEdge) / input[0].length);
	const [x0, x1, x2] = [0, 1, 2].map((v) => calculateSteps(input, start, toEdge + v * input[0].length));
	const c = x0;
	const a = (x2 - 2 * x1 + x0) / 2;
	const b = x1 - x0 - a;
	return a * n ** 2 + b * n + c;
};

await benchmark(21, 2, solution);
