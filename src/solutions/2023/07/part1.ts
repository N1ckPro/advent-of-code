import { benchmark, type Solution } from '../../../lib/index.js';
import { getHandType } from './shared.js';

enum HandCardValue {
	T = 10,
	J,
	Q,
	K,
	A,
}

const compareGames = (a: string, b: string) => {
	for (let i = 0; i < 5; i++) {
		const diff =
			(HandCardValue[a[i] as keyof typeof HandCardValue] ?? Number(a[i])) -
			(HandCardValue[b[i] as keyof typeof HandCardValue] ?? Number(b[i]));
		if (diff !== 0) return diff;
	}

	return 0;
};

export const solution: Solution<number> = (input: string[]) => {
	const games: [string, number][] = input.map((line) => line.split(' ')).map((v) => [v[0], Number(v[1])]);

	const parsedGames = games.map((game) => {
		const parsedChars = game[0].split('').reduce((map, curr) => {
			map.set(curr, (map.get(curr) ?? 0) + 1);
			return map;
		}, new Map<string, number>());
		const sortedChars = [...parsedChars.entries()].sort((a, b) => b[1] - a[1]);

		return [game[0], game[1], getHandType(sortedChars)] as const;
	});

	const sortedGames = parsedGames.sort((a, b) => {
		return b[2] > a[2] ? -1 : b[2] < a[2] ? 1 : compareGames(a[0], b[0]);
	});

	return sortedGames.reduce((sum, curr, index) => {
		return sum + curr[1] * (index + 1);
	}, 0);
};

await benchmark(7, 1, solution);
