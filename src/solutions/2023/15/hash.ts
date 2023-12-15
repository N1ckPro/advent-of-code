export const hash = (input: string) => {
	let result = 0;
	for (const char of input) {
		result += char.codePointAt(0)!;
		result *= 17;
		result %= 256;
	}

	return result;
};
