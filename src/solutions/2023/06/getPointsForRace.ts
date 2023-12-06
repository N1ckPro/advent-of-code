export const getPointsForRace = (input: string[]) => {
	const [time, distance] = input.map((line) => Number(line.slice(line.indexOf(':') + 1).replaceAll(/ +/g, '')));

	let result = 0;
	for (let i = 0; i < time; i++) {
		const distanceTravelled = -((i - time / 2) ** 2) + (time / 2) ** 2;
		if (distanceTravelled > distance) result++;
	}

	return result;
};
