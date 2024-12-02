import { readInput } from '../../../lib/input.ts';
import { solution as solution1 } from '../02/part1.ts';
import { solution as solution2 } from '../02/part2.ts';

const input = await readInput(2, '2024');
const testsInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`.split(/\n/g);

describe('Reports should be checked correctly', () => {
	// Part 1
	test('Provided input should give 2', () => {
		expect(solution1(testsInput)).toBe(2);
	});
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(585);
	});

	// Part 2
	test('Provided input should give 4', () => {
		expect(solution2(testsInput)).toBe(4);
	});
	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(626);
	});
});
