export const getScratchcards = (input: string[]) => {
	const cards: Map<number, number> = new Map([...Array.from({ length: input.length }).keys()].map((i) => [i, 1]));
	for (const [i, line] of input.entries()) {
		const [winningCards, myCards] = line
			.slice(line.indexOf(':') + 2)
			.trimStart()
			.split(' | ')
			.map((card) => card.split(/ +/).map(Number));

		let total = 0;
		for (const card of myCards) {
			if (winningCards.includes(card)) total++;
		}

		for (let j = i + 1; j <= i + total; j++) {
			if (cards.get(j)) cards.set(j, cards.get(j)! + cards.get(i)!);
		}
	}

	return Array.from(cards.values()).reduce((a, b) => a + b);
};
