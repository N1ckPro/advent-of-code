import { readInput } from '../../../lib/input.ts';
import { getNumber as getNumber1 } from '../01/getNumber1.ts';
import { getNumber as getNumber2 } from '../01/getNumber2.ts';
import { solution as solution1 } from '../01/part1.ts';
import { solution as solution2 } from '../01/part2.ts';

const input = await readInput(1);
describe('Numbers should be found correctly in strings', () => {
	// Part 1
	test('Only numbers should be parsed from strings', () => {
		expect(getNumber1('54nzzddht8ninelrkkseightseven6')).toBe(56);
		expect(getNumber1('8d')).toBe(88);
		expect(getNumber1('eightsevenvqvzlqxkbm6rqhsgqpnine7twonex')).toBe(67);
	});
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(54_953);
	});

	// Part 2
	test('Numbers written in both numeral or word forms should be parsed', () => {
		expect(getNumber2('6mlhponeglrzrvbsseven')).toBe(67);
		expect(getNumber2('8d')).toBe(88);
		expect(getNumber2('eightsevenvqvzlqxkbm6rqhsgqpnine7twonex')).toBe(81);
	});
	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(53_868);
	});
});
