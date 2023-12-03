import { Vector2 } from '../../../lib/vector2.js';
import { PartNumber } from './shared.js';

export const getGearRations = (input: string[]) => {
	let result = 0;

	const possibleGears: Vector2[] = [];
	const numbers: PartNumber[] = [];
	let number = '';

	for (const [y, line] of input.entries()) {
		for (let x = 0; x < line.length; x++) {
			const char = line[x];

			if (/\d/.test(char)) {
				number += char;
				if (x === line.length - 1) {
					numbers.push(new PartNumber(x - number.length, y, number.length, Number(number)));
					number = '';
				}
			} else {
				if (number !== '') numbers.push(new PartNumber(x - number.length, y, number.length, Number(number)));
				if (char === '*') possibleGears.push(new Vector2(x, y));
				number = '';
			}
		}
	}

	for (const possibleGear of possibleGears) {
		const adjacentNumbers = numbers.filter((number) => number.isAdjacent(possibleGear));
		if (adjacentNumbers.length !== 2) continue;

		result += adjacentNumbers[0].number * adjacentNumbers[1].number;
	}

	return result;
};
