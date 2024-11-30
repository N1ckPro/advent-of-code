import type { Solution } from '../../../lib/index.js';
import { Vector2, benchmark } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	const roundedRocks: Vector2[] = [];
	const cubeShapedRocks: Vector2[] = [];

	for (const [y, line] of input.entries()) {
		// eslint-disable-next-line unicorn/no-for-loop
		for (let x = 0; x < line.length; x++) {
			if (line[x] === 'O') roundedRocks.push(new Vector2(x, y));
			else if (line[x] === '#') cubeShapedRocks.push(new Vector2(x, y));
		}
	}

	for (const rock of roundedRocks) {
		const nextRoundedRock = roundedRocks.findLast((v) => v.x === rock.x && v.y < rock.y);
		const nextShapedRock = cubeShapedRocks.findLast((v) => v.x === rock.x && v.y < rock.y);

		let distance = rock.y;
		if (nextRoundedRock) distance = Math.min(rock.y - nextRoundedRock.y - 1, distance);
		if (nextShapedRock) distance = Math.min(rock.y - nextShapedRock.y - 1, distance);
		rock.addMotion(new Vector2(0, -distance));
	}

	return roundedRocks.reduce((sum, rock) => sum + (input.length - rock.y), 0);
};

await benchmark(2_023, 14, 1, solution);
