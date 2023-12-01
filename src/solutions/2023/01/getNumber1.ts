export const getNumber = (line: string) => {
	let first;
	let last;
	for (const [match] of line.matchAll(/[1-9]/g)) {
		if (!first) first = match;
		last = match;
	}

	if (first) return Number(first + last);
};
