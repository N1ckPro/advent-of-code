import { benchmark, type Solution } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	const rawRules = input.splice(0, input.indexOf(''));
	const rules = new Map<number, number[]>();
	for (const rule of rawRules) {
		const [a, b] = rule.split('|').map(Number);
		const numberRules = rules.get(a) ?? [];
		numberRules.push(b);
		rules.set(a, numberRules);
	}

	let total = 0;
	for (const rawUpdate of input.slice(1)) {
		const updates = rawUpdate.split(',').map(Number);
		if (
			updates.every((update, index) => {
				const nextUpdates = updates.slice(index);
				const rule = rules.get(update);
				return nextUpdates.every((part) => part === update || rule?.includes(part));
			})
		)
			total += updates.at((updates.length - 1) / 2)!;
	}

	return total;
};

await benchmark(2_024, 5, 1, solution, false);
