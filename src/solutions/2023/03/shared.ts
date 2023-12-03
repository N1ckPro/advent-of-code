import { Vector2 } from '../../../lib/vector2.js';

export class PartNumber extends Vector2 {
	public number: number;

	public constructor(x: number, y: number, sizeX: number, number: number) {
		super(x, y, sizeX);
		this.number = number;
	}
}

export const testsInput = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
..%...$111
.664.598..`.split(/\n/g);
