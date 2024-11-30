import { readInput } from '../../../lib/input.ts';
import { getLowestLocation } from '../05/getLowestLocation.ts';
import { solution as solution1 } from '../05/part1.ts';

const input = await readInput(5, '2023');
const testsInput = `seeds: 79 14 55 13
seed-to-soil map:
50 98 2
52 50 48
soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15
fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4
water-to-light map:
88 18 7
18 25 70
light-to-temperature map:
45 77 23
81 45 19
68 64 13
temperature-to-humidity map:
0 69 1
1 0 69
humidity-to-location map:
60 56 37
56 93 4`.split(/\n/g);

describe('Cards should be parsed correctly', () => {
	// Part 1
	test('Points should be counted correctly', () => {
		expect(getLowestLocation(testsInput)).toBe(35);
	});
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input)).toBe(227_653_707);
	});
});
