import { readInput } from '../../../lib/input.ts';
import { solution as solution1 } from '../01/part1.ts';
import { solution as solution2 } from '../01/part2.ts';

const input = await readInput(1, '2024');
const testsInput = `3   4
4   3
2   5
1   3
3   9
3   3`.split(/\n/g);

describe('Lists should be checked correctly', () => {
	// Part 1
	test('Provided input should give 11', () => {
		expect(solution1(testsInput)).toBe(11);
	});
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(1_970_720);
	});

	// Part 2
	test('Provided input should give 31', () => {
		expect(solution2(testsInput)).toBe(31);
	});
	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(17_191_599);
	});
});
