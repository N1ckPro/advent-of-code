import { getPointsForRace } from './getPointsForRace.ts';

export const getPointsForRaces = (input: string[]) => {
	const [times, distances] = input.map((line) =>
		line
			.slice(line.indexOf(':') + 1)
			.trimStart()
			.split(/ +/)
			.map(Number),
	);

	let result = 1;
	for (const [i, time] of times.entries()) {
		result *= getPointsForRace(time, distances[i]);
	}

	return result;
};
