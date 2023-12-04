export type Vector2Like = {
	x: number;
	y: number;
};

export class Vector2 implements Vector2Like {
	public sizeX: number;

	public sizyY: number;

	public x: number;

	public y: number;

	public constructor(x: number, y: number, sizeX = 1, sizeY = 1) {
		this.x = x;
		this.y = y;
		this.sizeX = sizeX;
		this.sizyY = sizeY;
	}

	public isAdjacent(vector: Vector2) {
		for (let x = this.x; x < this.x + this.sizeX; x++) {
			for (let y = this.y; y < this.y + this.sizyY; y++) {
				const dx = Math.abs(x - vector.x);
				const dy = Math.abs(y - vector.y);
				if (dx <= vector.sizeX && dy <= vector.sizyY) return true;
			}
		}

		return false;
	}
}
