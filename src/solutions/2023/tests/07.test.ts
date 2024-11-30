import { readInput } from '../../../lib/input.ts';
import { solution as solution1 } from '../07/part1.ts';
import { solution as solution2 } from '../07/part2.ts';

const input = await readInput(7, '2023');

describe('Card games should be parsed successfully', () => {
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(248_217_452);
	});

	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(245_576_185);
	});
});
