import { readInput } from '../../../lib/input.ts';
import { getPointsForRace } from '../06/getPointsForRace.ts';
import { getPointsForRaces } from '../06/getPointsForRaces.ts';
import { solution as solution1 } from '../06/part1.ts';
import { solution as solution2 } from '../06/part2.ts';

const input = await readInput(6);
const testsInput = `Time:      7  15   30
Distance:  9  40  200`.split(/\n/g);

describe('Races should be parsed correctly', () => {
	// Part 1
	test('Multiple races should be parsed correctly', () => {
		expect(getPointsForRaces(testsInput)).toBe(288);
	});
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(2_344_708);
	});

	// Part 2
	test('One single race should be parsed correctly', () => {
		expect(getPointsForRace(71_530, 940_200)).toBe(71_503);
	});
	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(30_125_202);
	});
});
