import { benchmark, type Solution } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) =>
	input.reduce((sum, line) => {
		const result = line.match(/mul\(\d{1,3},\d{1,3}\)/g);
		return (
			sum +
			(result?.reduce((sum, instruction) => {
				const [a, b] = instruction
					.replaceAll(/[()lmu]/g, '')
					.split(',')
					.map(Number);
				return sum + a * b;
			}, 0) ?? 0)
		);
	}, 0);

await benchmark(2_024, 3, 1, solution);
