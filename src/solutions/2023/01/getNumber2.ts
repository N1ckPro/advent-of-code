enum Numbers {
	eight = '8',
	five = '5',
	four = '4',
	nine = '9',
	one = '1',
	seven = '7',
	six = '6',
	three = '3',
	two = '2',
}
const regex = new RegExp(`(?=([1-9]|${Object.keys(Numbers).join('|')}))`, 'g');

export const getNumber = (line: string) => {
	let first;
	let last;
	for (const [, rawMatch] of line.matchAll(regex)) {
		const match = /\d/.test(rawMatch) ? rawMatch : Numbers[rawMatch as keyof typeof Numbers];
		if (!first) first = match;
		last = match;
	}

	if (first) return Number(first + last);
};
