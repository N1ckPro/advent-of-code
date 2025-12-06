import { benchmark, type Solution } from '../../../lib/index.ts';

export const solution: Solution<number> = (input: string[]) => {
	const freshRanges = input.splice(0, input.indexOf('')).map((range) => range.split('-').map(Number));

	for (let i = 0; i < freshRanges.length; i++) {
		const range = freshRanges[i];

		for (let j = 0; j < i; j++) {
			const current = freshRanges[j];
			if (range[0] >= current[0] && range[0] <= current[1]) range[0] = current[0];
		}

		for (let j = 0; j < i; j++) {
			const current = freshRanges[j];
			if (range[1] >= current[0] && range[1] <= current[1]) range[1] = current[1];
		}

		for (const [j, current] of freshRanges.entries()) {
			if (i === j) continue;
			if (range[0] <= current[0] && range[1] >= current[1]) current.splice(0, current.length);
		}
	}

	return freshRanges.filter((range) => range.length === 2).reduce((total, curr) => total + (curr[1] - curr[0] + 1), 0);
};

await benchmark(2_025, 5, 2, solution, false);
