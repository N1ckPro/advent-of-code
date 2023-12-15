import { readInput } from '../../../lib/input.ts';
import { solution as solution1 } from '../15/part1.ts';
import { solution as solution2 } from '../15/part2.ts';

const input = await readInput(15);

describe('Lens algorithms should be done correctly', () => {
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(510_801);
	});

	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(212_763);
	});
});
