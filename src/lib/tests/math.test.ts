import { greatestCommonDivisor, lowestCommonMultiple } from '../math.ts';

describe('Math functions should work correctly', () => {
	test('greatestCommonDivisor', () => {
		expect(greatestCommonDivisor(5, 10)).toBe(5);
		expect(greatestCommonDivisor(2, 9)).toBe(1);
	});

	test('lowestCommonMultiple', () => {
		expect(lowestCommonMultiple(5, 10)).toBe(10);
		expect(lowestCommonMultiple(2, 9)).toBe(18);
		expect(lowestCommonMultiple(8, 10)).toBe(40);
	});
});
