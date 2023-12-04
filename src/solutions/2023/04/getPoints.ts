export const getPoints = (line: string) => {
	const [winningCards, myCards] = line
		.slice(line.indexOf(':') + 2)
		.trimStart()
		.split(' | ')
		.map((card) => card.split(/ +/).map(Number));

	let total = 0;
	for (const card of myCards) {
		if (winningCards.includes(card)) total++;
	}

	if (total > 0) return 2 ** (total - 1);
	return 0;
};
