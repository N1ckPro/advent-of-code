import { Vector2 } from '../../../lib/vector2.js';
import { PartNumber } from './shared.js';

export const getPartNumbers = (input: string[]) => {
	const symbols: Vector2[] = [];
	const numbers: PartNumber[] = [];
	let number = '';

	for (const [y, element] of input.entries()) {
		for (let x = 0; x < element.length; x++) {
			const char = element[x];

			if (/\d/.test(char)) {
				number += char;
				if (x === element.length - 1) {
					numbers.push(new PartNumber(x - number.length, y, number.length, Number(number)));
					number = '';
				}
			} else {
				if (number !== '') numbers.push(new PartNumber(x - number.length, y, number.length, Number(number)));
				if (char !== '.') symbols.push(new Vector2(x, y));
				number = '';
			}
		}
	}

	let result = 0;
	for (const number of numbers) {
		if (symbols.some((symbol) => number.isAdjacent(symbol))) result += number.number;
	}

	return result;
};
