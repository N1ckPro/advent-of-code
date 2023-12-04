import type { Solution } from '../../../lib/index.js';
import { benchmark } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	let result = 0;
	for (const line of input) {
		const [winningCards, myCards] = line
			.slice(line.indexOf(':') + 2)
			.trimStart()
			.split(' | ')
			.map((card) => card.split(/ +/).map(Number));

		let total = 0;
		for (const card of myCards) {
			if (winningCards.includes(card)) total++;
		}

		if (total > 0) result += 2 ** (total - 1);
	}

	return result;
};

await benchmark(4, 1, solution);
