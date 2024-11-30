import { readInput } from '../../../lib/input.ts';
import { solution as solution1 } from '../18/part1.ts';
import { solution as solution2 } from '../18/part2.ts';

const input = await readInput(18, '2023');

describe('Dig plan should be parsed correctly', () => {
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(74_074);
	});

	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(112_074_045_986_829);
	});
});
