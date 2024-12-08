import { readInput } from '../../../lib/input.ts';
import { solution as solution1 } from '../07/part1.ts';
import { solution as solution2 } from '../07/part2.ts';

const input = await readInput(7, '2024');
const testsInput = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`.split(/\n/g);

describe("When you get an 11 digit answer and it's still too low", () => {
	// Part 1
	test('Provided input should give 3749', () => {
		expect(solution1(testsInput)).toBe(3_749);
	});
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(5_030_892_084_481);
	});

	// Part 2
	test('Provided input should give 11387', () => {
		expect(solution2(testsInput)).toBe(11_387);
	});
	// this algorithm takes too much time to run in CI lol
	test.skip('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(91_377_448_644_679);
	});
});
