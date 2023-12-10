import { Vector2 } from './vector2.js';

export enum DirectionMarker {
	East = 'E',
	North = 'N',
	South = 'S',
	West = 'W',
}

export class Direction extends Vector2 {
	public static readonly EAST = Object.freeze(new Direction(1, 0));

	public static readonly NORTH = Object.freeze(new Direction(0, -1));

	public static readonly SOUTH = Object.freeze(new Direction(0, 1));

	public static readonly WEST = Object.freeze(new Direction(-1, 0));

	public static fromMarker(direction: DirectionMarker) {
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		return DirectionMap[direction];
	}
}

export const DirectionMap = {
	[DirectionMarker.East]: Direction.EAST,
	[DirectionMarker.North]: Direction.NORTH,
	[DirectionMarker.South]: Direction.SOUTH,
	[DirectionMarker.West]: Direction.WEST,
};
