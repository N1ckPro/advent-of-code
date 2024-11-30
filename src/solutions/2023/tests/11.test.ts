import { readInput } from '../../../lib/input.ts';
import { solution as solution1 } from '../11/part1.ts';
import { solution as solution2 } from '../11/part2.ts';

const input = await readInput(11, '2023');

describe('Cosmic expansion map should be parsed successfully', () => {
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(9_550_717);
	});

	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(648_458_253_817);
	});
});
