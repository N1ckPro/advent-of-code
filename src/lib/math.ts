export const greatestCommonDivisor = (a: number, b: number): number => {
	return b === 0 ? a : greatestCommonDivisor(b, a % b);
};

export const lowestCommonMultiple = (a: number, b: number) => {
	return Math.abs(a * b) / greatestCommonDivisor(a, b);
};
