import { readInput } from '../../../lib/input.ts';
import { solution as solution1 } from '../03/part1.ts';
import { solution as solution2 } from '../03/part2.ts';

const input = await readInput(3, '2024');
const part1TestsInput = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`.split(/\n/g);
const part2TestsInput = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`.split(/\n/g);

describe('Instructions should be parsed correctly', () => {
	// Part 1
	test('Provided input should give 161', () => {
		expect(solution1(part1TestsInput)).toBe(161);
	});
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(187_825_547);
	});

	// Part 2
	test('Provided input should give 48', () => {
		expect(solution2(part2TestsInput)).toBe(48);
	});
	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(85_508_223);
	});
});
