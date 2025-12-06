import { benchmark, type Solution } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	const emptyLine = input.indexOf('');
	const freshRanges = input.splice(0, emptyLine);
	const ingredients = input.splice(1).map(Number);

	let freshIngredients = 0;
	for (const ingredient of ingredients) {
		for (const range of freshRanges) {
			const [start, end] = range.split('-').map(Number);
			if (ingredient >= start && ingredient <= end) {
				freshIngredients++;
				break;
			}
		}
	}

	return freshIngredients;
};

await benchmark(2_025, 5, 1, solution, false);
