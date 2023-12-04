import { readInput } from '../../../lib/input.ts';
import { getGearRations } from '../03/getGearRatios.ts';
import { getPartNumbers } from '../03/getPartNumbers.ts';
import { solution as solution1 } from '../03/part1.ts';
import { solution as solution2 } from '../03/part2.ts';

const input = await readInput(3);
const testsInput = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
..%...$111
.664.598..`.split(/\n/g);

describe('Numbers should be parsed and checked for adjacement correctly', () => {
	// Part 1
	test('Provided input should give 4472', () => {
		expect(getPartNumbers(testsInput)).toBe(4_472);
	});
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(539_713);
	});

	// Part 2
	test('Provided input should give 16345', () => {
		expect(getGearRations(testsInput)).toBe(16_345);
	});
	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(84_159_075);
	});
});
