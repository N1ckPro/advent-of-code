import { getPartNumbers } from './getPartNumbers.ts';
import { testsInput } from './shared.ts';

describe('Numbers should be parsed and checked for adjacement correctly', () => {
	test('Provided input should give 4472', () => {
		expect(getPartNumbers(testsInput)).toBe(4_472);
	});
});
