import { Vector2 } from '../../../lib/vector2.js';

export class PartNumber extends Vector2 {
	public number: number;

	public constructor(x: number, y: number, sizeX: number, number: number) {
		super(x, y, sizeX);
		this.number = number;
	}
}
