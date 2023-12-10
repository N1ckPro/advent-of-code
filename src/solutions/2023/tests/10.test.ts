import { readInput } from '../../../lib/input.ts';
import { solution as solution1 } from '../10/part1.ts';

const input = await readInput(10);

describe('Card games should be parsed successfully', () => {
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(6_701);
	});
});
