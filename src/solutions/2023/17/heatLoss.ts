import { DirectionMarker, Direction } from '../../../lib/direction.js';
import { Vector2 } from '../../../lib/vector2.js';

const directions = [DirectionMarker.East, DirectionMarker.North, DirectionMarker.South, DirectionMarker.West];

const OppositeDirections = {
	[DirectionMarker.East]: DirectionMarker.West,
	[DirectionMarker.West]: DirectionMarker.East,
	[DirectionMarker.North]: DirectionMarker.South,
	[DirectionMarker.South]: DirectionMarker.North,
};

class Crucible extends Vector2 {
	public direction: DirectionMarker;

	public forwardCounter: number;

	public heatLoss: number;

	public constructor(x: number, y: number, direction: DirectionMarker, forwardCounter: number, heatLoss: number) {
		super(x, y);
		this.direction = direction;
		this.forwardCounter = forwardCounter;
		this.heatLoss = heatLoss;
	}
}

const cacheKey = (x: number, y: number, direction: DirectionMarker, forwardCounter: number) =>
	`${x}.${y}.${direction}.${forwardCounter}`;

export const getHeatLoss = (map: number[][], minForwardSteps: number, maxForwardSteps: number) => {
	const toVisit: Crucible[] = [
		new Crucible(0, 0, DirectionMarker.South, 0, 0),
		new Crucible(0, 0, DirectionMarker.East, 0, 0),
	];
	const heatLosses = new Map<string, number>();

	while (toVisit.length) {
		const crucible = toVisit.shift()!;
		if (crucible.x === map[0].length - 1 && crucible.y === map.length - 1 && crucible.forwardCounter >= minForwardSteps)
			return crucible.heatLoss;

		for (const adjacent of directions) {
			if (OppositeDirections[adjacent] === crucible.direction) continue;
			if (adjacent === crucible.direction && crucible.forwardCounter === maxForwardSteps) continue;
			if (adjacent !== crucible.direction && crucible.forwardCounter < minForwardSteps) continue;

			const newDirection = Direction.fromMarker(adjacent);
			const newX = crucible.x + newDirection.x;
			const newY = crucible.y + newDirection.y;
			if (newX < 0 || newY < 0 || newX >= map[0].length || newY >= map.length) continue;
			const newForwardCounter = adjacent === crucible.direction ? crucible.forwardCounter + 1 : 1;
			const newHeatLoss = crucible.heatLoss + map[newY][newX];

			const key = cacheKey(newX, newY, adjacent, newForwardCounter);
			const cacheValue = heatLosses.get(key);
			if (typeof cacheValue === 'undefined' || cacheValue > newHeatLoss) heatLosses.set(key, newHeatLoss);
			else continue;

			const position = toVisit.findLastIndex((v) => v.heatLoss < newHeatLoss);
			toVisit.splice(position + 1, 0, new Crucible(newX, newY, adjacent, newForwardCounter, newHeatLoss));
		}
	}

	return -1;
};
