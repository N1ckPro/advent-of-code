import { readInput } from '../../../lib/input.ts';
import { solution as solution1 } from '../21/part1.ts';
import { solution as solution2 } from '../21/part2.ts';

const input = await readInput(21, '2023');

describe('Steps should be counted correctly', () => {
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(3_697);
	});

	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(608_152_828_731_262);
	});
});
