import { benchmark, type Solution } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) =>
	input.reduce((sum, line, index) => {
		const result = line.match(/mul\(\d{1,3},\d{1,3}\)/g);

		return (
			sum +
			(result?.reduce((sum, instruction) => {
				let lastEnabled = line.lastIndexOf('do()', line.indexOf(instruction));
				let lastDisabled = line.lastIndexOf("don't()", line.indexOf(instruction));

				if (lastEnabled === lastDisabled && index >= 1) {
					lastEnabled = input[index - 1].lastIndexOf('do()');
					lastDisabled = input[index - 1].lastIndexOf("don't()");
				}

				if (lastEnabled > lastDisabled || (index === 0 && lastDisabled === -1)) {
					const [a, b] = instruction
						.replaceAll(/[()lmu]/g, '')
						.split(',')
						.map(Number);
					return sum + a * b;
				}

				return sum;
			}, 0) ?? 0)
		);
	}, 0);

await benchmark(2_024, 3, 2, solution);
