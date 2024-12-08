import { readInput } from '../../../lib/input.ts';
import { solution as solution1 } from '../08/part1.ts';
import { solution as solution2 } from '../08/part2.ts';

const input = await readInput(8, '2024');
const testsInput = `............
........0...
.....0......
.......0....
....0.......
......A.....
............
............
........A...
.........A..
............
............`.split(/\n/g);

describe('How can one forget about the effects of resonant harmonics', () => {
	// Part 1
	test('Provided input should give 14', () => {
		expect(solution1(testsInput)).toBe(14);
	});
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(348);
	});

	// Part 2
	test('Provided input should give 34', () => {
		expect(solution2(testsInput)).toBe(34);
	});
	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(1_221);
	});
});
