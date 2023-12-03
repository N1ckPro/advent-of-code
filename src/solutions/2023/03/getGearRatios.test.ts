import { getGearRations } from './getGearRatios.ts';
import { testsInput } from './shared.ts';

describe('Numbers should be parsed and checked for adjacement correctly', () => {
	test('Provided input should give 16345', () => {
		expect(getGearRations(testsInput)).toBe(16_345);
	});
});
