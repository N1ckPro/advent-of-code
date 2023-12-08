import { readInput } from '../../../lib/input.ts';
import { solution as solution1 } from '../08/part1.ts';

const input = await readInput(8);

describe('Maps should be parsed successfully', () => {
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(11_567);
	});

	// TODO: For some reason, this is throwing a runtime error when running, works fine when run without tests
	/* test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(9_858_474_970_153);
	});*/
});
