import { benchmark, Direction, Vector2, type Solution } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	const antinodes = new Set<string>();
	const frequencies = new Map<string, string[]>();

	for (let y = 0; y < input.length; y++) {
		for (let x = 0; x < input[0].length; x++) {
			const character = input[y][x];
			if (character === '.') continue;

			const currentCache = frequencies.get(character) ?? [];
			frequencies.set(character, [...currentCache, `${x},${y}`]);
		}
	}

	for (const [, frequency] of frequencies) {
		while (frequency.length > 1) {
			for (let i = 1; i < frequency.length; i++) {
				const [x1, y1] = frequency[0].split(',').map(Number);
				const [x2, y2] = frequency[i].split(',').map(Number);
				const distance = new Direction(x1 - x2, y1 - y2);
				antinodes.add(`${x1},${y1}`);
				antinodes.add(`${x2},${y2}`);

				const firstAntinodes = new Vector2(x1, y1);
				while (
					firstAntinodes.addMotion(distance) &&
					firstAntinodes.x >= 0 &&
					firstAntinodes.x < input[0].length &&
					firstAntinodes.y >= 0 &&
					firstAntinodes.y < input.length
				) {
					antinodes.add(firstAntinodes.toString());
				}

				const secondAntinodes = new Vector2(x2, y2);
				while (
					secondAntinodes.addMotion({ x: -distance.x, y: -distance.y }) &&
					secondAntinodes.x >= 0 &&
					secondAntinodes.x < input[0].length &&
					secondAntinodes.y >= 0 &&
					secondAntinodes.y < input.length
				) {
					antinodes.add(secondAntinodes.toString());
				}
			}

			frequency.splice(0, 1);
		}
	}

	return antinodes.size;
};

await benchmark(2_024, 8, 2, solution);
