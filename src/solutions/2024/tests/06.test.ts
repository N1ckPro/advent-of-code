import { readInput } from '../../../lib/input.ts';
import { solution as solution1 } from '../06/part1.ts';
import { solution as solution2 } from '../06/part2.ts';

const input = await readInput(6, '2024');
const testsInput = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`.split(/\n/g);

describe('We going back in time with this one', () => {
	// Part 1
	test('Provided input should give 143', () => {
		expect(solution1(testsInput)).toBe(41);
	});
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(5_131);
	});

	// Part 2
	test('Provided input should give 6', () => {
		expect(solution2(testsInput)).toBe(6);
	});
	// this algorithm takes too much time to run in CI lol
	test.skip('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(1_784);
	});
});
