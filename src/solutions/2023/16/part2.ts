import type { Solution } from '../../../lib/index.js';
import { DirectionMarker, benchmark } from '../../../lib/index.js';
import { getEnergizedTiles } from './energizedTiles.js';

export const solution: Solution<number> = (input: string[]) => {
	let highest = 0;

	for (let x = 0; x <= input[0].length; x++) {
		highest = Math.max(highest, getEnergizedTiles(input, x, 0, DirectionMarker.South));
	}

	for (let x = 0; x <= input[0].length; x++) {
		highest = Math.max(highest, getEnergizedTiles(input, x, input.length - 1, DirectionMarker.North));
	}

	for (let y = 0; y <= input.length; y++) {
		highest = Math.max(highest, getEnergizedTiles(input, 0, y, DirectionMarker.East));
	}

	for (let y = 0; y <= input.length; y++) {
		highest = Math.max(highest, getEnergizedTiles(input, input[0].length - 1, y, DirectionMarker.West));
	}

	return highest;
};

await benchmark(16, 2, solution);
