import { readInput } from '../../../lib/input.ts';
import { solution as solution1 } from '../09/part1.ts';
import { solution as solution2 } from '../09/part2.ts';

const input = await readInput(9);

describe('Card games should be parsed successfully', () => {
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(1_868_368_343);
	});

	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(1_022);
	});
});
