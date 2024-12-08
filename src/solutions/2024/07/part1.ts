import { benchmark, type Solution } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	let calibration = 0;

	// eslint-disable-next-line no-labels
	lines: for (const line of input) {
		const [rawTotal, rawOperators] = line.split(': ');
		const total = Number(rawTotal);
		const operators = rawOperators.split(' ').map(Number);

		for (let i = 0; i < 2 ** (operators.length - 1); i++) {
			const binary = i.toString(2);
			const option = `${'0'.repeat(operators.length - 1 - binary.length)}${binary}`;
			const result = operators
				.slice(1)
				.reduce((sum, current, index) => (option[index] === '0' ? sum + current : sum * current), operators[0]);
			if (result === total) {
				calibration += result;
				// eslint-disable-next-line no-labels
				continue lines;
			}
		}
	}

	return calibration;
};

await benchmark(2_024, 7, 1, solution);
