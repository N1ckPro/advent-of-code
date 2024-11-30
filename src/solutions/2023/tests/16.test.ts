import { readInput } from '../../../lib/input.ts';
import { solution as solution1 } from '../16/part1.ts';
import { solution as solution2 } from '../16/part2.ts';

const input = await readInput(16, '2023');

describe('Beams should be parsed correctly', () => {
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(7_415);
	});

	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(7_943);
	});
});
