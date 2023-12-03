import { getMinCubes } from './getMinCubes.ts';

describe('Sets should be checked correctly', () => {
	test('13 red, 8 green; 15 green, 3 red; 1 blue, 9 red, 18 green; 2 green, 12 red; 15 green, 9 red should give 234', () => {
		expect(
			getMinCubes(
				'13 red, 8 green; 15 green, 3 red; 1 blue, 9 red, 18 green; 2 green, 12 red; 15 green, 9 red'.split('; '),
			),
		).toBe(234);
	});
	test('2 green, 2 blue; 2 green, 3 red, 4 blue; 8 red, 1 blue, 1 green should give 64', () => {
		expect(getMinCubes('2 green, 2 blue; 2 green, 3 red, 4 blue; 8 red, 1 blue, 1 green'.split('; '))).toBe(64);
	});
});
