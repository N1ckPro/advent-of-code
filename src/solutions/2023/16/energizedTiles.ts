import { Direction, DirectionMarker } from '../../../lib/direction.ts';

const SlashMirrorMap = {
	[DirectionMarker.North]: DirectionMarker.East,
	[DirectionMarker.South]: DirectionMarker.West,
	[DirectionMarker.East]: DirectionMarker.North,
	[DirectionMarker.West]: DirectionMarker.South,
};

const BackslashMirrorMap = {
	[DirectionMarker.North]: DirectionMarker.West,
	[DirectionMarker.South]: DirectionMarker.East,
	[DirectionMarker.West]: DirectionMarker.North,
	[DirectionMarker.East]: DirectionMarker.South,
};

class Beam extends Direction {
	public direction: DirectionMarker;

	public constructor(direction: DirectionMarker, x = 0, y = 0) {
		super(x, y);
		this.direction = direction;
	}

	public changeMotion(direction: DirectionMarker) {
		this.addMotion(Direction.fromMarker(direction));
		this.direction = direction;
	}
}

export const getEnergizedTiles = (input: string[], x: number, y: number, direction: DirectionMarker) => {
	const beams = new Set<Beam>().add(new Beam(direction, x, y));
	const energizedTiles = new Map<string, DirectionMarker[]>();

	while (beams.size > 0) {
		for (const beam of beams) {
			if (beam.x < 0 || beam.y < 0 || beam.x >= input[0].length || beam.y >= input.length) {
				beams.delete(beam);
				continue;
			}

			const direction = Direction.fromMarker(beam.direction);
			const char = input[beam.y][beam.x];
			if (energizedTiles.get(beam.toString())?.includes(beam.direction) && char !== '.') {
				beams.delete(beam);
				continue;
			}

			if (!energizedTiles.has(beam.toString()) + beam.direction.toString()) {
				const directions = energizedTiles.get(beam.toString()) ?? [];
				energizedTiles.set(beam.toString(), [...directions, beam.direction]);
			}

			let newBeam: Beam = null!;

			switch (char) {
				case '.':
					beam.addMotion(direction);
					continue;
				case '|':
					if ([DirectionMarker.East, DirectionMarker.West].includes(beam.direction)) {
						beam.changeMotion(DirectionMarker.North);
						newBeam = new Beam(DirectionMarker.South, beam.x, beam.y + 1);
						newBeam.addMotion(Direction.fromMarker(newBeam.direction));
					} else beam.addMotion(direction);
					break;
				case '-':
					if ([DirectionMarker.North, DirectionMarker.South].includes(beam.direction)) {
						beam.changeMotion(DirectionMarker.East);
						newBeam = new Beam(DirectionMarker.West, beam.x - 1, beam.y);
						newBeam.addMotion(Direction.fromMarker(newBeam.direction));
					} else beam.addMotion(direction);
					break;
				case '/':
					beam.changeMotion(SlashMirrorMap[beam.direction]);
					continue;
				default:
					beam.changeMotion(BackslashMirrorMap[beam.direction]);
					continue;
			}

			if (newBeam) beams.add(newBeam);
		}
	}

	return energizedTiles.size;
};
