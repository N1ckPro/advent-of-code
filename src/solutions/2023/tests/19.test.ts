import { readInput } from '../../../lib/input.ts';
import { solution as solution1 } from '../19/part1.ts';
import { solution as solution2 } from '../19/part2.ts';

const input = await readInput(19);

describe('Machine parts should be parsed correctly', () => {
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(409_898);
	});

	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(113_057_405_770_956);
	});
});
