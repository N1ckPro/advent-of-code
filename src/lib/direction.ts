import { Vector2 } from './vector2.js';

export enum DirectionMarker {
	East,
	North,
	South,
	West,
}

export enum DirectionLetterMarker {
	Down = 'D',
	Left = 'L',
	Right = 'R',
	Up = 'U',
}

export class Direction extends Vector2 {
	public static readonly EAST = Object.freeze(new Direction(1, 0));

	public static readonly NORTH = Object.freeze(new Direction(0, -1));

	public static readonly NORTH_EAST = Object.freeze(new Direction(1, -1));

	public static readonly NORTH_WEST = Object.freeze(new Direction(-1, -1));

	public static readonly SOUTH = Object.freeze(new Direction(0, 1));

	public static readonly SOUTH_EAST = Object.freeze(new Direction(1, 1));

	public static readonly SOUTH_WEST = Object.freeze(new Direction(-1, 1));

	public static readonly WEST = Object.freeze(new Direction(-1, 0));

	public static fromMarker(direction: DirectionMarker) {
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		return DirectionMap[direction];
	}

	public static fromLetterMarker(direction: DirectionLetterMarker) {
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		return DirectionLetterMap[direction];
	}
}

export const DirectionMap = {
	[DirectionMarker.East]: Direction.EAST,
	[DirectionMarker.North]: Direction.NORTH,
	[DirectionMarker.South]: Direction.SOUTH,
	[DirectionMarker.West]: Direction.WEST,
};

export const DirectionLetterMap = {
	[DirectionLetterMarker.Right]: Direction.EAST,
	[DirectionLetterMarker.Up]: Direction.NORTH,
	[DirectionLetterMarker.Down]: Direction.SOUTH,
	[DirectionLetterMarker.Left]: Direction.WEST,
};
