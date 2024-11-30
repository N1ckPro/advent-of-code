import { readInput } from '../../../lib/input.ts';
import { checkSets } from '../02/checkSets.ts';
import { getMinCubes } from '../02/getMinCubes.ts';
import { solution as solution1 } from '../02/part1.ts';
import { solution as solution2 } from '../02/part2.ts';

const input = await readInput(2, '2023');
describe('Sets should be checked correctly', () => {
	// Part 1
	test('Sets should be correctly checked if they can be played with', () => {
		expect(
			checkSets(
				'13 red, 8 green; 15 green, 3 red; 1 blue, 9 red, 18 green; 2 green, 12 red; 15 green, 9 red'.split('; '),
			),
		).toBe(false);
		expect(checkSets('2 green, 2 blue; 2 green, 3 red, 4 blue; 8 red, 1 blue, 1 green'.split('; '))).toBe(true);
	});
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(1_853);
	});

	// Part 2
	test('Sets should be parsed to return minimum number of cubes required for a game', () => {
		expect(
			getMinCubes(
				'13 red, 8 green; 15 green, 3 red; 1 blue, 9 red, 18 green; 2 green, 12 red; 15 green, 9 red'.split('; '),
			),
		).toBe(234);
		expect(getMinCubes('2 green, 2 blue; 2 green, 3 red, 4 blue; 8 red, 1 blue, 1 green'.split('; '))).toBe(64);
	});
	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(72_706);
	});
});
