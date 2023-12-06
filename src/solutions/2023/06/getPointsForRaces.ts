export const getPointsForRaces = (input: string[]) => {
	const [time, distance] = input.map((line) =>
		line
			.slice(line.indexOf(':') + 1)
			.trimStart()
			.split(/ +/)
			.map(Number),
	);

	let result = 1;
	for (const [i, element] of time.entries()) {
		let success = 0;

		for (let j = 0; j < element; j++) {
			const distanceTravelled = -((j - element / 2) ** 2) + (element / 2) ** 2;
			if (distanceTravelled > distance[i]) success++;
		}

		result *= success;
	}

	return result;
};
