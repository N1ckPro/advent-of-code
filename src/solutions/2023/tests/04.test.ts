import { readInput } from '../../../lib/input.ts';
import { getPoints } from '../04/getPoints.ts';
import { getScratchcards } from '../04/getScratchcards.ts';
import { solution as solution1 } from '../04/part1.ts';
import { solution as solution2 } from '../04/part2.ts';

const input = await readInput(4);
const testsInput = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`.split(/\n/g);

describe('Cards should be parsed correctly', () => {
	// Part 1
	test('Points should be counted correctly', () => {
		expect(getPoints(testsInput[0])).toBe(8);
		expect(getPoints(testsInput[1])).toBe(2);
		expect(getPoints(testsInput[5])).toBe(0);
	});
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(23_235);
	});

	// Part 2
	test('Scratchcards should be counted correctly', () => {
		expect(getScratchcards(testsInput)).toBe(30);
	});
	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(5_920_640);
	});
});
