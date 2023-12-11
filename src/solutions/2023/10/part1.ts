import { Direction, DirectionMarker, Vector2, benchmark, type Solution } from '../../../lib/index.js';

const PipeDirections = {
	'|': [DirectionMarker.North, DirectionMarker.South],
	'-': [DirectionMarker.East, DirectionMarker.West],
	L: [DirectionMarker.North, DirectionMarker.East],
	J: [DirectionMarker.North, DirectionMarker.West],
	'7': [DirectionMarker.South, DirectionMarker.West],
	F: [DirectionMarker.South, DirectionMarker.East],
};

const OppositeDirections = {
	[DirectionMarker.North]: DirectionMarker.South,
	[DirectionMarker.South]: DirectionMarker.North,
	[DirectionMarker.East]: DirectionMarker.West,
	[DirectionMarker.West]: DirectionMarker.East,
};

const isDirection = (tile: string): tile is keyof typeof PipeDirections => !['S', '.', undefined].includes(tile);

export const solution: Solution<number> = (input: string[]) => {
	const sketch = input.map((line) => line.split('')) as (keyof typeof PipeDirections | '.' | 'S')[][];
	const startY = sketch.findIndex((line) => line.includes('S'));
	const position = new Vector2(sketch[startY].indexOf('S'), startY);

	let nextPosition: Vector2;
	let previousDirection: DirectionMarker;
	const west = sketch[position.y][position.x - 1];
	const east = sketch[position.y][position.x + 1];
	const north = sketch[position.y - 1][position.y];
	if (isDirection(west) && PipeDirections[west].includes(DirectionMarker.East)) {
		nextPosition = new Vector2(position.x - 1, position.y);
		previousDirection = DirectionMarker.West;
	} else if (isDirection(east) && PipeDirections[east].includes(DirectionMarker.West)) {
		nextPosition = new Vector2(position.x + 1, position.y);
		previousDirection = DirectionMarker.East;
	} else if (isDirection(north) && PipeDirections[north].includes(DirectionMarker.South)) {
		nextPosition = new Vector2(position.x, position.y - 1);
		previousDirection = DirectionMarker.North;
	} else {
		nextPosition = new Vector2(position.x, position.y + 1);
		previousDirection = DirectionMarker.South;
	}

	let i = 1;
	while (nextPosition.x !== position.x || nextPosition.y !== position.y) {
		const nextDirection = PipeDirections[sketch[nextPosition.y][nextPosition.x] as keyof typeof PipeDirections].find(
			// eslint-disable-next-line @typescript-eslint/no-loop-func
			(v) => OppositeDirections[v] !== previousDirection,
		)!;
		nextPosition.addMotion(Direction.fromMarker(nextDirection));
		i++;
		previousDirection = nextDirection;
	}

	return i / 2;
};

await benchmark(10, 1, solution);
