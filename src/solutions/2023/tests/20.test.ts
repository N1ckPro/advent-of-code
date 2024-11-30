import { readInput } from '../../../lib/input.ts';
import { solution as solution1 } from '../20/part1.ts';
import { solution as solution2 } from '../20/part2.ts';

const input = await readInput(20, '2023');

describe('Modules should be parsed correctly', () => {
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(899_848_294);
	});

	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(247_454_898_168_563);
	});
});
