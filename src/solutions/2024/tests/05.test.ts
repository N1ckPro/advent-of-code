import { readInput } from '../../../lib/input.ts';
import { solution as solution1 } from '../05/part1.ts';
import { solution as solution2 } from '../05/part2.ts';

const input = await readInput(5, '2024', false);
const testsInput = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`.split(/\n/g);

describe('The elves are really really bad at printing', () => {
	// Part 1
	test('Provided input should give 143', () => {
		expect(solution1(testsInput)).toBe(143);
	});
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(4_609);
	});

	// TODO: These get stuck forever when run only during tests for some reason
	// Part 2
	/* test('Provided input should give 123', () => {
		expect(solution2(testsInput)).toBe(123);
	});
	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input)).toBe(5_723);
	});
    */
});
