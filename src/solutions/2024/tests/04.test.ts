import { readInput } from '../../../lib/input.ts';
import { solution as solution1 } from '../04/part1.ts';
import { solution as solution2 } from '../04/part2.ts';

const input = await readInput(4, '2024');
const testsInput = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`.split(/\n/g);

describe('Me when an XMAS word search is actually an X-MAS word search', () => {
	// Part 1
	test('Provided input should give 18', () => {
		expect(solution1(testsInput)).toBe(18);
	});
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(2_662);
	});

	// Part 2
	test('Provided input should give 9', () => {
		expect(solution2(testsInput)).toBe(9);
	});
	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(2_034);
	});
});
